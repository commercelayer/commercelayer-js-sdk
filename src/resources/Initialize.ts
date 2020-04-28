import library from './library'

export interface InitConfig {
  accessToken: string
  endpoint: string
  cache?: boolean
}

export interface Init {
  ({ accessToken, endpoint, cache }: InitConfig): void
}

const init: Init = ({ accessToken, endpoint, cache }: InitConfig): void => {
  library.baseUrl = `${endpoint}/api/`
  library.headers = {
    Authorization: `Bearer ${accessToken}`,
  }
  library.cache = cache
}

export default init
