import CLayer, { Sku } from '../src/resources'
import init from '../src/resources/Initialize'

describe('withCredentials function', () => {
  it('With default export', () => {
    const sku = CLayer.Sku.withCredentials({
      accessToken: 'accessToken',
      endpoint: 'endpoint'
    })
    expect(sku.resourceLibrary.baseUrl).toBe('endpoint/api/')
    expect(sku.resourceLibrary.headers.Authorization).toBe('Bearer accessToken')
  })
  it('With export', () => {
    init({
      accessToken: 'accessTokenNull',
      endpoint: 'endpointnull'
    })
    const skuOld = Sku
    expect(skuOld.resourceLibrary.baseUrl).toBe('endpointnull/api/')
    expect(skuOld.resourceLibrary.headers.Authorization).toBe(
      'Bearer accessTokenNull'
    )

    const sku = Sku.withCredentials({
      accessToken: 'accessToken',
      endpoint: 'endpoint'
    })
    expect(sku.resourceLibrary.baseUrl).toBe('endpoint/api/')
    expect(sku.resourceLibrary.headers.Authorization).toBe('Bearer accessToken')
  })
})
