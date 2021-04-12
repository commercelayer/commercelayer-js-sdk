import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { StripePaymentCollection } from './StripePayment'
import { PaymentMethodCollection } from './PaymentMethod'

export class StripeGatewayCollection extends BaseClass {
  static className = 'StripeGateway'
  createdAt: Date
  id: string
  metadata: Record<string, any>
  name: string
  reference: string
  referenceOrigin: string
  updatedAt: Date
  webhookEndpointId: string
  webhookEndpointSecret: string
  webhookEndpointUrl: string
  stripePayments: () => MultiRelationship<StripePaymentCollection>
  loadStripePayments: () => MultiRelationship<StripePaymentCollection>
  paymentMethods: () => MultiRelationship<PaymentMethodCollection>
  loadPaymentMethods: () => MultiRelationship<PaymentMethodCollection>
  static define() {
    this.attributes(
      'createdAt',
      'id',
      'metadata',
      'name',
      'reference',
      'referenceOrigin',
      'updatedAt',
      'webhookEndpointId',
      'webhookEndpointSecret',
      'webhookEndpointUrl'
    )

    this.hasMany('stripePayments', { className: 'StripePayment' })
    this.hasMany('paymentMethods', { className: 'PaymentMethod' })
  }
}

const StripeGateway = library.createResource<StripeGatewayCollection>(
  StripeGatewayCollection
)

export default StripeGateway
