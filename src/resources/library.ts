// TODO remove ts-ignore comments
import {
  createResourceLibrary,
  // @ts-ignore
  CollectionResponse,
} from 'active-resource'
import Library, { GeneralObject } from './@types/Library'
import { InitConfig } from './Initialize'
import _ from 'lodash'
import BaseClass from '../utils/BaseClass'

const subdomain = 'yourdomain'

const library: Library = createResourceLibrary(
  `https://${subdomain}.commercelayer.io/api/`
)

library['customRequests'] = {}

const cleanUrl = (url: string) => {
  const lastSlash = url.lastIndexOf('/') + 1
  if (lastSlash === url.length) {
    return url.substring(0, url.length - 1)
  }
  return url
}

class ExtendLibrary extends library.Base {
  static accessToken = ''
  static endpoint = ''
  static singleRequest = false
  static meta = {}
  constructor() {
    super()
    return this
  }
  static includes(params: string[]) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return super.includes(params)
  }
  static select(params: string[]) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return super.select(params)
  }
  static order(params: object) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return super.order(params)
  }
  static first(value?: number) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return super.first(value)
  }
  static last(value?: number) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return super.last(value)
  }
  static page(value?: number) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return super.page(value)
  }
  static perPage(value?: number) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return super.perPage(value)
  }
  static limit(value: any) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return super.limit(value)
  }
  static offset(value: any) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return super.offset(value)
  }
  static nextPagePromise() {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return super.nextPagePromise()
  }
  static prevPage() {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return super.prevPage()
  }
  static where(options: object): any {
    // @ts-ignore
    const relation = super.where({
      q: { ...options },
    })
    this.includeMetaInfo(relation.interface().axios.interceptors)
    return relation
  }
  static all() {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return super.all()
  }
  static findBy(options: GeneralObject): any {
    const eqOptions: GeneralObject = {}
    Object.keys(options).map((v: string) => {
      eqOptions[`${v}_eq`] = options[v]
    })
    return this.where({ ...eqOptions }).first()
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
      Authorization: `Bearer ${accessToken}`,
    }
    this.__links = { related: `${endpoint}/api/${this.queryName}` }
    this.singleRequest = true
    return this
  }
  static includeMetaInfo(interceptors: any = null, klass: any = this) {
    // @ts-ignore
    const i = interceptors || this.resourceLibrary.interface.axios.interceptors
    this.setInterceptors(i, klass)
    return this
  }
  static find(paramKey: string) {
    this.includeMetaInfo()
    return super.find(paramKey)
  }
  static setInterceptors(interceptors: any, _klass: any = null) {
    const classThis = this
    const interceptResp = interceptors?.response
    const respHandlers = interceptResp?.handlers
    if (respHandlers?.length === 1) {
      interceptResp.handlers.shift()
      interceptResp.use(
        (config: any) => {
          if (!config['data']) return config
          const meta = _.isArray(config.data.data)
            ? config.data.meta
            : config.data.data.meta
          const metaCamelCase = library.interface.toCamelCase(meta)
          classThis.meta = metaCamelCase
          // config.data.collectionParent = classThis
          const url = cleanUrl(config.config.url)
          library.customRequests = {}
          library.customRequests[url] = {
            ...config.data,
            headers: config.headers,
            collectionParent: classThis,
          }
          return config
        },
        (error: any) => {
          // Do something with request error
          return 408 === error.response.status || 'ECONNABORTED' === error.code
            ? Promise.reject({
                response: {
                  data: {
                    errors: [
                      {
                        code: 'timeout',
                        detail: 'Timeout occurred while loading '.concat(
                          error.config.url
                        ),
                      },
                    ],
                  },
                },
              })
            : Promise.reject(error)
        }
      )
    }
  }
}

const setMetaByRequest = <T extends BaseClass>(child: T) => {
  _.map(library.customRequests, (req) => {
    if (!_.isEmpty(req.headers)) {
      child.setHeaders(req.headers)
    }
    if (_.isArray(req.data)) {
      // @ts-ignore
      const childData = _.first(req.data.filter((v) => child.id === v.id))
      if (!_.isEmpty(childData)) {
        const collectionMeta = library.interface.toCamelCase(req.meta)
        const meta = library.interface.toCamelCase(childData.meta)
        child.setMetaInfo(meta)
        child.setCollectionMetaInfo(collectionMeta)
      }
    } else {
      const meta = library.interface.toCamelCase(req.data.meta)
      child.setMetaInfo(meta)
    }
  })
}

ExtendLibrary.afterBuild(function() {
  // @ts-ignore
  delete this.__meta
  // @ts-ignore
  delete this.__collectionMeta
  // @ts-ignore
  delete this.__headers
})

ExtendLibrary.afterRequest(function() {
  // @ts-ignore
  const klass = this
  // @ts-ignore
  setMetaByRequest<typeof klass>(this)
  // @ts-ignore
  if (this.constructor.singleRequest) {
    // @ts-ignore
    this.constructor.resourceLibrary.baseUrl = this.constructor.endpoint
    // @ts-ignore
    this.constructor.resourceLibrary.headers = {
      // @ts-ignore
      Authorization: this.constructor.accessToken,
    }
    // @ts-ignore
    this.constructor.__links = null
    // @ts-ignore
    this.constructor.singleRequest = false
  }
})

CollectionResponse.prototype.getMetaInfo = function() {
  const firstItem = this.first()
  if (_.isEmpty(firstItem)) {
    return {}
  }
  return _.has(firstItem, '__collectionMeta')
    ? firstItem.__collectionMeta
    : firstItem.getMetaInfo()
}

CollectionResponse.prototype.getHeaders = function() {
  const firstItem = this.first()
  if (_.isEmpty(firstItem)) {
    return {}
  }
  return _.has(firstItem, '__headers')
    ? firstItem.__headers
    : firstItem.getHeaders()
}

CollectionResponse.prototype.pageCount = function() {
  const firstItem = this.first()
  if (_.isEmpty(firstItem)) {
    return 0
  }
  return _.has(firstItem, '__collectionMeta.pageCount')
    ? firstItem.__collectionMeta.pageCount
    : this.first().pageCount()
}

CollectionResponse.prototype.recordCount = function() {
  const firstItem = this.first()
  if (_.isEmpty(firstItem)) {
    return 0
  }
  return _.has(firstItem, '__collectionMeta.recordCount')
    ? firstItem.__collectionMeta.recordCount
    : this.first().recordCount()
}

CollectionResponse.prototype.withCredentials = function({
  accessToken,
}: // endpoint, NOTE: To understand
InitConfig) {
  library.headers = {
    Authorization: `Bearer ${accessToken}`,
  }
  library.singleRequest = true
  return this
}

library.Base = ExtendLibrary

export default library
