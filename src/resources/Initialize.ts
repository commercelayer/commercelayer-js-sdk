import library from './library'

const initialize = (subdomain: string, accessToken: string): void => {
  library.baseUrl = `https://${subdomain}.commercelayer.io/api/`
  library.headers = {
    Authorization: `Bearer ${accessToken}`
  }
}

export default initialize
