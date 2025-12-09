variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "ap-south-1"
}

variable "project_name" {
  description = "Project name for resource naming"
  type        = string
  default     = "hemanta-blog"
}

variable "environment" {
  description = "Environment (dev, staging, prod)"
  type        = string
  default     = "prod"
}

variable "database_url" {
  description = "PostgreSQL connection string"
  type        = string
  sensitive   = true
}

variable "github_token" {
  description = "GitHub personal access token for API requests"
  type        = string
  sensitive   = true
}

variable "schedule_expression" {
  description = "Cron expression for the scheduler (EventBridge format)"
  type        = string
  default     = "cron(0 0 ? * SUN *)"
}