import { InitConfig, Options } from '#resources/Initialize'
export interface GeneralObject {
  [index: string]: string
}

export interface HeaderParams {
  Authorization: string
}

export interface HeadersResponse {
  connection: string
  server: string
  'x-frame-options': string
  'x-xss-protection': string
  'x-content-type-options': string
  'x-download-options': string
  'x-permitted-cross-domain-policies': string
  'referrer-policy': string
  'x-ratelimit-limit': string
  'x-ratelimit-count': string
  'x-ratelimit-period': string
  'content-type': string
  etag: string
  'cache-control': string
  'x-request-id': string
  'strict-transport-security': string
  via: string
  'accept-ranges': string
  age: string
  date: string
  'x-served-by': string
  'x-cache': string
  'x-cache-hits': string
  'x-timer': string
  vary: string
  'transfer-encoding': string
}

type JSONAPIResource = {
  attributes: Record<string, any>
  id: string
  links: { self: string }
  meta: {
    mode: 'test' | 'live'
  }
  type: string
}

export interface JSONAPIResponse {
  data: JSONAPIResource[] | JSONAPIResource
  included?: JSONAPIResource[]
  links?: {
    first: string
    last: string
    next: string
  }
  meta?: {
    page_count: number
    record_count: number
  }
}

export interface BaseConfig {
  className?: string
  polymorphic?: boolean
  as?: string
  inverseOf?: string
  autosave?: boolean
}

export interface Base {
  resourceLibrary: {
    endpoint: string
    baseUrl: string
    headers: {
      Authorization: string
    }
  }
  __links: {
    related: string
  }
  new (): Base
  attributes(...attribute: string[]): void
  hasOne(queryName: string, config: BaseConfig): void
  hasMany(queryName: string, config: BaseConfig): void
  belongsTo(queryName: string, config: BaseConfig): void
  define(): void
  className: string
  queryName: string
  __queryParams: object
  __newRelation(r: any): any
  __extendObjectParam(type: string, options: object): any
  afterRequest(callback: () => void): void
  afterBuild(callback: () => void): void
  afterCreate(callback: () => void): void
  update(attrs: object, callback?: (res) => any): any
  destroy(): Promise<any>
  withCredentials({ accessToken, endpoint }: InitConfig): Base
  find(primaryKey: string, options?: Options): Promise<any>
  errors(): Errors<any>
  setCustomInterceptors(interceptors: InitConfig['interceptors']): Base
}

export interface BaseResource<T = any>
  extends Omit<Base, 'withCredentials' | 'setCustomInterceptors'> {
  (): BaseResource
  all(
    options?: Options
  ): Promise<CollectionResponse<T> & JSONAPIResponse> &
    SingleRelationship<Partial<T>>
  // where(): Collection | Collection[]
  assignQueryParams(queryParams: object): object
  assignResourceRelatedQueryParams(queryParams: object): object
  assignAttributes(values: object): object
  attributes(): {
    all: any // TODO: Add collection type?
    read: any // TODO: Add collection type?
    readWrite: any // TODO: Add collection type?
  }
  build(params?: object): Collection<T> & BaseResource<T>
  create(attributes: object): Promise<T>
  each(iteratee: any): any
  fields(): Collection<T>
  find(primaryKey: string, options?: Options): Promise<T & JSONAPIResponse>
  findBy(conditions: object): Promise<T>
  first(): Promise<T>
  first(n: number): Promise<T[]>
  includes(...attribute: string[]): BaseResource<T>
  isA(klass: BaseResource<T>): boolean
  klass(): BaseResource<T>
  last(): Promise<T>
  last(n: number): Promise<T[]>
  limit(n?: number): BaseResource<T> // TODO interface Relation
  links(): {
    related: string
  }
  offset(n?: number): BaseResource<T> // TODO interface Relation
  order(args: object): BaseResource<T> // TODO interface Relation
  page(n: number): BaseResource<T> // TODO interface Relation
  perPage(n: number): BaseResource<T> // TODO interface Relation
  primaryKey: string
  queryParams(): object
  resetQueryParams(): object
  select(...params: Array<string | Record<string, string[]>>): BaseResource<T>
  where(options?: object): BaseResource<T>
  update(attrs: object, callback?: any): Promise<T>
  withCredentials({ accessToken, endpoint }: InitConfig): BaseResource<T>
  setCustomInterceptors(
    interceptors: InitConfig['interceptors']
  ): BaseResource<T>
}

export interface Relation extends Collection {
  base: Base
  define(): any
  queryName: string
  __queryParams: {
    include: any[]
  }
}

export interface LinksRelationships {
  first: string
  next: string
  last: string
}

export type MetaInformation = {
  pageCount?: number
  mode?: string
  recordCount?: number
}

export interface CollectionResponse<T = any> {
  __collection: Collection[]
  __links: LinksRelationships
  hasNextPage: () => boolean
  hasPrevPage: () => boolean
  links(): LinksRelationships | null
  nextPage(): Promise<CollectionResponse<T>>
  prevPage(): Promise<CollectionResponse<T>>
  toCollection(): Collection
  all(): T[]
  clear(): []
  clone(): T[]
  compact(iteratee: any): any
  delete(): any
  detect(predicate: any): any
  each(iteratee: any): any
  empty(): boolean
  first(): T
  first(n: number): T[]
  flatten(): any
  get(index: number): T
  includes(...attribute: string[]): CollectionResponse<T>
  load(): Promise<CollectionResponse<T>>
  indexOf(item: any): any
  inject(memo: object, interatee: any): any
  join(): string
  last(): T
  last(n: number): T[]
  map(iteratee: (param: T) => any): void
  pop(): T
  push(): number
  replace(original: any, next: any): any
  select(predicate?: any): CollectionResponse<T>
  set(index: number, item: BaseResource): Collection
  shift(): T
  toArray(): T[]
  unshift(): T
  size(): number
  getHeaders(): HeadersResponse
  getMetaInfo(): MetaInformation
  pageCount(): MetaInformation['pageCount']
  recordCount(): MetaInformation['recordCount']
  withCredentials({ accessToken, endpoint }: InitConfig): CollectionResponse<T>
}

// TODO Add CollectionProxy ex: order.lineItems()
export interface CollectionProxy<P> extends Pick<BaseResource<P>, 'where'> {
  all(): Promise<CollectionResponse<P>>
  load(): Promise<CollectionResponse<P>>
  empty(): boolean
  size(): boolean
  target(): CollectionResponse<P>
  toArray(): P[]
  find(primaryKey: string): Promise<P>
  findBy(conditions: object): Promise<P>
  includes(...attribute: string[]): CollectionProxy<P>
}

// TODO types check if it is correct
export interface Collection<R = any> {
  association(name: string): any // TODO: Add interface HasOneAssociation
  attributes(): object
  changed(): boolean
  changedFields(): Collection<R>
  clone(): Collection<R>
  destroy(): Collection<R>
  errors(): Errors<R>
  hasAttribute(attribute: string): boolean
  isA(klass: BaseResource): boolean
  klass(): BaseResource
  links(): {
    related: string
    self: string
  }
  newResource(): boolean
  map(iteratee: (param: Collection) => any): void
  persisted(): any
  queryParams(): object
  queryParamsForReflection(): any
  reload(): any
  save(callback?: any): any
  update(attrs: object, callback?: any): Collection<R>
  valid(): boolean
}

export type SingleRelationship<R> = (R & Promise<R>) | null
export type MultiRelationship<R> =
  | (CollectionProxy<R> & Promise<CollectionProxy<R>>)
  | null

export interface CreateResource {
  createResource<R>(resource: Base): BaseResource<R>
}

export interface Errors<T = any> {
  (): T
  base: T
  empty(): boolean
  toArray(): T[]
  toCollection(): Collection<T>
}

export default interface Library extends CreateResource {
  customRequests: {
    [key: string]: {
      [key: string]: {
        [key: string]: object
      }
    }
  }
  interface: {
    toCamelCase: <T extends any>(value: T) => T
  }
  singleRequest: boolean
  baseUrl: string
  headers: {
    Authorization: string
  }
  Base: Base
  customInterceptors?: InitConfig['interceptors']
  options?: Options
}
