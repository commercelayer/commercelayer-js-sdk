import library from './library'
import BaseClass from '../utils/BaseClass'

export class StripePaymentCollection extends BaseClass {
  static className = 'StripePayment'
  client_secret: string
  options: object
  id: string
  createdAt: Date
  updatedAt: Date
  metadata: object
  destroy: () => Promise<any>
  static define() {
    this.attributes(
      'client_secret',
      'options',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('order', { className: 'Order' })
  }
}

const StripePayment = library.createResource<StripePaymentCollection>(
  StripePaymentCollection
)

export default StripePayment
