import { getTokenBlueBrand } from '../helpers/getToken'
import CLayer, { initCLayer } from '@commercelayer/js-sdk'

let blueBrandConfig = { accessToken: '', endpoint: '' }
const { ENDPOINT } = process.env
beforeAll(async () => {
  const { accessToken } = await getTokenBlueBrand()
  blueBrandConfig = {
    accessToken: accessToken,
    endpoint: ENDPOINT,
  }
  initCLayer({
    ...blueBrandConfig,
    options: {
      rawResponse: false,
    },
  })
  return null
})

it('SKU --- single relationship --- shippingCategory', async () => {
  expect.assertions(2)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .includes('shippingCategory')
    .findBy({
      code: 'BABYONBU000000E63E7412MX',
    })
  expect(sku.shippingCategory()).not.toBeNull()
  expect(sku.shippingCategory().id).not.toBeUndefined()
})

it('SKU --- multi relationship --- prices', async () => {
  // expect.assertions(2)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .includes('prices')
    .findBy({
      code: 'BABYONBU000000E63E7412MX',
    })
  expect(sku.prices()).not.toBeNull()
  expect(
    sku
      .prices()
      .target()
      .toArray().length
  ).toBeGreaterThanOrEqual(1)
})

it('SKU --- multi relationships with includes --- prices', async () => {
  expect.assertions(4)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .includes('prices,stockItems')
    .findBy({
      code: 'BABYONBU000000E63E7412MX',
    })
  expect(sku.prices()).not.toBeNull()
  expect(sku.stockItems()).not.toBeNull()
  expect(
    sku
      .prices()
      .target()
      .toArray().length
  ).toBeGreaterThanOrEqual(1)
  expect(
    sku
      .stockItems()
      .target()
      .toArray().length
  ).toBeGreaterThanOrEqual(1)
})

// it('Order --- polymorphic relationship', async () => {
//   expect.assertions(3)
//   const order = await CLayer.Order.withCredentials(blueBrandConfig)
//     .includes('shippingAddress,paymentSource')
//     .find('xNlalhzzdw')
//   expect(order.paymentSource()).not.toBeNull()
//   expect(order.shippingAddress()).not.toBeNull()
//   expect(order.paymentSource().reference).toBe('xNlalhzzdw')
// })
