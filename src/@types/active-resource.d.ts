interface HeaderParams {
	Authorization: string
}

declare module 'active-resource' {
	export function createResourceLibrary(
		domain: string,
		params?: HeaderParams
	): any
}
