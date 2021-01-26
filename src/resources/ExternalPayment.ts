import library from './library'
import BaseClass from '#utils/BaseClass'
import { OrderCollection } from './Order'
import { SingleRelationship } from '#typings/Library'

export class ExternalPaymentCollection extends BaseClass {
  static className = 'ExternalPayment'
  createdAt: Date
  id: string
  metadata: object
  options: object
  paymentSourceToken: string
  reference: string
  referenceOrigin: string
  updatedAt: Date
  order: () => SingleRelationship<OrderCollection>
  static define() {
    this.attributes(
      'createdAt',
      'id',
      'metadata',
      'options',
      'paymentSourceToken',
      'reference',
      'referenceOrigin',
      'updatedAt'
    )
    this.hasOne('order', { className: 'Order' })
  }
}

const ExternalPayment = library.createResource<ExternalPaymentCollection>(
  ExternalPaymentCollection
)

export default ExternalPayment
