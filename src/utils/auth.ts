import jwt from 'jsonwebtoken'

export const verifier: (
  token: string,
  secret: string
) => { decoded: string | jwt.JwtPayload | null; err: any | null } = (
  token: string,
  secret: string
) => {
  try {
    const decoded = jwt.verify(token, secret)
    return { decoded: decoded, err: null }
  } catch (error) {
    return { decoded: null, err: error }
  }
}

export const tokenCreator = (
  userData: any,
  secret: string,
  expiration: string | number
) => {
  try {
    const token = jwt.sign(userData, secret, {
      expiresIn: expiration,
    })

    return token
  } catch (error) {
    throw error
  }
}
