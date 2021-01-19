import library from './library'
import BaseClass from '#utils/BaseClass'
import { OrderCollection } from './Order'

export class BraintreePaymentCollection extends BaseClass {
  static className = 'BraintreePayment'
  clientToken: string
  paymentMethodNonce: string
  options: object
  id: string
  reference: string
  referenceOrigin: string
  createdAt: Date
  updatedAt: Date
  metadata: object
  order: () => Promise<OrderCollection>
  static define() {
    this.attributes(
      'clientToken',
      'paymentMethodNonce',
      'options',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('order', { className: 'Order' })
  }
}

const BraintreePayment = library.createResource<BraintreePaymentCollection>(
  BraintreePaymentCollection
)

export default BraintreePayment
