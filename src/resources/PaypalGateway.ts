import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { PaypalPaymentCollection } from './PaypalPayment'
import { PaymentMethodCollection } from './PaymentMethod'

export class PaypalGatewayCollection extends BaseClass {
  static className = 'PaypalGateway'
  clientId: string
  clientSecret: string
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  paypalPayments: () => MultiRelationship<PaypalPaymentCollection>
  loadPaypalPayments: () => MultiRelationship<PaypalPaymentCollection>
  paymentMethods: () => MultiRelationship<PaymentMethodCollection>
  loadPaymentMethods: () => MultiRelationship<PaymentMethodCollection>
  static define() {
    this.attributes(
      'clientId',
      'clientSecret',
      'name',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasMany('paypalPayments', { className: 'PaypalPayment' })
    this.hasMany('paymentMethods', { className: 'PaymentMethod' })
  }
}

const PaypalGateway = library.createResource<PaypalGatewayCollection>(
  PaypalGatewayCollection
)

export default PaypalGateway
