
# ============================================================================
# IAM Role for Lambda
# ============================================================================

data "aws_iam_policy_document" "lambda_assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "lambda_role" {
  name               = "${var.project_name}-oss-updater-role"
  assume_role_policy = data.aws_iam_policy_document.lambda_assume_role.json
}

# Policy for CloudWatch Logs
data "aws_iam_policy_document" "lambda_logging" {
  statement {
    effect = "Allow"

    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]

    resources = ["arn:aws:logs:*:*:*"]
  }
}

resource "aws_iam_policy" "lambda_logging" {
  name        = "${var.project_name}-oss-updater-logging"
  description = "IAM policy for logging from Lambda"
  policy      = data.aws_iam_policy_document.lambda_logging.json
}

resource "aws_iam_role_policy_attachment" "lambda_logging" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = aws_iam_policy.lambda_logging.arn
}

# ============================================================================
# CloudWatch Log Group
# ============================================================================

resource "aws_cloudwatch_log_group" "lambda_logs" {
  name              = "/aws/lambda/${var.project_name}-oss-updater"
  retention_in_days = 14
}

# ============================================================================
# Lambda Function
# ============================================================================

resource "aws_lambda_function" "oss_updater" {
  filename         = "${path.module}/../lambda/function.zip"
  function_name    = "${var.project_name}-oss-updater"
  role             = aws_iam_role.lambda_role.arn
  handler          = "index.handler"
  runtime          = "nodejs20.x"
  timeout          = 300
  memory_size      = 256

  source_code_hash = filebase64sha256("${path.module}/../lambda/function.zip")

  environment {
    variables = {
      DATABASE_URL = var.database_url
      GITHUB_TOKEN = var.github_token
    }
  }

  depends_on = [
    aws_iam_role_policy_attachment.lambda_logging,
    aws_cloudwatch_log_group.lambda_logs,
  ]
}

# ============================================================================
# EventBridge Scheduler
# ============================================================================

resource "aws_scheduler_schedule_group" "oss_updater" {
  name = "${var.project_name}-oss-updater"
}

data "aws_iam_policy_document" "scheduler_assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["scheduler.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "scheduler_role" {
  name               = "${var.project_name}-oss-updater-scheduler-role"
  assume_role_policy = data.aws_iam_policy_document.scheduler_assume_role.json
}

data "aws_iam_policy_document" "scheduler_lambda_invoke" {
  statement {
    effect    = "Allow"
    actions   = ["lambda:InvokeFunction"]
    resources = [aws_lambda_function.oss_updater.arn]
  }
}

resource "aws_iam_role_policy" "scheduler_lambda_invoke" {
  name   = "${var.project_name}-scheduler-lambda-invoke"
  role   = aws_iam_role.scheduler_role.id
  policy = data.aws_iam_policy_document.scheduler_lambda_invoke.json
}

resource "aws_scheduler_schedule" "weekly_oss_update" {
  name        = "${var.project_name}-weekly-oss-update"
  group_name  = aws_scheduler_schedule_group.oss_updater.name
  description = "Triggers OSS stats update every Sunday at midnight UTC"

  flexible_time_window {
    mode = "OFF"
  }

  schedule_expression          = var.schedule_expression
  schedule_expression_timezone = "UTC"

  target {
    arn      = aws_lambda_function.oss_updater.arn
    role_arn = aws_iam_role.scheduler_role.arn

    retry_policy {
      maximum_event_age_in_seconds = 3600
      maximum_retry_attempts       = 3
    }
  }
}