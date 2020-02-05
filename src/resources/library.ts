import { createResourceLibrary } from 'active-resource'
import Library, { GeneralObject } from './@types/Library'
import { InitConfig } from './Initialize'

const subdomain = 'static-commerce'

const library: Library = createResourceLibrary(
  `https://${subdomain}.commercelayer.io/api/`
)
class ExtendLibrary extends library.Base {
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
    this.resourceLibrary.baseUrl = `${endpoint}/api/`
    this.resourceLibrary.headers = {
      Authorization: `Bearer ${accessToken}`
    }
    this.__links = undefined
    return this
  }
}

library.Base = ExtendLibrary

export default library
