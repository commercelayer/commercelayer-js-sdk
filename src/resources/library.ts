import { createResourceLibrary } from 'active-resource'
import Library, { GeneralObject } from './@types/Library'
import { InitConfig } from './Initialize'

const subdomain = 'yourdomain'

const library: Library = createResourceLibrary(
  `https://${subdomain}.commercelayer.io/api/`
)
class ExtendLibrary extends library.Base {
  static accessToken = ''
  static endpoint = ''
  static where(options: object): any {
    return this.__newRelation(
      this.__extendObjectParam('filter', {
        q: { ...options }
      })
    )
  }
  static findBy(options: GeneralObject): any {
    const eqOptions: GeneralObject = {}
    Object.keys(options).map((v: string) => {
      eqOptions[`${v}_eq`] = options[v]
    })
    return this.where(eqOptions).first()
  }
  static withCredentials({ accessToken, endpoint }: InitConfig) {
    if (!this.accessToken && !this.endpoint) {
      if (!this.resourceLibrary.headers?.Authorization) {
        this.accessToken = `Bearer `
        this.endpoint = this.resourceLibrary.baseUrl
      } else {
        this.accessToken = this.resourceLibrary.headers.Authorization
        this.endpoint = this.resourceLibrary.baseUrl
      }
    }
    this.resourceLibrary.headers = {
      Authorization: `Bearer ${accessToken}`
    }
    this.__links = { related: `${endpoint}/api/${this.queryName}` }
    return this
  }
}
ExtendLibrary.afterRequest(function() {
  if (this.constructor.endpoint && this.constructor.accessToken) {
    this.constructor.resourceLibrary.baseUrl = this.constructor.endpoint
    this.constructor.resourceLibrary.headers = {
      Authorization: this.constructor.accessToken
    }
    this.constructor.__links = null
  }
})

library.Base = ExtendLibrary

export default library
