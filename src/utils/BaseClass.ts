// TODO remove ts-ignore comments
import { InitConfig, Options } from '#resources/Initialize'
import library from '#resources/library'
import {
  HeadersResponse,
  MultiRelationship,
  SingleRelationship,
} from '#typings/Library'

export type Meta = {
  pageCount?: number
  recordCount?: number
  mode?: string
}

class BaseClass extends library.Base {
  __meta: Meta = {}
  __collectionMeta: Meta = {}
  __headers: HeadersResponse | {} = {}
  id: string
  constructor() {
    super()
    return this
  }
  includes: (...attribute: string[]) => this
  all: () =>
    | Promise<MultiRelationship<this>>
    | Promise<SingleRelationship<this>>
  // errors: () => Errors<this>
  // update: (attrs: object, callback?: (response: this) => void) => this
  getMetaInfo() {
    return this.__meta
  }
  getHeaders() {
    return this.__headers
  }
  pageCount() {
    return this.__meta.pageCount
  }
  recordCount() {
    return this.__meta.recordCount
  }
  mode() {
    return this.__meta.mode
  }
  setMetaInfo(meta: object) {
    return (this.__meta = meta)
  }
  setHeaders(headers: object) {
    return (this.__headers = headers)
  }
  setCollectionMetaInfo(meta: object) {
    return (this.__collectionMeta = meta)
  }
  klass() {
    // @ts-ignore
    const interceptors = super.klass().interface().axios.interceptors
    // @ts-ignore
    this.constructor.includeMetaInfo(interceptors)
    // @ts-ignore
    return super.klass()
  }
  association(name: string) {
    // @ts-ignore
    const interceptors = super.association(name).interface().axios.interceptors
    // @ts-ignore
    this.constructor.includeMetaInfo(interceptors)
    // @ts-ignore
    return super.association(name)
  }
  update(attributes: Record<string, any>, callback?: any, options?: Options) {
    if (
      options?.rawResponse === false ||
      library?.options?.rawResponse === false
    ) {
      return super.update(attributes, callback)
    }
    // @ts-ignore
    return this.constructor.rawResponse({
      data: attributes,
      method: 'patch',
      paramKey: this.id,
      callback,
    })
  }
  withCredentials({ accessToken, endpoint }: InitConfig) {
    // @ts-ignore
    this.constructor.includeMetaInfo()
    // @ts-ignore
    if (!this.constructor.accessToken && !this.constructor.endpoint) {
      // @ts-ignore
      if (!this.constructor.resourceLibrary.headers?.Authorization) {
        // @ts-ignore
        this.constructor.accessToken = `Bearer `
        // @ts-ignore
        this.constructor.endpoint = this.constructor.resourceLibrary.baseUrl
      } else {
        // @ts-ignore
        this.constructor.accessToken = this.constructor.resourceLibrary.headers.Authorization
        // @ts-ignore
        this.constructor.endpoint = this.constructor.resourceLibrary.baseUrl
      }
    }
    // @ts-ignore
    this.constructor.resourceLibrary.headers = {
      Authorization: `Bearer ${accessToken}`,
    }
    // @ts-ignore
    this.__links = {
      // @ts-ignore
      related: `${endpoint}/api/${this.constructor.queryName}`,
      // @ts-ignore
      self: `${endpoint}/api/${this.constructor.queryName}/${this.id}`,
    }
    // @ts-ignore
    this.constructor.singleRequest = true
    return this
  }
  setCustomInterceptors(interceptors: InitConfig['interceptors']) {
    // @ts-ignore
    this.constructor.customInterceptors = interceptors
    return this
  }
}

export default BaseClass
