import library from './library'

export interface InitConfig {
  accessToken: string
  host: string
}

const init = ({ accessToken, host }: InitConfig): void => {
  library.baseUrl = `https://${host}/api/`
  library.headers = {
    Authorization: `Bearer ${accessToken}`
  }
}

export default init
