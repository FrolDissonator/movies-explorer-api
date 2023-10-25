const ERR_BAD_REQUEST = 400;
const ERR_UNAUTHORIZED = 401;
const ERR_FORBIDDEN = 403;
const ERR_NOT_FOUND = 404;
const ERR_ALREADY_EXISTS = 409;
const ERR_DEFAULT = 500;

const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/im;

module.exports = {
  ERR_BAD_REQUEST,
  ERR_NOT_FOUND,
  ERR_UNAUTHORIZED,
  ERR_FORBIDDEN,
  ERR_ALREADY_EXISTS,
  ERR_DEFAULT,
  urlRegex,
};
