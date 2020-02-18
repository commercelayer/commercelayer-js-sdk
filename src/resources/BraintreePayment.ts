import library from './library'
import BaseClass from '../utils/BaseClass'

export class BraintreePaymentCollection extends BaseClass {
  static className = 'BraintreePayment'
  clientToken: string
  paymentMethodNonce: string
  options: object
  id: string
  createdAt: Date
  updatedAt: Date
  metadata: object
  static define() {
    this.attributes(
      'clientToken',
      'paymentMethodNonce',
      'options',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'metadata'
    )

    this.hasOne('order', { className: 'Order' })
  }
}

const BraintreePayment = library.createResource<BraintreePaymentCollection>(
  BraintreePaymentCollection
)

export default BraintreePayment
