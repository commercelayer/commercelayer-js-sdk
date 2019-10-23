import axios from 'axios'

const getToken = async () => {
  const { AUTH_URL, CLIENT_ID, CLIENT_SECRET, GRANT_TYPE, SCOPE } = process.env
  return await axios.post(AUTH_URL, {
    grant_type: GRANT_TYPE,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    scope: SCOPE
  })
}

export default getToken
