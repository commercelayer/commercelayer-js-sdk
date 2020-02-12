import library from './library'
import BaseClass from '../utils/BaseClass'

export class CustomerSubscriptionCollection extends BaseClass {
  static className = 'CustomerSubscription'
  customerEmail: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object

  static define() {
    this.attributes(
      'customer_email',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('customer', { className: 'Customer' })
  }
}

const CustomerSubscription = library.createResource<
  CustomerSubscriptionCollection
>(CustomerSubscriptionCollection)

export default CustomerSubscription
