import { InitConfig } from '../Initialize'
export interface GeneralObject {
  [index: string]: string
}

export interface HeaderParams {
  Authorization: string
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
    baseUrl: string
    headers: {
      Authorization: string
    }
  }
  __links: object
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
  // update(attrs: object, callback?: any): Promise<any>
  destroy(): Promise<any>
  withCredentials({ accessToken, endpoint }: InitConfig): Base
  find(primaryKey: string): Promise<any>
}

export interface BaseResource<T = any> extends Base {
  (): BaseResource
  all(): Promise<CollectionResponse<T>>
  // where(): Collection | Collection[]
  assignQueryParams(queryParams: object): object
  assignResourceRelatedQueryParams(queryParams: object): object
  assignAttributes(values: object): object
  attributes(): {
    all: any // TODO: Add collection type?
    read: any // TODO: Add collection type?
    readWrite: any // TODO: Add collection type?
  }
  build(params?: object): Collection<T> | CollectionResponse<T>
  create(attributes: object): Promise<T>
  each(iteratee: any): any
  fields(): Collection
  find(primaryKey: string): Promise<T>
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
  select(...params: string[]): BaseResource<T>
  where(options?: object): BaseResource<T>
  update(attrs: object, callback?: any): Promise<T>
  withCredentials({ accessToken, endpoint }: InitConfig): BaseResource<T>
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
  update(attrs: object, callback?: any): Collection
  valid(): boolean
}

export interface CreateResource<R = any> {
  createResource<R>(resource: Base): BaseResource<R>
}

export interface Errors<T = any> {
  (): T
  base: T
  empty(): boolean
  toArray(): T[]
  toCollection(): Collection<T>
}

type PermittedCacheResource = {
  queryName: string
  method: 'get'
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
  cache: boolean
  permittedCache: PermittedCacheResource[]
  singleRequest: boolean
  baseUrl: string
  headers: {
    Authorization: string
  }
  Base: Base
}
