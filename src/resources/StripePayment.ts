import library from './library'
import BaseClass from '../utils/BaseClass'

export class StripePaymentCollection extends BaseClass {
  static className = 'StripePayment'
  clientSecret: string
  options: object
  id: string
  createdAt: Date
  updatedAt: Date
  metadata: object
  destroy: () => Promise<any>
  static define() {
    this.attributes(
      'clientSecret',
      'options',
      'id',
      'createdAt',
      'updatedAt',
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
