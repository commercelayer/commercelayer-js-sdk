interface HeadersParams {
  Authorization: string
}
interface ParamsActiveResorce {
  headers: HeadersParams
}

declare module 'active-resource' {
  const createResourceLibrary: (
    domain: string,
    params?: ParamsActiveResorce
  ) => {
    baseUrl: string
    headers: HeadersParams
    createResource: any
    Base: any
  }
  export { createResourceLibrary }
}
