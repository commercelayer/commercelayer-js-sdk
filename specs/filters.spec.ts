import CLayer from '../src'
import { getTokenBlueBrand } from '../helpers/getToken'

let blueBrandConfig = { accessToken: '', endpoint: '' }
const { ENDPOINT } = process.env
beforeAll(async () => {
  const { accessToken } = await getTokenBlueBrand()
  blueBrandConfig = {
    accessToken: accessToken,
    endpoint: ENDPOINT,
  }
  return null
})

it('METHOD --- select', async () => {
  expect.assertions(4)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .select('name,code')
    .findBy({
      code: 'BABYONBU000000E63E7412MX',
    })
  expect(sku.code).not.toBeUndefined()
  expect(sku.name).not.toBeUndefined()
  expect(sku.description).toBeUndefined()
  // @ts-ignore
  expect(sku.__queryParams.fields.skus).toEqual(
    expect.arrayContaining(['name,code'])
  )
})

it('METHOD --- select with includes', async () => {
  expect.assertions(5)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .includes('prices')
    .select('name,code')
    .findBy({
      code: 'BABYONBU000000E63E7412MX',
    })
  expect(sku.code).not.toBeUndefined()
  expect(sku.name).not.toBeUndefined()
  expect(sku.description).toBeUndefined()
  // @ts-ignore
  expect(sku.__queryParams.include).toEqual(expect.arrayContaining(['prices']))
  // @ts-ignore
  expect(sku.__queryParams.fields.skus).toEqual(
    expect.arrayContaining(['name,code'])
  )
})

it('METHOD --- select with includes and where', async () => {
  expect.assertions(4)
  const order = await CLayer.Order.withCredentials(blueBrandConfig)
    .where({
      paymentStatusIn: 'unpaid',
    })
    .includes('lineItems')
    .select('number')
    .perPage(5)
    .page(1)
    .first()
  expect(order.number).not.toBeUndefined()
  expect(order.formattedDiscountAmount).toBeUndefined()
  // @ts-ignore
  expect(order.__queryParams.include).toEqual(
    expect.arrayContaining(['lineItems'])
  )
  // @ts-ignore
  expect(order.__queryParams.fields.orders).toEqual(
    expect.arrayContaining(['number'])
  )
})
