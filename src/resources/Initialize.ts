import { createResourceLibrary } from 'active-resource'
console.log('createResourceLibrary :', createResourceLibrary)
// let accessToken =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOjEzNn0sImFwcGxpY2F0aW9uIjp7ImlkIjo0MTEsImtpbmQiOiJpbnRlZ3JhdGlvbiIsInB1YmxpYyI6ZmFsc2V9LCJ0ZXN0Ijp0cnVlLCJleHAiOjE1NjI2MDgzOTcsInJhbmQiOjAuNDE1NTU3NzMzMTg0MzIyNzZ9.ZDzOXmyZ2aERGxBRyKSmScqk3h3SWXCeMlG-BEv6FcxhjdLqQZbk5ZnVwGvTU-AC32Y90wPh-dE9wbcYW47bgQ'
const subdomain = 'https://static-commerce.commerlayer.io/api/'
let library = createResourceLibrary(subdomain)

const initialize = (domain: string, accessToken: string): any => {
  library.baseUrl = `https://${domain}.commercelayer.io/api/`
  library.headers = {
    Authorization: `Bearer ${accessToken}`
  }
  // const Sku = library.createResource(SkuClass)
  // console.log('Sku :', Sku.all())
  // debugger
  // return {
  //   Sku
  // }
}

export { library }

export default initialize
