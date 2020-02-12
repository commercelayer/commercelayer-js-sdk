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
  const {
    LIME_BRAND_ENDPOINT,
    LIME_BRAND_CLIENT_ID,
    LIME_BRAND_SCOPE
  } = process.env
  return await getSalesChannelToken({
    endpoint: LIME_BRAND_ENDPOINT,
    clientId: LIME_BRAND_CLIENT_ID,
    scope: LIME_BRAND_SCOPE
  })
}
