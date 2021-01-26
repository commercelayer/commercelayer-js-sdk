import library from './library'
import BaseClass from '#utils/BaseClass'
import { OrderCollection } from './Order'
import { SingleRelationship } from '#typings/Library'

export class BraintreePaymentCollection extends BaseClass {
  static className = 'BraintreePayment'
  clientToken: string
  paymentMethodNonce: string
  options: Record<string, any>
  id: string
  reference: string
  referenceOrigin: string
  createdAt: Date
  updatedAt: Date
  metadata: Record<string, string>
  order: () => SingleRelationship<OrderCollection>
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
