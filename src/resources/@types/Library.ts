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
  update(attrs: object, callback?: any): Promise<any>
  destroy(): Promise<any>
  withCredentials({ accessToken, endpoint }: InitConfig): Base
}

export interface BaseResource<T = any> extends Base {
  (): BaseResource
  all(): Promise<CollectionResponse<T>>
  // where(): Collection | Collection[]
  afterBuild(func: any): number
  afterCreate(): number
  afterRequest(): number
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
  find(primaryKey: any): Promise<T>
  findBy(conditions: object): Promise<T> | Promise<CollectionResponse>
  first(n?: number): Promise<T[]>
  includes(...attribute: string[]): BaseResource<T>
  isA(klass: BaseResource<T>): boolean
  klass(): BaseResource<T>
  last(n?: number): Promise<Collection> | Promise<CollectionResponse>
  limit(n?: number): Promise<Collection> | Promise<CollectionResponse>
  links(): {
    related: string
  }
  offset(n?: number): Promise<Collection> | Promise<CollectionResponse>
  order(args: object): Promise<Collection> | Promise<CollectionResponse>
  page(n?: number): Promise<Collection> | Promise<CollectionResponse>
  perPage(n?: number): BaseResource<T>
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

export interface CollectionResponse<T = any> {
  __collection: Collection[]
  __links: LinksRelationships
  hasNextPage: () => boolean
  hasPrevPage: () => boolean
  links(): LinksRelationships | null
  nextPage(): Promise<CollectionResponse<T>>
  prevPage(): Promise<CollectionResponse<T>>
  toCollection(): Collection | Collection[]
  all(): Collection[]
  clear(): []
  clone(): Collection[]
  compact(iteratee: any): any
  delete(): any
  detect(predicate: any): any
  each(iteratee: any): any
  empty(): boolean
  first(n: number): Collection | Collection[]
  flatten(): any
  get(index: number): Collection
  include(item: any): boolean
  indexOf(item: any): any
  inject(memo: object, interatee: any): any
  join(): string
  last(n: number): Collection | Collection[]
  map(iteratee: (param: Collection) => any): void
  pop(): Collection
  push(): number
  replace(original: any, next: any): any
  select(predicate?: any): CollectionResponse<T>
  set(index: number, item: BaseResource): Collection
  shift(): any
  toArray(): T[]
  unshift(): any
  size(): number
}

export interface Collection<R = any> {
  association(name: string): any // TODO: Add interface HasOneAssociation
  attributes(): object
  changed(): boolean
  changedFields(): Collection<R>
  clone(): Collection<R>
  destroy(): Collection<R>
  errors(): Collection<R>
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
  valide(): boolean
}

export interface CreateResource<R = any> {
  createResource<R>(resource: Base): BaseResource<R>
}

export default interface Library extends CreateResource {
  baseUrl: string
  headers: {
    Authorization: string
  }
  Base: Base
}
