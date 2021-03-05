import { initCLayer, Sku } from '@commercelayer/js-sdk'
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
})
it('Retrieve an SKU', async () => {
  const sku = await Sku.withCredentials(blueBrandConfig).find('GZwpOSLVjW', {
    rawResponse: true,
  })
  expect(sku).toHaveProperty('data')
  if (!isArray(sku.data)) return expect(sku.data).toHaveProperty('attributes')
})

it('Retrieve an SKU with select and includes', async () => {
  const sku = await Sku.withCredentials(blueBrandConfig)
    .select('code', { prices: ['currencyCode', 'formattedAmount'] })
    .includes('prices')
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
