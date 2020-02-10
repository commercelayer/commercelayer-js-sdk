import { createResourceLibrary } from 'active-resource'
import Library, { GeneralObject } from './@types/Library'
import { InitConfig } from './Initialize'
import * as _ from 'lodash'

const subdomain = 'yourdomain'

const library: Library = createResourceLibrary(
  `https://${subdomain}.commercelayer.io/api/`
)
class ExtendLibrary extends library.Base {
  static accessToken = ''
  static endpoint = ''
  static credentials = {}
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
    this.credentials = {
      [`${endpoint}/api/${this.queryName}`]: `Bearer ${accessToken}`,
      ...this.credentials
    }
    this.resourceLibrary.headers = {
      Authorization: `Bearer ${accessToken}`
    }
    this.__links = { related: `${endpoint}/api/${this.queryName}` }
    return this
  }
}
ExtendLibrary.afterRequest(function() {
  if (
    this.constructor.endpoint &&
    this.constructor.accessToken &&
    this.className
  ) {
    this.constructor.resourceLibrary.baseUrl = this.constructor.endpoint
    this.constructor.resourceLibrary.headers = {
      Authorization: this.constructor.accessToken
    }
    this.constructor.__links = null
  } else {
    if (!_.isEmpty(this.constructor.credentials)) {
      const credKey = this.__links.self.replace(`/${this.id}`, '')
      this.constructor.resourceLibrary.headers = {
        Authorization: this.constructor.credentials[credKey]
      }
    }
  }
})

library.Base = ExtendLibrary

export default library
