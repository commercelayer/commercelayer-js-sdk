import { createResourceLibrary } from 'active-resource';

let accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOjEzNn0sImFwcGxpY2F0aW9uIjp7ImlkIjo0MTEsImtpbmQiOiJpbnRlZ3JhdGlvbiIsInB1YmxpYyI6ZmFsc2V9LCJ0ZXN0Ijp0cnVlLCJleHAiOjE1NjI2MDgzOTcsInJhbmQiOjAuNDE1NTU3NzMzMTg0MzIyNzZ9.ZDzOXmyZ2aERGxBRyKSmScqk3h3SWXCeMlG-BEv6FcxhjdLqQZbk5ZnVwGvTU-AC32Y90wPh-dE9wbcYW47bgQ'
let subdomain = 'static-commerce'

const library = createResourceLibrary(
  `https://${subdomain}.commercelayer.io/api/`,
  {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
);

export default library;
