import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { PaymentMethodCollection } from './PaymentMethod'

export class ManuaGatewayCollection extends BaseClass {
  static className = 'ManuaGateway'
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

const ManuaGateway = library.createResource<ManuaGatewayCollection>(
  ManuaGatewayCollection
)

export default ManuaGateway
