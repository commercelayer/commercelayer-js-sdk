declare module 'active-resource' {
  export function createResourceLibrary(
    domain: string,
    params?: {
      Authorization: string
    }
  ): any
}
