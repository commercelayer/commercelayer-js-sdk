import { Order } from './src/resources'

async function f() {
  let order = await Order.where({q:{status_eq: 'pending'}}).includes('lineItems').first()
  console.log(order.lineItems().toArray());
}

f();
