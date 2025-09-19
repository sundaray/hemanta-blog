type AppErrorOptions = {
  operation: string;
  message: string;
  cause?: unknown;
};

export class AppError extends Error {
  public readonly operation: string;
  public readonly cause?: unknown;

  constructor({ operation, message, cause }: AppErrorOptions) {
    super(message, { cause });
    this.operation = operation;
    this.name = new.target.name;
  }
}

export class NetworkError extends AppError {}
export class GithubApiError extends AppError {}
export class ParsingError extends AppError {}
export class DatabaseError extends AppError {}
