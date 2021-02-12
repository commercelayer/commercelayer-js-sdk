// import CLayer, { Order } from '../src'
import CLayer from '../src'
import { getTokenBlueBrand } from '../helpers/getToken'
import skus from '../helpers/testSkus'

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

it('METHOD --- pageCount and recordCount', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).findBy({
    code: 'BABYONBU000000E63E7412MX',
  })
  expect(sku.getHeaders()).not.toBeNull()
  expect(sku.getHeaders()).toHaveProperty('connection')
  expect(sku.getHeaders()).toHaveProperty('server')
})

it('METHOD --- perPage', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .perPage(5)
    .all()
  expect(sku.getHeaders()).not.toBeNull()
  expect(sku.getHeaders()).toHaveProperty('connection')
  expect(sku.getHeaders()).toHaveProperty('server')
})

it('METHOD --- Find', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).find(
    'wZeDdSamqn'
  )
  expect(sku.getHeaders()).not.toBeNull()
  expect(sku.getHeaders()).toHaveProperty('connection')
  expect(sku.getHeaders()).toHaveProperty('server')
})

it('METHOD --- FindBy', async () => {
  expect.assertions(4)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).findBy({
    code: 'BABYONBU000000E63E7412MX',
  })
  expect(sku.id).toBe('wZeDdSamqn')
  expect(sku.getHeaders()).not.toBeNull()
  expect(sku.getHeaders()).toHaveProperty('connection')
  expect(sku.getHeaders()).toHaveProperty('server')
})

it('METHOD --- First', async () => {
  expect.assertions(4)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).first()
  expect(sku.id).toBe('GZwpOSLVjW')
  expect(sku.getHeaders()).not.toBeNull()
  expect(sku.getHeaders()).toHaveProperty('connection')
  expect(sku.getHeaders()).toHaveProperty('server')
})

it('METHOD --- First with number', async () => {
  expect.assertions(4)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).first(3)
  expect(sku).toHaveLength(3)
  expect(sku[0].getHeaders()).not.toBeNull()
  expect(sku[0].getHeaders()).toHaveProperty('connection')
  expect(sku[0].getHeaders()).toHaveProperty('server')
})

it('METHOD --- Last', async () => {
  expect.assertions(4)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).last()
  expect(sku.id).toBe('eWKjRSwazZ')
  expect(sku.getHeaders()).not.toBeNull()
  expect(sku.getHeaders()).toHaveProperty('connection')
  expect(sku.getHeaders()).toHaveProperty('server')
})

it('METHOD --- Last with number', async () => {
  expect.assertions(4)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).last(3)
  expect(sku).toHaveLength(3)
  expect(sku[0].getHeaders()).not.toBeNull()
  expect(sku[0].getHeaders()).toHaveProperty('connection')
  expect(sku[0].getHeaders()).toHaveProperty('server')
})

it('METHOD --- All', async () => {
  expect.assertions(4)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).all()
  expect(sku.toArray()).toHaveLength(10)
  expect(sku.getHeaders()).not.toBeNull()
  expect(sku.getHeaders()).toHaveProperty('connection')
  expect(sku.getHeaders()).toHaveProperty('server')
})

it('METHOD --- All with perPage', async () => {
  expect.assertions(4)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .perPage(25)
    .all()
  expect(sku.toArray()).toHaveLength(25)
  expect(sku.getHeaders()).not.toBeNull()
  expect(sku.getHeaders()).toHaveProperty('connection')
  expect(sku.getHeaders()).toHaveProperty('server')
})

it('METHOD --- All with next page', async () => {
  expect.assertions(6)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .where({ codeIn: skus.join(',') })
    .includes('prices')
    .perPage(25)
    .all()
  const nextPage = sku.hasNextPage()
  expect(sku.getHeaders()).not.toBeNull()
  expect(sku.getHeaders()).toHaveProperty('connection')
  expect(sku.getHeaders()).toHaveProperty('server')
  if (nextPage) {
    const nextSkus = await sku.withCredentials(blueBrandConfig).nextPage()
    expect(nextSkus.getHeaders()).not.toBeNull()
    expect(nextSkus.getHeaders()).toHaveProperty('connection')
    expect(nextSkus.getHeaders()).toHaveProperty('server')
  }
})

it('METHOD --- Multi requests', async () => {
  expect.assertions(9)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).find(
    'wZeDdSamqn'
  )
  const skus = await CLayer.Sku.withCredentials(blueBrandConfig)
    .includes('prices')
    .all()
  const allPrices = await CLayer.Price.withCredentials(blueBrandConfig).all()

  expect(sku.getHeaders()).not.toBeNull()
  expect(sku.getHeaders()).toHaveProperty('connection')
  expect(sku.getHeaders()).toHaveProperty('server')

  expect(skus.getHeaders()).not.toBeNull()
  expect(skus.getHeaders()).toHaveProperty('connection')
  expect(skus.getHeaders()).toHaveProperty('server')

  expect(allPrices.getHeaders()).not.toBeNull()
  expect(allPrices.getHeaders()).toHaveProperty('connection')
  expect(allPrices.getHeaders()).toHaveProperty('server')
})

it('METHOD --- Order -> lineItems withCredentials', async () => {
  expect.assertions(4)
  const order = await CLayer.Order.withCredentials(blueBrandConfig).find(
    'JwXQehvvyP'
  )

  const lineItems = await order
    .withCredentials(blueBrandConfig)
    .lineItems()
    .includes('lineItemOptions')
    .load()

  expect(order.id).toBe('JwXQehvvyP')
  expect(lineItems.getHeaders()).not.toBeNull()
  expect(lineItems.getHeaders()).toHaveProperty('connection')
  expect(lineItems.getHeaders()).toHaveProperty('server')
})

it('METHOD --- Sku -> Prices', async () => {
  expect.assertions(6)
  return CLayer.Sku.withCredentials(blueBrandConfig)
    .find('wZeDdSamqn')
    .then((res) => {
      expect(res.getHeaders()).not.toBeNull()
      expect(res.getHeaders()).toHaveProperty('connection')
      expect(res.getHeaders()).toHaveProperty('server')

      return res
        .withCredentials(blueBrandConfig)
        .prices()
        .all()
        .then((col) => {
          expect(col.getHeaders()).not.toBeNull()
          expect(col.getHeaders()).toHaveProperty('connection')
          expect(col.getHeaders()).toHaveProperty('server')
        })
    })
})

it('METHOD --- Get order and update lineItems', async () => {
  expect.assertions(14)
  const order = await CLayer.Order.withCredentials(blueBrandConfig).find(
    'JwXQehvvyP'
  )

  const lineItems = await order
    .withCredentials(blueBrandConfig)
    .lineItems()
    .all()

  await lineItems.first().update({ quantity: 1 })

  const newOrder = await CLayer.Order.withCredentials(blueBrandConfig).find(
    'JwXQehvvyP'
  )

  const newLineItems = await newOrder
    .withCredentials(blueBrandConfig)
    .lineItems()
    .all()

  await newLineItems.first().update({ quantity: 2 })

  expect(order.id).toBe('JwXQehvvyP')
  expect(order.getHeaders()).not.toBeNull()
  expect(order.getHeaders()).toHaveProperty('connection')
  expect(order.getHeaders()).toHaveProperty('server')

  expect(lineItems.getHeaders()).not.toBeNull()
  expect(lineItems.getHeaders()).toHaveProperty('connection')
  expect(lineItems.getHeaders()).toHaveProperty('server')

  expect(newOrder.id).toBe('JwXQehvvyP')
  expect(newOrder.getHeaders()).not.toBeNull()
  expect(newOrder.getHeaders()).toHaveProperty('connection')
  expect(newOrder.getHeaders()).toHaveProperty('server')

  expect(newLineItems.getHeaders()).not.toBeNull()
  expect(newLineItems.getHeaders()).toHaveProperty('connection')
  expect(newLineItems.getHeaders()).toHaveProperty('server')
})
