import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { PaymentMethodCollection } from './PaymentMethod'
import { BraintreePaymentCollection } from './BraintreePayment'

export class BraintreeGatewayCollection extends BaseClass {
  static className = 'BraintreeGateway'
  name: string
  merchantAccountId: string
  merchantId: string
  publicKey: string
  privateKey: string
  descriptionName: string
  descriptionPhone: string
  descriptionUrl: string
  webhookEndpointUrl: string
  id: string
  reference: string
  referenceOrigin: string
  createdAt: Date
  updatedAt: Date
  metadata: Record<string, string>
  braintreePayments: () => MultiRelationship<BraintreePaymentCollection>
  loadBraintreePayments: () => MultiRelationship<BraintreePaymentCollection>
  paymentMethods: () => MultiRelationship<PaymentMethodCollection>
  loadPaymentMethods: () => MultiRelationship<PaymentMethodCollection>
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

    this.hasMany('braintreePayments', { className: 'BraintreePayment' })
    this.hasMany('paymentMethods', { className: 'PaymentMethod' })
  }
}

const BraintreeGateway = library.createResource<BraintreeGatewayCollection>(
  BraintreeGatewayCollection
)

export default BraintreeGateway
