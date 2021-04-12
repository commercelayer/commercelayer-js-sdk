import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { PaymentMethodCollection } from './PaymentMethod'

export class ManualGatewayCollection extends BaseClass {
  static className = 'ManualGateway'
  createdAt: Date
  id: string
  metadata: object
  name: string
  reference: string
  referenceOrigin: string
  requireCapture: boolean
  updatedAt: Date
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
      'requireCapture',
      'updatedAt'
    )

    this.hasMany('paymentMethods', { className: 'PaymentMethod' })
  }
}

const ManualGateway = library.createResource<ManualGatewayCollection>(
  ManualGatewayCollection
)

export default ManualGateway
