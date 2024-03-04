import { StatusCodes } from 'http-status-codes';

class CustomizedResponseStatus extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends CustomizedResponseStatus {
  constructor(message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

export class ConflictError extends CustomizedResponseStatus {
  constructor(message: string) {
    super(message, StatusCodes.CONFLICT);
  }
}

export class NotModifiedRedirection extends CustomizedResponseStatus {
  constructor() {
    super('', StatusCodes.NOT_MODIFIED);
  }
}

export class InternalServerError extends CustomizedResponseStatus {
  constructor(message: string) {
    super(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

export class UnauthorizedError extends CustomizedResponseStatus {
  constructor(message: string) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

export class ForbiddenError extends CustomizedResponseStatus {
  constructor(message: string) {
    super(message, StatusCodes.FORBIDDEN);
  }
}

export class NotFoundError extends CustomizedResponseStatus {
  constructor(message: string) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

export class UnprocessableEntityError extends CustomizedResponseStatus {
  constructor(message: string) {
    super(message, StatusCodes.UNPROCESSABLE_ENTITY);
  }
}

export default CustomizedResponseStatus;
