import library from './library'
import BaseClass from '#utils/BaseClass'
import { OrderCollection } from './Order'
import { SingleRelationship } from '#typings/Library'

export class ExternalGatewayCollection extends BaseClass {
  static className = 'ExternalGateway'
  authorizaUrl: string
  captureUrl: string
  createdAt: Date
  id: string
  metadata: Record<string, string>
  name: string
  reference: string
  referenceOrigin: string
  refundUrl: string
  sharedSecret: string
  updatedAt: Date
  voidUrl: string
  order: () => SingleRelationship<OrderCollection>
  static define() {
    this.attributes(
      'createdAt',
      'id',
      'metadata',
      'name',
      'options',
      'paymentSourceToken',
      'reference',
      'referenceOrigin',
      'updatedAt'
    )
    this.hasMany('paymentMethods', { className: 'PaymentMethod' })
    this.hasMany('externalPayments', { className: 'ExternalPayment' })
  }
}

const ExternalGateway = library.createResource<ExternalGatewayCollection>(
  ExternalGatewayCollection
)

export default ExternalGateway
