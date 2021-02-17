import Organization from '#resources/Organization'
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

it('GET Organization', async () => {
  const organization = await Organization.withCredentials(blueBrandConfig).all()
  return expect(organization.id).toBe('enWoxFMOnp')
})
