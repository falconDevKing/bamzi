/**
 * @desc    Send any success response
 *
 * @param   {string} message
 * @param   {object} data
 * @param   {number} statusCode
 */
exports.success = (statusCode, data = {}, message = "") => {
  return {
    data,
    message,
    status: statusCode,
  };
};

/**
 * @desc    Send any error response
 *
 * @param   {string} message
 * @param   {number} statusCode
 */
exports.error = (statusCode, error = {}, message = "") => {
  // List of common HTTP request code
  const codes = [200, 201, 400, 401, 404, 403, 422, 500];

  // Get matched code
  const findCode = codes.find((code) => code === statusCode);

  if (!findCode) statusCode = 500;
  else statusCode = findCode;

  return {
    error,
    message,
    status: statusCode,
  };
};

/**
 * @desc    Send any validation response
 *
 * @param   {object | array} errors
 */
exports.validation = (errors = []) => {
  return {
    message: "Validation errors",
    status: 422,
    errors,
  };
};
