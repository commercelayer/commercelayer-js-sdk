import initialize, { Order, Sku } from './src/resources'

const domain = 'the-indigo-brand-41'
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOjY2MH0sImFwcGxpY2F0aW9uIjp7ImlkIjoxMTE3LCJraW5kIjoiaW50ZWdyYXRpb24iLCJwdWJsaWMiOmZhbHNlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNTY5MjU3MTMxLCJtYXJrZXQiOnsiaWQiOjEwNDUsInByaWNlX2xpc3RfaWQiOjEwNjAsInN0b2NrX2xvY2F0aW9uX2lkcyI6WzE1ODMsMTU4NF0sImdlb2NvZGVyX2lkIjpudWxsfSwicmFuZCI6MC41NjQwMzcyOTAwNzU3ODEzfQ.oW1OhbjaQHwSTQhUa-AORJAb0Ee4Ihy6RrGPxAbvZDkegcics3D1GAc75QAUcrFGo6-wsDitVHjYm4LzKEQdFA'

async function f() {
  initialize(domain, token)
  const order = await Order.all()
  let sku = await Sku.all()
  console.log('orders -->', order)
  console.log('sku -->', sku)
}

f()
