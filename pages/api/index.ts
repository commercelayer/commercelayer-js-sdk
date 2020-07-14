import { NextApiRequest, NextApiResponse } from 'next'
import _ from 'lodash'
import { getTokenBlueBrand } from '../../helpers/getToken'
import { initCLayer, Order, Sku } from '../../src'

export default async (__: NextApiRequest, res: NextApiResponse) => {
  const { ENDPOINT } = process.env
  const { accessToken } = await getTokenBlueBrand()
  const config = {
    accessToken: accessToken,
    endpoint: ENDPOINT,
  }
  initCLayer(config)
  const order = await Order.withCredentials(config).find('JqXQehvOkN')
  console.log('order._refresh', order._refresh)
  // const sku = await Sku.find('wBeDdSgYQW')
  // console.log('Sku', Sku)
  // debugger
  const attributes = {
    _refresh: true,
  }
  await order.update(attributes)
  console.log('updateOrder', order._refresh)
  res.status(200).json({
    success: true,
  })
}
