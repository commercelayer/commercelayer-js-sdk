import initialize, { Order } from './src/resources'

const domain = 'the-indigo-brand-41'
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOjY2MH0sImFwcGxpY2F0aW9uIjp7ImlkIjoxMTE3LCJraW5kIjoiaW50ZWdyYXRpb24iLCJwdWJsaWMiOmZhbHNlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNTY4OTk4MDY4LCJtYXJrZXQiOnsiaWQiOjEwNDUsInByaWNlX2xpc3RfaWQiOjEwNjAsInN0b2NrX2xvY2F0aW9uX2lkcyI6WzE1ODMsMTU4NF0sImdlb2NvZGVyX2lkIjpudWxsfSwicmFuZCI6MC4wOTA3NTkyODMxNjgwNDQzOH0.EVGQch6HJUN6A4mLsIim1Sv6LNIVkjE2eMJt8mrGp7YWwP4LBKCV3-kYwjA8hh7not2__sCNjsnCPg-nnXvxvQ'

async function f() {
  const { Sku } = initialize(domain, token)
  const orders = await Order.all()
  let sku = await Sku.all()
  // .find('AZbpjSkARB')
  console.log('sku -->', sku)
  console.log('orders -->', orders)
  // console.log(sku.prices().toArray());
}

f()
