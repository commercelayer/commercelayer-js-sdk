import { initCLayer, Organization } from '@commercelayer/js-sdk'
import { getTokenBlueBrand } from '../helpers/getToken'

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

it('GET Organization', async () => {
  const organization = await Organization.withCredentials(blueBrandConfig).all()
  return expect(organization.id).toBe('enWoxFMOnp')
})
