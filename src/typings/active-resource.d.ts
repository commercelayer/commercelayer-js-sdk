declare module '@commercelayer/active-resource' {
  export function createResourceLibrary(
    domain: string,
    params?: {
      Authorization: string
    }
  ): any
}
