// TODO remove ts-ignore comments
import { InitConfig } from '../resources/Initialize'
import library from '../resources/library'

export type Meta = {
  pageCount?: number
  recordCount?: number
  mode?: string
}

class BaseClass extends library.Base {
  meta: Meta = {}
  getMetaInfo() {
    return this.meta
  }
  pageCount() {
    return this.meta.pageCount
  }
  recordCount() {
    return this.meta.recordCount
  }
  mode() {
    return this.meta.mode
  }
  setMetaInfo(meta: object) {
    return (this.meta = meta)
  }
  withCredentials({ accessToken, endpoint }: InitConfig) {
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
      Authorization: `Bearer ${accessToken}`
    }
    // @ts-ignore
    this.__links = {
      // @ts-ignore
      related: `${endpoint}/api/${this.constructor.queryName}`,
      // @ts-ignore
      self: `${endpoint}/api/${this.constructor.queryName}/${this.id}`
    }
    // @ts-ignore
    this.constructor.singleRequest = true
    return this
  }
}

export default BaseClass
