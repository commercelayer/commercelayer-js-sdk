// TODO remove ts-ignore comments
import {
  createResourceLibrary,
  // @ts-ignore
  CollectionResponse,
} from 'active-resource'
import Library, { GeneralObject } from '#typings/Library'
import { InitConfig, Options } from './Initialize'
import _map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import snakeCase from 'lodash/snakeCase'
import isArray from 'lodash/isArray'
import _has from 'lodash/has'
import first from 'lodash/first'
import compact from 'lodash/compact'
import BaseClass from '#utils/BaseClass'
import { cleanUrl, parserParams } from '#utils/helpers'
import axios from 'axios'
import { normalize } from '../utils/helpers'

const subdomain = 'yourdomain'

const library: Library = createResourceLibrary(
  `https://${subdomain}.commercelayer.io/api/`
)

library['customRequests'] = {}

class ExtendLibrary extends library.Base {
  static accessToken = ''
  static endpoint = ''
  static singleRequest = false
  static meta = {}
  constructor() {
    super()
    return this
  }
  static includes(...params: string[]) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    const relation = super.includes(...params)
    this.__queryParams = relation.__queryParams
    return this
  }
  static select(...params: string[]) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    const relation = super.select(...params)
    this.__queryParams = relation.__queryParams
    return this
  }
  static order(params: object) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    const relation = super.order(params)
    this.__queryParams = relation.__queryParams
    return this
  }
  static page(value: number) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    const relation = super.page(value)
    this.__queryParams = relation.__queryParams
    return this
  }
  static perPage(value: number) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    // @ts-ignore
    const relation = super.perPage(value)
    this.__queryParams = relation.__queryParams
    return this
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
  static where(options: object): any {
    // @ts-ignore
    const relation = super.where({
      q: { ...options },
    })
    this.includeMetaInfo(relation.interface().axios.interceptors)
    this.__queryParams = relation.__queryParams
    return this
  }
  static all(options?: Options) {
    // @ts-ignore
    this.includeMetaInfo(this.interface().axios.interceptors)
    if (options?.rawResponse || library?.options?.rawResponse) {
      return this.rawResponse()
    }
    // @ts-ignore
    return super.all()
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
  private static jsonapiQueryParams(v, k) {
    if (k === 'fields') {
      const fields = _map(v, (field, i) => {
        const normalizedValues = field.map((field) => {
          if (isArray(field)) {
            return field.map((f) => snakeCase(f)).join(',')
          }
          return snakeCase(field)
        })
        return `${k}[${i}]=${normalizedValues.join(',')}`
      })
      return fields.join('&')
    }
    if (k === 'filter') {
      const fields = _map(v, (field, i) => {
        const filter = _map(field, (value, index) => {
          const key = snakeCase(index)
          const val = value
          return `${k}[${i}][${key}]=${val}`
        })
        return filter.join('&')
      })
      return fields
    }
    if (k === 'include') {
      const normalizedValues = v.map((field: string) => {
        return field
          .split('.')
          .map((f) => snakeCase(f))
          .join('.')
      })
      return `${k}=${normalizedValues.join(',')}`
    }
    if (k === 'sort') {
      const fields = _map(v, (field, i) => {
        const row = field.toLowerCase() === 'asc' ? '' : '-'
        return `${row}${snakeCase(i)}`
      })
      return `${k}=${fields.join(',')}`
    }
    if (k !== '__root') {
      const fields = _map(v, (field, i) => {
        return `${k}[${i}]=${field}`
      })
      return fields
    }
  }
  private static rawResponse(paramKey?: string) {
    this.setInterceptors(axios.interceptors)
    // @ts-ignore
    const queries = compact(_map(this.queryParams(), this.jsonapiQueryParams))
    let url = !isEmpty(this.__links)
      ? paramKey
        ? `${this.__links.related}/${paramKey}`
        : `${this.__links.related}`
      : paramKey
      ? `${this.resourceLibrary.baseUrl}/${this.queryName}/${paramKey}`
      : `${this.resourceLibrary.baseUrl}/${this.queryName}`
    if (!isEmpty(queries)) url = `${url}?${queries.join('&')}`
    // @ts-ignore
    return axios
      .get(url, {
        headers: this.resourceLibrary.headers,
      })
      .then((res) => normalize(res))
  }
  static find(paramKey: string, options?: Options) {
    this.includeMetaInfo()
    if (options?.rawResponse || library?.options?.rawResponse) {
      return this.rawResponse(paramKey)
    }
    return super.find(paramKey)
  }
  static setCustomInterceptors(interceptors: InitConfig['interceptors']) {
    library.customInterceptors = interceptors
    return this
  }
  static setInterceptors(interceptors: any, _klass: any = null) {
    const classThis = this
    const interceptReq = interceptors?.request
    const interceptResp = interceptors?.response
    const respHandlers = interceptResp?.handlers
    interceptReq.use(
      (config) => {
        if (!isEmpty(config.params)) {
          config.params = parserParams(config.params)
        }
        if (
          !isEmpty(library?.customInterceptors?.request) &&
          _has(library?.customInterceptors?.request, 'before')
        ) {
          return library.customInterceptors.request.before(config)
        }
        return config
      },
      (error) => {
        if (
          !isEmpty(library?.customInterceptors?.request) &&
          _has(library?.customInterceptors?.request, 'error')
        ) {
          return library.customInterceptors.request.error(error)
        }
        return Promise.reject(error)
      }
    )
    if (respHandlers?.length === 1 || isEmpty(respHandlers)) {
      interceptResp.handlers.shift()
      interceptResp.use(
        (config: any) => {
          if (!config['data']) return config
          const meta = isArray(config.data.data)
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
          if (
            !isEmpty(library?.customInterceptors?.response) &&
            _has(library?.customInterceptors?.response, 'before')
          ) {
            return library.customInterceptors.response.before(config)
          }
          return config
        },
        (error: any) => {
          if (
            !isEmpty(library?.customInterceptors?.response) &&
            _has(library?.customInterceptors?.response, 'error')
          ) {
            return library.customInterceptors.response.error(error)
          }
          return Promise.reject(error)
        }
      )
    }
  }
}

const setMetaByRequest = <T extends BaseClass>(child: T) => {
  _map(library.customRequests, (req) => {
    if (!isEmpty(req.headers)) {
      child.setHeaders(req.headers)
    }
    if (isArray(req.data)) {
      // @ts-ignore
      const childData: any = first(req.data.filter((v) => child.id === v.id))
      if (!isEmpty(childData)) {
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
  if (isEmpty(firstItem)) {
    return {}
  }
  return _has(firstItem, '__collectionMeta')
    ? firstItem.__collectionMeta
    : firstItem.getMetaInfo()
}

CollectionResponse.prototype.getHeaders = function() {
  const firstItem = this.first()
  if (isEmpty(firstItem)) {
    return {}
  }
  return _has(firstItem, '__headers')
    ? firstItem.__headers
    : firstItem.getHeaders()
}

CollectionResponse.prototype.pageCount = function() {
  const firstItem = this.first()
  if (isEmpty(firstItem)) {
    return 0
  }
  return _has(firstItem, '__collectionMeta.pageCount')
    ? firstItem.__collectionMeta.pageCount
    : this.first().pageCount()
}

CollectionResponse.prototype.recordCount = function() {
  const firstItem = this.first()
  if (isEmpty(firstItem)) {
    return 0
  }
  return _has(firstItem, '__collectionMeta.recordCount')
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
