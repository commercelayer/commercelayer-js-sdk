import library from './library'
import BaseClass from '#utils/BaseClass'
import { OrderCollection } from './Order'
import { SingleRelationship } from '#typings/Library'

export class StripePaymentCollection extends BaseClass {
  static className = 'StripePayment'
  clientSecret: string
  options: Record<string, any>
  id: string
  reference: string
  referenceOrigin: string
  createdAt: Date
  updatedAt: Date
  metadata: Record<string, any>
  order: () => SingleRelationship<OrderCollection>
  static define() {
    this.attributes(
      'clientSecret',
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

const StripePayment = library.createResource<StripePaymentCollection>(
  StripePaymentCollection
)

export default StripePayment
