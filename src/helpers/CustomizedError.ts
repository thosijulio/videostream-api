import { StatusCodes } from 'http-status-codes';

class CustomizedError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends CustomizedError {
  constructor(message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

export class InternalServerError extends CustomizedError {
  constructor(message: string) {
    super(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

export class UnauthorizedError extends CustomizedError {
  constructor(message: string) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

export class ForbiddenError extends CustomizedError {
  constructor(message: string) {
    super(message, StatusCodes.FORBIDDEN);
  }
}

export class NotFoundError extends CustomizedError {
  constructor(message: string) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

export class UnprocessableEntityError extends CustomizedError {
  constructor(message: string) {
    super(message, StatusCodes.UNPROCESSABLE_ENTITY);
  }
}

export default CustomizedError;
