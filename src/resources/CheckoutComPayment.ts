import library from './library'
import BaseClass from '#utils/BaseClass'
import { OrderCollection } from './Order'
import { SingleRelationship } from '#typings/Library'
import { PaymentGatewayCollection } from './PaymentGateway'

export class CheckoutComPaymentCollection extends BaseClass {
  static className = 'CheckoutCom'
  paymentType: string
  token: string
  sessionId: string
  sourceId: string
  customerToken: string
  redirectUri: string
  paymentResponse: Record<string, any>
  _authorize: boolean
  _details: boolean
  _refresh: boolean
  id: string
  reference: string
  referenceOrigin: string
  createdAt: Date
  updatedAt: Date
  metadata: object
  order: () => SingleRelationship<OrderCollection>
  loadOrder: () => SingleRelationship<OrderCollection>
  paymentGateway: () => SingleRelationship<PaymentGatewayCollection>
  loadPaymentGateway: () => SingleRelationship<PaymentGatewayCollection>
  static define() {
    this.attributes(
      'paymentType',
      'token',
      'sessionId',
      'sourceId',
      'customerToken',
      'redirectUri',
      'paymentResponse',
      '_authorize',
      '_details',
      '_refresh',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('order', { className: 'Order' })
    this.hasOne('paymentGateway', { className: 'PaymentGateway' })
  }
}

const CheckoutCom = library.createResource<CheckoutComPaymentCollection>(
  CheckoutComPaymentCollection
)

export default CheckoutCom
