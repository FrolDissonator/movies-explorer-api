const {
  ERR_BAD_REQUEST,
  ERR_NOT_FOUND,
  ERR_UNAUTHORIZED,
  ERR_FORBIDDEN,
  ERR_ALREADY_EXISTS,
  ERR_DEFAULT,
} = require('../utils/constants');

class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(msg) {
    return new ApiError(ERR_BAD_REQUEST, msg);
  }

  static notFound(msg) {
    return new ApiError(ERR_NOT_FOUND, msg);
  }

  static internal(msg) {
    return new ApiError(ERR_DEFAULT, msg);
  }

  static unauthorized(msg) {
    return new ApiError(ERR_UNAUTHORIZED, msg);
  }

  static forbidden(msg) {
    return new ApiError(ERR_FORBIDDEN, msg);
  }

  static alreadyExists(msg) {
    return new ApiError(ERR_ALREADY_EXISTS, msg);
  }
}

module.exports = ApiError;
