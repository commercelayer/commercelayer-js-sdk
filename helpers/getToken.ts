import { getIntegrationToken } from '@commercelayer/js-auth'
const getToken = async () => {
  const { ENDPOINT, CLIENT_ID, CLIENT_SECRET } = process.env
  // console.log('process.env :', process.env)
  return await getIntegrationToken({
    endpoint: ENDPOINT,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET
  })
}

export default getToken
