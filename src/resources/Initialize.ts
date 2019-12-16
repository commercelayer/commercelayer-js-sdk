import library from './library'

export interface InitConfig {
  accessToken: string
  endpoint: string
}

const init = ({ accessToken, endpoint }: InitConfig): void => {
  library.baseUrl = `${endpoint}/api/`
  library.headers = {
    Authorization: `Bearer ${accessToken}`
  }
}

export default init
