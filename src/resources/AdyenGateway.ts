import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { PaymentMethodCollection } from './PaymentMethod'
import { AdyenPaymentCollection } from './AdyenPayment'

export class AdyenGatewayCollection extends BaseClass {
  static className = 'AdyenGateway'
  apiKey: string
  createdAt: Date
  id: string
  liveUrlPrefix: string
  merchantAccount: string
  metadata: object
  name: string
  reference: string
  referenceOrigin: string
  updatedAt: Date
  adyenPayments: () => MultiRelationship<AdyenPaymentCollection>
  loadAdyenPayments: () => MultiRelationship<AdyenPaymentCollection>
  paymentMethods: () => MultiRelationship<PaymentMethodCollection>
  loadPaymentMethods: () => MultiRelationship<PaymentMethodCollection>
  static define() {
    this.attributes(
      'apiKey',
      'createdAt',
      'id',
      'liveUrlPrefix',
      'merchantAccount',
      'metadata',
      'name',
      'reference',
      'referenceOrigin',
      'updatedAt'
    )

    this.hasMany('adyenPayments', { className: 'AdyenPayment' })
    this.hasMany('paymentMethods', { className: 'PaymentMethod' })
  }
}

const AdyenGateway = library.createResource<AdyenGatewayCollection>(
  AdyenGatewayCollection
)

export default AdyenGateway
