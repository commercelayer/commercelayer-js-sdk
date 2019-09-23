import library from './library'

const initialize = (domain: string, accessToken: string): any => {
  library.baseUrl = `https://${domain}.commercelayer.io/api/`
  library.headers = {
    Authorization: `Bearer ${accessToken}`
  }
}

export default initialize
