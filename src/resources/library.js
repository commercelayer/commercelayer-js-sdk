import { createResourceLibrary } from 'active-resource'

const subdomain = 'the-indigo-brand-41'
const accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOjY2MH0sImFwcGxpY2F0aW9uIjp7ImlkIjoxMTE3LCJraW5kIjoiaW50ZWdyYXRpb24iLCJwdWJsaWMiOmZhbHNlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNTY4OTk4MDY4LCJtYXJrZXQiOnsiaWQiOjEwNDUsInByaWNlX2xpc3RfaWQiOjEwNjAsInN0b2NrX2xvY2F0aW9uX2lkcyI6WzE1ODMsMTU4NF0sImdlb2NvZGVyX2lkIjpudWxsfSwicmFuZCI6MC4wOTA3NTkyODMxNjgwNDQzOH0.EVGQch6HJUN6A4mLsIim1Sv6LNIVkjE2eMJt8mrGp7YWwP4LBKCV3-kYwjA8hh7not2__sCNjsnCPg-nnXvxvQ'

const library = createResourceLibrary(
  `https://${subdomain}.commercelayer.io/api/`,
  {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
)

export default library
