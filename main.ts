import { initCLayer, Order, Sku, LineItem, Item } from './src/resources'
import { getToken } from './helpers'
import * as _ from 'lodash'

const host = 'the-blue-brand-2.commercelayer.co'

console.log('Sku :', Sku)

async function f() {
  const { data: { access_token: token } } = await getToken()
  // console.log('CLayer :', CLayer) Init commercelayer
  initCLayer({ accessToken: token, host })
  // const shippingMethod = await CLayer.ShippingMethod.first() const
  // stockLocation = await CLayer.StockLocation.first()
  const order = await Order.where({
    nameOrCodeOrShippingCategoryNameStart: 'TSHIRT'
  }).first(3)
  const orders = await Order.all()
  // const skus = await Sku.where({ code: 'TOTEXXAUFFFFFFE63E74XXXX' })
  //   .includes('prices')
  //   .first(5)
  const newSku = Sku.build({ id: 'GBwpOSPKAn' })
  const newItem = Item.build({ skus: newSku })
  const newOrder = Order.build({ id: 'awjobhxYPX' })
  const newLineItem = LineItem.build({
    quantity: 1,
    order: newOrder,
    item: newItem
  })
  console.log('newSku :', newSku, newOrder, newLineItem, newItem)
  const skus = await Sku.where({ codeStart: 'TSHIRT' })
    .includes('prices')
    .first(5)
  const skusF = await Sku.findBy({ code: 'TOTEXXAUFFFFFFE63E74XXXX' })
  // customerPaymentSource = await CLayer.CustomerPaymentSource.all() const attr =
  // // console.log('nextPage :', await orders.nextPage()) const { 	quantity: '2',
  // 	sku_code: 'TSHIRTMM000000FFFFFFXLXX', 	order } const creditCard = await
  // CLayer.CreditCard 	.select('first_name', 'last_name', 'id') 	.first(5) const
  // customerAddress = await CLayer.CustomerAddress.create(attr) const
  // deliveryLeadTimer = await CLayer.DeliveryLeadTime.create(attr) const lineItem
  // = await LineItem.create(attr) const newCreditCard = await
  // CLayer.CreditCard.create(attrCreditCard)

  console.log('vars :', order, orders, skus, skusF)
  debugger
}

f()
