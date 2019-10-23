import library from './library'

const init = (accessToken: string, host: string): void => {
  library.baseUrl = `https://${host}/api/`
  library.headers = {
    Authorization: `Bearer ${accessToken}`
  }
}

export default init
