// import { Error, Success } from 'utils/response'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // let reservation = new Reservation({
  //   name: req.body.name,
  //   email: req.body.email,
  //   industry: req.body.industry,
  //   designation: req.body.designation,
  // })
  // reservation
  //   .save()
  //   .then((response) => {
  //     const successResponse = Success(200, {}, 'Reservation successful!')
  //     res.status(successResonse.status).json(successResponse)
  //   })
  //   .catch((error) => {
  //     const errorResponse = Error(500, error, 'Error saving reservation')
  //     res.status(errorResponse.status).json(errorResponse)
  //   })
  if (req.method === 'GET') {
    res.status(200).json({
      message: 'Welcome to Bamzi',
    })
  }
}
