export interface BaseConfig {
	className?: string
	polymorphic?: boolean
	as?: string
	inverseOf?: string
	autosave?: boolean
}

export interface Base {
	new (): Base
	attributes(...attribute: string[]): void
	hasOne(queryName: string, config: BaseConfig): void
	hasMany(queryName: string, config: BaseConfig): void
	belongsTo(queryName: string, config: BaseConfig): void
	define(): void
	className: string
	queryName: string
}

export interface BaseResource extends Base {
	all(): Promise<CollectionResponse>
	// where(): Collection | Collection[]
	afterBuild(): number
	afterCreate(): number
	afterRequest(): number
	assignQueryParams(queryParams: object): object
	assignResourceRelatedQueryParams(queryParams: object): object
	attributes(): {
		all: any // TODO: Add collection type?
		read: any // TODO: Add collection type?
		readWrite: any // TODO: Add collection type?
	}
	build(): Collection | Collection[]
	create(attributes: object): Collection
	each(iteratee: any): any
	fields(): Collection
	find(primaryKey: any): Promise<Collection>
	findBy(conditions: object): Promise<Collection> | Promise<CollectionResponse>
	first(n?: number): Promise<Collection> | Promise<Collection[]>
	includes(...attribute: string[]): BaseResource
	isA(klass: BaseResource): boolean
	klass(): BaseResource
	last(n?: number): Promise<Collection> | Promise<CollectionResponse>
	limit(n?: number): Promise<Collection> | Promise<CollectionResponse>
	links(): {
		related: string
	}
	offset(n?: number): Promise<Collection> | Promise<CollectionResponse>
	order(args: object): Promise<Collection> | Promise<CollectionResponse>
	page(n?: number): Promise<Collection> | Promise<CollectionResponse>
	perPage(n?: number): Promise<Collection> | Promise<CollectionResponse>
	primaryKey: string
	queryParams(): object
	resetQueryParams(): object
	select(...params: string[]): BaseResource
	where(options?: object): BaseResource
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

export interface CollectionResponse {
	__collection: Collection[]
	__links: LinksRelationships
	hasNextPage: boolean
	hasPrevPage: boolean
	links(): LinksRelationships | null
	nextPage(): Promise<CollectionResponse>
	prevPage(): Promise<CollectionResponse>
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
	map(iteratee: any): any
	pop(): Collection
	push(): number
	replace(original: any, next: any): any
	select(predicate?: any): CollectionResponse
	set(index: number, item: BaseResource): Collection
	shift(): any
	toArray(): Collection[]
	unshift(): any
}

export interface Collection {
	association(name: string): any // TODO: Add interface HasOneAssociation
	attributes(): object
	changed(): boolean
	changedFields(): Collection
	clone(): any
	destroy(): any
	errors(): any
	hasAttribute(attribute: string): boolean
	isA(klass: BaseResource): boolean
	klass(): BaseResource
	links(): {
		related: string
		self: string
	}
	newResource(): boolean
	map(iteratee: any): any
	persisted(): any
	queryParams(): object
	queryParamsForReflection(): any
	reload(): any
	save(callback?: any): any
	update(attrs: object, callback?: any): Collection
	valide(): boolean
}

export default interface Library {
	baseUrl: string
	headers: HeaderParams
	Base: Base
	createResource: (resource: Base) => BaseResource
}
