export const Success = (statusCode: number, data: any = {}, message = '') => {
  return {
    data,
    message,
    status: statusCode,
  }
}

export const error = (statusCode: number, error: any = {}, message = '') => {
  // List of common HTTP request code
  const codes = [200, 201, 400, 401, 404, 403, 422, 500]

  // Get matched code
  const findCode = codes.find((code) => code === statusCode)

  if (!findCode) statusCode = 500
  else statusCode = findCode

  return {
    error,
    message,
    status: statusCode,
  }
}

export const Validation = (errors = []) => {
  return {
    message: 'Validation errors',
    status: 422,
    errors,
  }
}
