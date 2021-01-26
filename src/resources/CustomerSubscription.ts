import library from './library'
import BaseClass from '#utils/BaseClass'
import { CustomerCollection } from './Customer'
import { SingleRelationship } from 'dist/typings/Library'

export class CustomerSubscriptionCollection extends BaseClass {
  static className = 'CustomerSubscription'
  customerEmail: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  customer: () => SingleRelationship<CustomerCollection>
  static define() {
    this.attributes(
      'customerEmail',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('customer', { className: 'Customer' })
  }
}

const CustomerSubscription = library.createResource<
  CustomerSubscriptionCollection
>(CustomerSubscriptionCollection)

export default CustomerSubscription
