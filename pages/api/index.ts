import { NextApiRequest, NextApiResponse } from 'next'
import _ from 'lodash'

export default async (__: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    success: true,
  })
}
