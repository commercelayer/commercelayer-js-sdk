import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { CheckoutComPaymentCollection } from './CheckoutComPayment'

export class CheckoutComGatewayCollection extends BaseClass {
  static className = 'CheckoutComGateway'
  secretKey: string
  publicKey: string
  webhookEndpointId: string
  webhookEndpointSecret: string
  webhookEndpointUrl: string
  createdAt: Date
  id: string
  metadata: object
  reference: string
  referenceOrigin: string
  updatedAt: Date
  checkoutPaymentPayments: () => MultiRelationship<CheckoutComPaymentCollection>
  loadCheckoutPaymentPayments: () => MultiRelationship<
    CheckoutComPaymentCollection
  >
  static define() {
    this.attributes(
      'secretKey',
      'publicKey',
      'webhookEndpointId',
      'webhookEndpointSecret',
      'webhookEndpointUrl',
      'createdAt',
      'id',
      'metadata',
      'reference',
      'referenceOrigin',
      'updatedAt'
    )

    this.hasMany('checkoutComPayments', { className: 'CheckoutComPayment' })
  }
}

const CheckoutComGateway = library.createResource<CheckoutComGatewayCollection>(
  CheckoutComGatewayCollection
)

export default CheckoutComGateway
