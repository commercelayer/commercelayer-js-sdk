import CLayer, { Sku, initCLayer } from '../src/resources'

describe('withCredentials function', () => {
  it('With default export', () => {
    const sku = CLayer.Sku.withCredentials({
      accessToken: 'accessToken',
      endpoint: 'endpoint'
    })
    expect(sku.resourceLibrary.baseUrl).toBe(
      'https://yourdomain.commercelayer.io/api/'
    )
    expect(sku.resourceLibrary.headers.Authorization).toBe('Bearer accessToken')
  })
  it('With export', () => {
    initCLayer({
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
    expect(sku.resourceLibrary.baseUrl).toBe('endpointnull/api/')
    expect(sku.resourceLibrary.headers.Authorization).toBe('Bearer accessToken')
  })
})
