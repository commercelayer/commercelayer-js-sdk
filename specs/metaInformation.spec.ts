import CLayer, { Order } from '../src'
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
  expect.assertions(2)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).findBy({
    code: 'BABYONBU000000E63E7412MX',
  })
  expect(sku.id).toBe('wBeDdSgYQW')
  expect(sku.mode()).toBe('test')
})

it('METHOD --- perPage', async () => {
  expect.assertions(2)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .perPage(5)
    .all()
  expect(sku.recordCount()).toBe(97)
  expect(sku.pageCount()).toBe(20)
})

it('METHOD --- Find', async () => {
  expect.assertions(2)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).find(
    'wBeDdSgYQW'
  )
  expect(sku.id).toBe('wBeDdSgYQW')
  expect(sku.mode()).toEqual('test')
})

it('METHOD --- FindBy', async () => {
  expect.assertions(2)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).findBy({
    code: 'BABYONBU000000E63E7412MX',
  })
  expect(sku.id).toBe('wBeDdSgYQW')
  expect(sku.mode()).toBe('test')
})

it('METHOD --- First', async () => {
  expect.assertions(2)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).first()
  const meta = sku.getMetaInfo()
  expect(sku.id).toBe('GBwpOSPKAn')
  expect(meta).toHaveProperty('mode', 'test')
})

it('METHOD --- First with number', async () => {
  expect.assertions(2)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).first(3)
  expect(sku).toHaveLength(3)
  expect(sku[0].mode()).toBe('test')
})

it('METHOD --- Last', async () => {
  expect.assertions(2)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).last()
  const meta = sku.getMetaInfo()
  expect(sku.id).toBe('enKjRSNXGB')
  expect(meta).toHaveProperty('mode', 'test')
})

it('METHOD --- Last with number', async () => {
  expect.assertions(2)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).last(3)
  const meta = sku[0].getMetaInfo()
  expect(sku).toHaveLength(3)
  expect(meta).toHaveProperty('mode', 'test')
})

it('METHOD --- All', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).all()
  const meta = sku.getMetaInfo()
  expect(sku.toArray()).toHaveLength(10)
  expect(meta).toHaveProperty('recordCount', 97)
  expect(meta).toHaveProperty('pageCount', 10)
})

it('METHOD --- All with pageCount and recordCount', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).all()
  const pageCount = sku.pageCount()
  const recordCount = sku.recordCount()
  expect(sku.toArray()).toHaveLength(10)
  expect(recordCount).toBe(97)
  expect(pageCount).toBe(10)
})

it('METHOD --- All with next page', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .perPage(25)
    .all()
  const meta = sku.getMetaInfo()
  expect(sku.toArray()).toHaveLength(25)
  expect(meta).toHaveProperty('recordCount', 97)
  expect(meta).toHaveProperty('pageCount', 4)
})

it('METHOD --- All with page', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .page(3)
    .all()
  const meta = sku.getMetaInfo()
  expect(sku.toArray()).toHaveLength(10)
  expect(meta).toHaveProperty('recordCount', 97)
  expect(meta).toHaveProperty('pageCount', 10)
})

it('METHOD --- All with next page', async () => {
  expect.assertions(11)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .where({ codeIn: skus.join(',') })
    .includes('prices')
    .perPage(25)
    .all()
  const meta = sku.getMetaInfo()
  const firstSku = sku.first()
  const nextPage = sku.hasNextPage()
  expect(sku.toArray()).toHaveLength(25)
  expect(meta).toHaveProperty('recordCount', 94)
  expect(meta).toHaveProperty('pageCount', 4)
  expect(nextPage).toBe(true)
  expect(firstSku.id).toBe('GBwpOSPKAn')
  if (nextPage) {
    const nextSkus = await sku.withCredentials(blueBrandConfig).nextPage()
    const nextMeta = nextSkus.getMetaInfo()
    const nextFirstSku = nextSkus.first()
    expect(nextSkus.toArray()).toHaveLength(25)
    expect(nextMeta).toHaveProperty('recordCount', 94)
    expect(nextMeta).toHaveProperty('pageCount', 4)
    expect(nextSkus.hasNextPage()).toBe(true)
    expect(nextSkus.hasPrevPage()).toBe(true)
    expect(nextFirstSku.id).toBe('rZDklSQjQn')
  }
})

it('METHOD --- All with prev page', async () => {
  expect.assertions(9)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .where({ codeIn: skus.join(',') })
    .includes('prices')
    .page(3)
    .perPage(25)
    .all()
  const meta = sku.getMetaInfo()
  const prevPage = sku.hasPrevPage()
  expect(sku.toArray()).toHaveLength(25)
  expect(meta).toHaveProperty('recordCount', 94)
  expect(meta).toHaveProperty('pageCount', 4)
  expect(prevPage).toBe(true)
  if (prevPage) {
    const prevSkus = await sku.withCredentials(blueBrandConfig).prevPage()
    const prevMeta = prevSkus.getMetaInfo()
    expect(prevSkus.toArray()).toHaveLength(25)
    expect(prevMeta).toHaveProperty('recordCount', 94)
    expect(prevMeta).toHaveProperty('pageCount', 4)
    expect(prevSkus.hasNextPage()).toBe(true)
    expect(prevSkus.hasPrevPage()).toBe(true)
  }
})

it('METHOD --- All with select', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .select('name', 'metadata')
    .all()
  const meta = sku.getMetaInfo()
  expect(sku.toArray()).toHaveLength(10)
  expect(meta).toHaveProperty('recordCount', 97)
  expect(meta).toHaveProperty('pageCount', 10)
})

it('METHOD --- All with order', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .order({ createdAt: 'asc' })
    .all()
  const meta = sku.getMetaInfo()
  expect(sku.toArray()).toHaveLength(10)
  expect(meta).toHaveProperty('recordCount', 97)
  expect(meta).toHaveProperty('pageCount', 10)
})

it('METHOD --- All with includes', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .includes('prices')
    .all()
  const meta = sku.getMetaInfo()
  expect(sku.toArray()).toHaveLength(10)
  expect(meta).toHaveProperty('recordCount', 97)
  expect(meta).toHaveProperty('pageCount', 10)
})

it('METHOD --- Multi requests', async () => {
  // expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).find(
    'wBeDdSgYQW'
  )
  const skus = await CLayer.Sku.withCredentials(blueBrandConfig)
    .includes('prices')
    .all()
  const allPrices = await CLayer.Price.withCredentials(blueBrandConfig).all()

  const meta = sku.getMetaInfo()
  expect(sku.id).toBe('wBeDdSgYQW')
  expect(meta).toHaveProperty('mode', 'test')

  const metaSkus = skus.getMetaInfo()
  expect(skus.toArray()).toHaveLength(10)
  expect(metaSkus).toHaveProperty('recordCount', 97)
  expect(metaSkus).toHaveProperty('pageCount', 10)

  const metaPrices = allPrices.getMetaInfo()
  expect(allPrices.toArray()).toHaveLength(10)
  expect(metaPrices).toHaveProperty('recordCount', 194)
  expect(metaPrices).toHaveProperty('pageCount', 20)
})

it('METHOD --- Relationship', async () => {
  expect.assertions(4)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).find(
    'wBeDdSgYQW'
  )

  const prices = await sku
    .withCredentials(blueBrandConfig)
    .prices()
    .all()

  const meta = sku.getMetaInfo()
  expect(sku.id).toBe('wBeDdSgYQW')
  expect(meta).toHaveProperty('mode', 'test')

  const pageCount = prices.pageCount()
  const recordCount = prices.recordCount()
  expect(pageCount).toBe(1)
  expect(recordCount).toBe(2)
})

it('METHOD --- Order -> lineItems withCredentials', async () => {
  expect.assertions(4)
  const order = await CLayer.Order.withCredentials(blueBrandConfig).find(
    'awjobhxYPX'
  )

  const lineItems = await order
    .withCredentials(blueBrandConfig)
    .lineItems()
    .includes('lineItemOptions')
    .load()

  const meta = order.getMetaInfo()
  expect(order.id).toBe('awjobhxYPX')
  expect(meta).toHaveProperty('mode', 'test')

  const pageCount = lineItems.pageCount()
  const recordCount = lineItems.recordCount()
  expect(pageCount).toBe(4)
  expect(recordCount).toBe(37)
})

it('METHOD --- Order -> lineItems', async () => {
  expect.assertions(4)
  return Order.withCredentials(blueBrandConfig)
    .find('awjobhxYPX')
    .then((res) => {
      const meta = res.getMetaInfo()
      expect(res.id).toBe('awjobhxYPX')
      expect(meta).toHaveProperty('mode', 'test')

      return res
        .lineItems()
        .includes('lineItemOptions')
        .all()
        .then((col: any) => {
          const pageCount = col.pageCount()
          const recordCount = col.recordCount()
          expect(pageCount).toBe(4)
          expect(recordCount).toBe(37)
        })
    })
})

it('METHOD --- Sku -> Prices', async () => {
  expect.assertions(4)
  return CLayer.Sku.withCredentials(blueBrandConfig)
    .find('wBeDdSgYQW')
    .then((res) => {
      const meta = res.getMetaInfo()
      expect(res.id).toBe('wBeDdSgYQW')
      expect(meta).toHaveProperty('mode', 'test')

      return res
        .withCredentials(blueBrandConfig)
        .prices()
        .all()
        .then((col) => {
          const pageCount = col.pageCount()
          const recordCount = col.recordCount()
          expect(pageCount).toBe(1)
          expect(recordCount).toBe(2)
        })
    })
})

it('METHOD --- Get order and update lineItems', async () => {
  expect.assertions(8)
  const order = await CLayer.Order.withCredentials(blueBrandConfig).find(
    'awjobhxYPX'
  )

  const lineItems = await order
    .withCredentials(blueBrandConfig)
    .lineItems()
    .all()

  await lineItems.first().update({ quantity: 1 })

  const newOrder = await CLayer.Order.withCredentials(blueBrandConfig).find(
    'awjobhxYPX'
  )

  const newLineItems = await newOrder
    .withCredentials(blueBrandConfig)
    .lineItems()
    .all()

  await newLineItems.first().update({ quantity: 2 })

  expect(order.id).toBe('awjobhxYPX')
  expect(order.getMetaInfo()).toHaveProperty('mode', 'test')

  expect(lineItems.pageCount()).toBe(4)
  expect(lineItems.recordCount()).toBe(37)

  expect(newOrder.id).toBe('awjobhxYPX')
  expect(newOrder.getMetaInfo()).toHaveProperty('mode', 'test')

  expect(newLineItems.pageCount()).toBe(4)
  expect(newLineItems.recordCount()).toBe(37)
})

it('METHOD --- CRUD lineItem', async () => {
  expect.assertions(3)
  const order = await CLayer.Order.withCredentials(blueBrandConfig).find(
    'awjobhxYPX'
  )

  const lineItem = await CLayer.LineItem.withCredentials(
    blueBrandConfig
  ).create({
    order,
    skuCode: 'BABYONBU000000E63E7412MX',
    quantity: 1,
  })

  expect(order.id).toBe('awjobhxYPX')
  expect(order.getMetaInfo()).toHaveProperty('mode', 'test')
  expect(lineItem.getMetaInfo()).toHaveProperty('mode', 'test')

  await lineItem.withCredentials(blueBrandConfig).destroy()
})
