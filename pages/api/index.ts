import { NextApiRequest, NextApiResponse } from 'next'
import _ from 'lodash'
import { getTokenBlueBrand } from '../../helpers/getToken'
import { initCLayer, Order } from '../../dist'

export default async (__: NextApiRequest, res: NextApiResponse) => {
  const { ENDPOINT } = process.env
  const { accessToken } = await getTokenBlueBrand()
  const config = {
    accessToken: accessToken,
    endpoint: ENDPOINT,
  }
  initCLayer(config)
  const order = await Order.withCredentials(config).find('JqXQehvOkN')
  res.status(200).json({
    success: true,
    order: order.attributes(),
  })
}
