import CLayer from '../src'
import { getTokenBlueBrand, getTokenLimeBrand } from '../helpers/getToken'

let blueBrandConfig = { accessToken: '', endpoint: '' }
let limeBrandConfig = { accessToken: '', endpoint: '' }
const { ENDPOINT, LIME_BRAND_ENDPOINT } = process.env
beforeAll(async () => {
  const { accessToken } = await getTokenBlueBrand()
  const { accessToken: limeAccessToken } = await getTokenLimeBrand()
  blueBrandConfig = {
    accessToken: accessToken,
    endpoint: ENDPOINT,
  }
  limeBrandConfig = {
    accessToken: limeAccessToken,
    endpoint: LIME_BRAND_ENDPOINT,
  }
  return null
})

it('CRUD - Sync select with init', async () => {
  expect.assertions(2)
  CLayer.init(blueBrandConfig)
  const skuLime = await CLayer.Sku.withCredentials(limeBrandConfig).find(
    'KZmDzSKXbn'
  )
  expect(skuLime.id).toBe('KZmDzSKXbn')

  const sku = await CLayer.Sku.find('wBeDdSgYQW')
  expect(sku.id).toBe('wBeDdSgYQW')
})

it('Checking credentials', async () => {
  expect.assertions(3)
  const sku = CLayer.Sku.withCredentials(blueBrandConfig)
  expect(sku.resourceLibrary.baseUrl).toBe(`${blueBrandConfig.endpoint}/api/`)
  expect(sku.resourceLibrary.headers.Authorization).toBe(
    `Bearer ${blueBrandConfig.accessToken}`
  )
  const skus = await sku.first(1)
  expect(skus.length).toBe(1)
})

it('CRUD - Sync update', async () => {
  expect.assertions(2)
  const sku = await CLayer.Sku.withCredentials(blueBrandConfig).find(
    'wBeDdSgYQW'
  )
  expect(sku.id).toBe('wBeDdSgYQW')
  const skuUpdate = await sku
    .withCredentials(blueBrandConfig)
    .update({ description: 'Unit test sync description' })
  expect(skuUpdate.description).toBe('Unit test sync description')
})

it('CRUD - Async update', () => {
  expect.assertions(2)
  return CLayer.Sku.withCredentials(blueBrandConfig)
    .find('wBeDdSgYQW')
    .then((s) => {
      expect(s.id).toBe('wBeDdSgYQW')
      return s.withCredentials(blueBrandConfig).update(
        {
          description: 'Unit test async description',
        },
        (u) => {
          expect(u.description).toBe('Unit test async description')
        }
      )
    })
})
// it('CRUD - Async multi-connection select', () => {
//   expect.assertions(2)
//   CLayer.Sku.withCredentials(blueBrandConfig)
//     .find('wBeDdSgYQW')
//     .then(s => {
//       return expect(s.id).toBe('wBeDdSgYQW')
//     })
//   return CLayer.Sku.withCredentials(limeBrandConfig)
//     .find('KZmDzSKXbn')
//     .then(s => {
//       return expect(s.id).toBe('KZmDzSKXbn')
//     })
// })
it('CRUD - Sync multi-connection select', async () => {
  expect.assertions(2)
  const blueSku = await CLayer.Sku.withCredentials(blueBrandConfig).find(
    'wBeDdSgYQW'
  )
  expect(blueSku.id).toBe('wBeDdSgYQW')
  const limeSku = await CLayer.Sku.withCredentials(limeBrandConfig).find(
    'KZmDzSKXbn'
  )
  expect(limeSku.id).toBe('KZmDzSKXbn')
})
// it('CRUD - Async multi-connection update', () => {
//   expect.assertions(4)
//   CLayer.Sku.withCredentials(blueBrandConfig)
//     .find('wBeDdSgYQW')
//     .then(s => {
//       expect(s.id).toBe('wBeDdSgYQW')
//       s.withCredentials(blueBrandConfig)
//         .update({
//           description: 'Unit test async description with multi-connection'
//         })
//         .catch(e => {
//           console.log('e', e)
//         })
//       return expect(s.description).toBe(
//         'Unit test async description with multi-connection'
//       )
//     })
//     .catch(e => {
//       console.log('e', e)
//     })
//   return CLayer.Sku.withCredentials(limeBrandConfig)
//     .find('KZmDzSKXbn')
//     .then(s => {
//       s.withCredentials(limeBrandConfig)
//         .update({
//           description: 'Unit test async description with multi-connection'
//         })
//         .catch(e => {
//           console.log('e', e)
//         })
//       return expect(s.description).toBe(
//         'Unit test async description with multi-connection'
//       )
//     })
//     .catch(e => {
//       console.log('e', e)
//     })
// })
it('CRUD - Sync multi-connection update', async () => {
  expect.assertions(3)
  const blueSku = await CLayer.Sku.withCredentials(blueBrandConfig).find(
    'wBeDdSgYQW'
  )
  expect(blueSku.id).toBe('wBeDdSgYQW')
  const updateBlue = await blueSku.withCredentials(blueBrandConfig).update({
    description: 'Unit test sync description with multi-connection',
  })
  expect(updateBlue.description).toBe(
    'Unit test sync description with multi-connection'
  )

  const limeSku = await CLayer.Sku.withCredentials(limeBrandConfig).find(
    'KZmDzSKXbn'
  )
  expect(limeSku.id).toBe('KZmDzSKXbn')
  // FIXME: What's wrong?? active-resource bug?
  // const updateLime = await limeSku
  //   .withCredentials(limeBrandConfig)
  //   .update({
  //     description: 'Unit test sync description with multi-connection'
  //   })
  //   .catch(e => {
  //     console.log('e', e)
  //   })
  // expect(updateLime.description).toBe(
  //   'Unit test sync description with multi-connection'
  // )
})
