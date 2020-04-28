// TODO remove ts-ignore comments
import {
  createResourceLibrary,
  // @ts-ignore
  CollectionResponse,
} from 'active-resource'
import Library, { GeneralObject } from './@types/Library'
import { InitConfig } from './Initialize'
import * as _ from 'lodash'
import BaseClass from '../utils/BaseClass'

const subdomain = 'yourdomain'

const library: Library = createResourceLibrary(
  `https://${subdomain}.commercelayer.io/api/`
)

library['customRequests'] = {}
library['cache'] = false
library['permittedCache'] = [
  { method: 'get', collectionName: 'SkuCollection' },
  { method: 'get', collectionName: 'PriceCollection' },
  { method: 'get', collectionName: 'StockItemCollection' },
]

const cleanUrl = (url: string): string => {
  const lastSlash = url.lastIndexOf('/') + 1
  if (lastSlash === url.length) {
    return url.substring(0, url.length - 1)
  }
  return url
}

const cacheAllowed = (collectionName: string, method: string): boolean => {
  const check = library.permittedCache.filter((c) => {
    return c.method === method && c.collectionName === collectionName
  })
  return !!_.first(check)
}

class ExtendLibrary extends library.Base {
  static accessToken = ''
  static endpoint = ''
  static singleRequest = false
  static cache: null | boolean = null
  static meta = {}
  constructor() {
    super()
    return this
  }
  static includes(params: string[]) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return this.where({ cache: this.cache }).includes(params)
  }
  static select(params: string[]) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return this.where({ cache: this.cache }).select(params)
  }
  static order(params: object) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return this.where({ cache: this.cache }).order(params)
  }
  static first(value?: number) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return this.where({ cache: this.cache }).first(value)
  }
  static last(value?: number) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return this.where({ cache: this.cache }).last(value)
  }
  static page(value?: number) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return this.where({ cache: this.cache }).page(value)
  }
  static perPage(value?: number) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return this.where({ cache: this.cache }).perPage(value)
  }
  static limit(value: any) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return this.where({ cache: this.cache }).limit(value)
  }
  static offset(value: any) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return this.where({ cache: this.cache }).offset(value)
  }
  static where(options: object): any {
    let newOptions = {}
    if (_.has(options, 'cache')) {
      // @ts-ignore
      const cache = options['cache']
      // @ts-ignore
      delete options['cache']
      // @ts-ignore
      newOptions = {
        q: { ...options },
      }
      if (!_.isNull(cache)) {
        // @ts-ignore
        newOptions['cache'] = cache
      }
    } else {
      newOptions = {
        q: { ...options },
      }
    }
    // @ts-ignore
    const relation = super.where(newOptions)
    this.includeMetaInfo(relation.interface().axios.interceptors)
    return relation
  }
  static all() {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    return this.where({ cache: this.cache }).all()
  }
  static findBy(options: GeneralObject): any {
    const eqOptions: GeneralObject = {}
    Object.keys(options).map((v: string) => {
      eqOptions[`${v}_eq`] = options[v]
    })
    return this.where({ ...eqOptions, cache: this.cache }).first()
  }
  static withCredentials({ accessToken, endpoint, cache }: InitConfig) {
    if (!this.accessToken && !this.endpoint) {
      if (!this.resourceLibrary.headers?.Authorization) {
        this.accessToken = `Bearer `
        this.endpoint = this.resourceLibrary.baseUrl
      } else {
        this.accessToken = this.resourceLibrary.headers.Authorization
        this.endpoint = this.resourceLibrary.baseUrl
      }
    }
    this.cache = cache
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
    // @ts-ignore
    return this.where({ cache: this.cache }).find(paramKey)
  }
  static setInterceptors(interceptors: any, klass: any = null) {
    const classThis = this
    const interceptResp = interceptors?.response
    const interceptReq = interceptors?.request
    const respHandlers = interceptResp?.handlers
    if (respHandlers?.length === 1) {
      interceptResp.handlers.shift()
      interceptReq.handlers.shift()
      interceptReq.use((config: any) => {
        let cache = library.cache
        const singleCache =
          !_.isEmpty(config.params) && _.has(config.params, 'filter.cache')
        if (singleCache) {
          cache = config.params['filter']['cache']
          delete config.params['filter']['cache']
        }
        const url = cleanUrl(config.url)
        const collectionName = classThis.name
        const method = config.method
        const isAllowed = cacheAllowed(collectionName, method)
        if (cache && isAllowed) {
          config.url = url
          config.params['cache'] = cache
        }
        return config
      })
      interceptResp.use(
        (config: any) => {
          if (!config['data']) return config
          const meta = _.isArray(config.data.data)
            ? config.data.meta
            : config.data.data.meta
          const metaCamelCase = library.interface.toCamelCase(meta)
          classThis.meta = metaCamelCase
          config.data.collectionParent = classThis
          const url = cleanUrl(config.config.url)
          library.customRequests = {}
          library.customRequests[url] = config.data
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
  delete this.__meta
  delete this.__collectionMeta
})

ExtendLibrary.afterRequest(function() {
  const klass = this
  setMetaByRequest<typeof klass>(this)
  if (this.constructor.singleRequest) {
    this.constructor.resourceLibrary.baseUrl = this.constructor.endpoint
    this.constructor.resourceLibrary.headers = {
      Authorization: this.constructor.accessToken,
    }
    this.constructor.__links = null
    this.constructor.singleRequest = false
    this.constructor.cache = null
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
  endpoint,
}: InitConfig) {
  library.headers = {
    Authorization: `Bearer ${accessToken}`,
  }
  library.singleRequest = true
  return this
}

library.Base = ExtendLibrary

export default library
