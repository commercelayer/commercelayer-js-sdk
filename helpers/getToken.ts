import {
  getIntegrationToken,
  getSalesChannelToken,
} from '@commercelayer/js-auth'

type AuthType = 'integration' | 'salesChannel'

// BLUE BRAND
export const getTokenBlueBrand = async (type: AuthType = 'integration') => {
  const {
    ENDPOINT,
    CLIENT_ID,
    CLIENT_SECRET,
    SALES_CHANNEL_ID,
    SCOPE,
  } = process.env
  return type === 'integration'
    ? await getIntegrationToken({
        endpoint: ENDPOINT,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
      })
    : await getSalesChannelToken({
        endpoint: ENDPOINT,
        clientId: SALES_CHANNEL_ID,
        scope: SCOPE,
      })
}

// LIME BRAND
export const getTokenLimeBrand = async () => {
  const {
    LIME_BRAND_ENDPOINT,
    LIME_BRAND_CLIENT_ID,
    LIME_BRAND_SCOPE,
  } = process.env
  return await getSalesChannelToken({
    endpoint: LIME_BRAND_ENDPOINT,
    clientId: LIME_BRAND_CLIENT_ID,
    scope: LIME_BRAND_SCOPE,
  })
}
