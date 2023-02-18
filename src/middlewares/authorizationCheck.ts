import { tokenCreator, verifier } from 'utils/auth'
import { Success, error } from 'utils/response'

const accessSecret = process.env.ACCESS_TOKEN_SECRET as string
const refreshSecret = process.env.REFRESH_TOKEN_SECRET as string

export const authorizationCheck = async (token: string) => {
  // const authHeader = req.headers['authorization']
  // const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return { auth: false, refresh: true, message: 'Token not sent' }
    // return res
    //   .status(401)
    //   .json({ auth: false, refresh: true, message: 'Token not sent' })
  }

  try {
    const { decoded, err } = verifier(token, accessSecret)

    if (err) {
      const errorResponse = error(
        401,
        {
          auth: false,
          refresh: true,
          error: err,
        },
        'Unauthorized Request'
      )
      return errorResponse
      // return res.status(errorResponse.status).json(errorResponse)
    }
    return decoded
    // req.user = decoded
    // next()
  } catch (err: any) {
    const errorResponse = error(
      err.status ?? 500,
      {
        auth: false,
        refresh: true,
        error: err,
      },
      err.message ?? 'User Verification failed'
    )
    return errorResponse
    // return res.status(errorResponse.status).json(errorResponse)
  }
}
