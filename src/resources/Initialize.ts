import library from './library'
import BaseClass from '../utils/BaseClass'

export interface InitConfig {
  accessToken: string
  endpoint: string
}

export interface Init {
  ({ accessToken, endpoint }: InitConfig): void
}

const init: Init = ({ accessToken, endpoint }: InitConfig): void => {
  library.baseUrl = `${endpoint}/api/`
  library.headers = {
    Authorization: `Bearer ${accessToken}`
  }
}

export default init
