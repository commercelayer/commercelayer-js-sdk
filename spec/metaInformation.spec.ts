import CLayer from '../src/resources'
import { getTokenBlueBrand } from '../helpers/getToken'
import skus from '../helpers/testSkus'

let blueBrandConfig = { accessToken: '', endpoint: '' }
const { ENDPOINT } = process.env
beforeAll(async () => {
  const { accessToken } = await getTokenBlueBrand()
  blueBrandConfig = {
    accessToken: accessToken,
    endpoint: ENDPOINT
  }
  return null
})

it('METHOD --- Find', async () => {
  expect.assertions(2)
  CLayer.init(blueBrandConfig)
  const sku = await CLayer.Sku.find('wBeDdSgYQW')
  expect(sku.id).toBe('wBeDdSgYQW')
  expect(sku.meta).toHaveProperty('mode', 'test')
})

it('METHOD --- FindBy', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).findBy({
    code: 'BABYONBU000000E63E7412MX'
  })
  expect(sku.id).toBe('wBeDdSgYQW')
  expect(sku.meta).toHaveProperty('recordCount', 1)
  expect(sku.meta).toHaveProperty('pageCount', 1)
})

it('METHOD --- First', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).first()
  expect(sku.id).toBe('GBwpOSPKAn')
  expect(sku.meta).toHaveProperty('recordCount', 97)
  expect(sku.meta).toHaveProperty('pageCount', 10)
})

it('METHOD --- First with number', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).first(3)
  expect(sku).toHaveLength(3)
  expect(sku[0].meta).toHaveProperty('recordCount', 97)
  expect(sku[0].meta).toHaveProperty('pageCount', 10)
})

it('METHOD --- Last', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).last()
  expect(sku.id).toBe('enKjRSNXGB')
  expect(sku.meta).toHaveProperty('recordCount', 97)
  expect(sku.meta).toHaveProperty('pageCount', 10)
})

it('METHOD --- Last with number', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).last(3)
  expect(sku).toHaveLength(3)
  expect(sku[0].meta).toHaveProperty('recordCount', 97)
  expect(sku[0].meta).toHaveProperty('pageCount', 10)
})

it('METHOD --- All', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).all()
  const meta = sku.getMetaInfo()
  expect(sku.toArray()).toHaveLength(10)
  expect(meta).toHaveProperty('recordCount', 97)
  expect(meta).toHaveProperty('pageCount', 10)
})

it('METHOD --- All with next page', async () => {
  expect.assertions(3)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig)
    .perPage(25)
    .all()
  const meta = sku.getMetaInfo()
  expect(sku.toArray()).toHaveLength(25)
  expect(meta).toHaveProperty('recordCount', 97)
  expect(meta).toHaveProperty('pageCount', 10)
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
    const nextSkus = await sku.nextPage()
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
