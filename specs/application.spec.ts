import { Application } from '@commercelayer/js-sdk'
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

it('GET Application', async () => {
  const application = await Application.withCredentials(blueBrandConfig).all()
  return expect(application.id).toBe('dMnWmigapb')
})
