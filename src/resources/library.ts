import { createResourceLibrary } from 'active-resource'
import Library from '../@types/Library'

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
}

library.Base = ExtendLibrary

export default library
