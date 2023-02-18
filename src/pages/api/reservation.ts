import type { NextApiRequest, NextApiResponse } from 'next'
import Reservation from 'models/Reservation'
import ConnectMongo from 'utils/connectMongo'
import { error, Success } from 'utils/response'

type Data = {
  status: number
  message: string
  data?: any
  error?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      await ConnectMongo()

      let reservation = new Reservation({
        name: req.body?.name,
        email: req.body?.email,
        industry: req.body?.industry,
        designation: req.body?.designation,
      })

      const reserved = await reservation.save()

      const successResponse = Success(
        200,
        reserved,
        'Reservation successfully!'
      )
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error creating reservation')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
