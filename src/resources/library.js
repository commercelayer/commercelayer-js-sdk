import { createResourceLibrary } from 'active-resource';

let accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOjEzNn0sImFwcGxpY2F0aW9uIjp7ImlkIjo0MTEsImtpbmQiOiJpbnRlZ3JhdGlvbiIsInB1YmxpYyI6ZmFsc2V9LCJ0ZXN0Ijp0cnVlLCJleHAiOjE1NjEzNjIxMzEsInJhbmQiOjAuODAyNDQ4NTUzMDA4MDA4M30.HD2ZofmMAJ4tjFcApx66h2-PB_X4E3YgBGJKZH3veYciVDpWVYOJfnC7v4i5fBCKvw4kV5plIZIFDhba9gq9_Q'

const library = createResourceLibrary(
  'https://static-commerce.commercelayer.io/api/', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
);

export default library;
