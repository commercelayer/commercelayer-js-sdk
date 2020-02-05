import {
  getIntegrationToken,
  getSalesChannelToken
} from '@commercelayer/js-auth'

// BLUE BRAND
export const getTokenBlueBrand = async () => {
  const { ENDPOINT, CLIENT_ID, CLIENT_SECRET } = process.env
  return await getIntegrationToken({
    endpoint: ENDPOINT,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET
  })
}

// LIME BRAND
export const getTokenLimeBrand = async () => {
  return await getSalesChannelToken({
    endpoint: 'https://the-lime-brand-2.commercelayer.co',
    clientId:
      '24938609156dc7391cd5dfdea32b828ef2c20e02bccfccda6510ed59c09935ac',
    scope: 'market:50'
  })
}
