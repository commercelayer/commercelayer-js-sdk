import { initCLayer, Market, Order, Sku } from '@commercelayer/js-sdk'
import isArray from 'lodash/isArray'
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

it('GET SKUs with global config', async () => {
  initCLayer({
    ...blueBrandConfig,
    options: {
      rawResponse: true,
    },
  })
  const skus = await Sku.all()
  expect(skus).toHaveProperty('data')
  expect(skus.data).toBeInstanceOf(Array)
  expect(skus.data[0]).toHaveProperty('attributes')
  expect(skus).toHaveProperty('links')
  return expect(skus).toHaveProperty('meta')
})

it('GET SKUs', async () => {
  const skus = await Sku.withCredentials(blueBrandConfig).all({
    rawResponse: true,
  })
  expect(skus).toHaveProperty('data')
  expect(skus.data).toBeInstanceOf(Array)
  expect(skus.data[0]).toHaveProperty('attributes')
  expect(skus).toHaveProperty('links')
  return expect(skus).toHaveProperty('meta')
})

it('GET SKUs with where and includes', async () => {
  const skus = await Sku.withCredentials(blueBrandConfig)
    .where({ codeIn: 'TSHIRTMMFFFFFF000000LXXX,TSHIRTMM000000E63E74XLXX' })
    .includes('prices.priceList')
    .all({
      rawResponse: true,
    })
  expect(skus).toHaveProperty('data')
  if (isArray(skus.data)) {
    expect(skus.data.length).not.toBe(0)
    skus.included.map((i) => {
      const t = ['prices', 'price_lists'].includes(i.type)
      expect(t).toBeTruthy()
    })
  }
  return true
})
it('GET SKUs with select', async () => {
  const skus = await Sku.withCredentials(blueBrandConfig)
    .select('code')
    .all({
      rawResponse: true,
    })
  expect(skus).toHaveProperty('data')
  if (isArray(skus.data)) {
    expect(skus.data.length).not.toBe(0)
    skus.data.map((i) => {
      expect(i.attributes.code).toBeDefined()
    })
  }
  return true
})
it('Retrieve an SKU', async () => {
  const sku = await Sku.withCredentials(blueBrandConfig).find('GZwpOSLVjW', {
    rawResponse: true,
  })
  expect(sku).toHaveProperty('data')
  if (!isArray(sku.data)) return expect(sku.data).toHaveProperty('attributes')
  return true
})

it('Retrieve an SKU with select and includes', async () => {
  const sku = await Sku.withCredentials(blueBrandConfig)
    .includes('prices')
    .select('code', { prices: ['currencyCode', 'formattedAmount'] })
    .find('GZwpOSLVjW', {
      rawResponse: true,
    })
  expect(sku).toHaveProperty('data')
  if (!isArray(sku.data)) return expect(sku.data).toHaveProperty('attributes')
  if (isArray(sku.included)) {
    return sku.included.map((i) => {
      expect(i.attributes).toHaveProperty('currency_code')
      return expect(i.attributes).toHaveProperty('formatted_amount')
    })
  }
  return true
})

it('GET SKUs pagination', async () => {
  const skus = await Sku.withCredentials(blueBrandConfig).all({
    rawResponse: true,
  })
  expect(skus).toHaveProperty('meta')
  expect(skus.meta).toHaveProperty('page_count')
  expect(skus.meta).toHaveProperty('record_count')
  for (let pageCount = 2; pageCount < skus.meta.page_count; pageCount++) {
    const skusnd = await Sku.withCredentials(blueBrandConfig)
      .page(pageCount)
      .all({
        rawResponse: true,
      })
    expect(skusnd).toHaveProperty('data')
    expect(skusnd.data[0].id).not.toEqual(skus.data[0].id)
    expect(skusnd.data).toBeInstanceOf(Array)
  }
  return expect(skus).toHaveProperty('data')
})

it('GET SKUs pagination and perPage', async () => {
  const skus = await Sku.withCredentials(blueBrandConfig)
    .page(1)
    .perPage(3)
    .all({
      rawResponse: true,
    })
  expect(skus).toHaveProperty('meta')
  expect(skus.meta).toHaveProperty('page_count')
  expect(skus.meta).toHaveProperty('record_count')
  // @ts-ignore
  expect(skus.data.length).toBe(3)
  return expect(skus).toHaveProperty('data')
})

it('GET SKUs with order, select, page and perPage', async () => {
  const skus = await Sku.withCredentials(blueBrandConfig)
    .page(1)
    .select('code')
    .order({ code: 'asc' })
    .perPage(3)
    .all({
      rawResponse: true,
    })
  expect(skus).toHaveProperty('meta')
  expect(skus.meta).toHaveProperty('page_count')
  expect(skus.meta).toHaveProperty('record_count')
  // @ts-ignore
  expect(skus.data.length).toBe(3)
  expect(skus.data[0].attributes).toHaveProperty('code')
  return expect(skus).toHaveProperty('data')
})

it('Create, update and destroy an Order', async () => {
  const reference = 'TEST_RAW_RESPONSE'
  const referenceOrigin = 'ORIGIN_RAW_RESPONSE'
  const referenceUpdated = 'TEST_RAW_RESPONSE_UPDATED'
  const o = await Order.create({
    reference,
    referenceOrigin,
    market: Market.build({ id: 'BoVmRhdAlE' }),
  })
  expect(o.data).toHaveProperty('id')
  expect(o.data.attributes).toHaveProperty('reference')
  expect(o.data.attributes).toHaveProperty('reference_origin')
  expect(o.data.attributes.reference).toEqual(reference)
  expect(o.data.attributes.reference_origin).toEqual(referenceOrigin)
  const getOrder = await Order.find(o.data.id, { rawResponse: false })
  const orderUpdated = await getOrder.update({
    reference: referenceUpdated,
  })
  expect(orderUpdated.data.attributes).toHaveProperty('reference')
  expect(orderUpdated.data.attributes.reference).toEqual(referenceUpdated)
  return await getOrder.destroy()
})

it('GET first SKU', async () => {
  const sku = await Sku.select('code', 'reference', 'referenceOrigin').first()
  expect(sku.data).toHaveProperty('id')
  return expect(sku.data.id).toEqual('GZwpOSLVjW')
})

it('GET first 2 SKUs', async () => {
  const sku = await Sku.select('code', 'reference', 'referenceOrigin').first(2)
  return expect(sku.data.length).toBe(2)
})

it('GET last SKU', async () => {
  const sku = await Sku.select('code', 'reference', 'referenceOrigin').last()
  expect(sku.data).toHaveProperty('id')
  return expect(sku.data.id).toEqual('eWKjRSwazZ')
})

it('GET last 2 SKUs', async () => {
  const sku = await Sku.select('code', 'reference', 'referenceOrigin').last(2)
  return expect(sku.data.length).toBe(2)
})

it('GET SKU by FindBy Method', async () => {
  const code = 'TSHIRTMM000000E63E74'
  const sku = await Sku.select('code', 'reference', 'referenceOrigin').findBy({
    referenceEq: code,
  })
  return expect(sku.data.attributes.reference).toEqual(code)
})
