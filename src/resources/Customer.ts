import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionProxy } from './@types/Library'
import { OrderCollection } from './Order'
import { CustomerSubscriptionCollection } from './CustomerSubscription'
import { CustomerAddressCollection } from './CustomerAddress'
import { CustomerPaymentSourceCollection } from './CustomerPaymentSource'
import { CustomerGroupCollection } from './CustomerGroup'

export class CustomerCollection extends BaseClass {
  static className = 'Customer'
  email: string
  password: string
  status: 'prospect' | 'acquired' | 'repeat'
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  customerAddresses: () => CollectionProxy<CustomerAddressCollection>
  customerPaymentSources: () => CollectionProxy<CustomerPaymentSourceCollection>
  customerSubscriptions: () => CollectionProxy<CustomerSubscriptionCollection>
  orders: () => CollectionProxy<OrderCollection>
  customerGroup: () => Promise<CustomerGroupCollection>
  static define() {
    this.attributes(
      'email',
      'password',
      'status',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('customerGroup', { className: 'CustomerGroup' })

    this.hasMany('customerAddresses', { className: 'CustomerAddress' })
    this.hasMany('customerPaymentSources', {
      className: 'CustomerPaymentSource',
    })
    this.hasMany('customerSubscriptions', { className: 'CustomerSubscription' })
    this.hasMany('orders', { className: 'Order' })
  }
}

const Customer = library.createResource<CustomerCollection>(CustomerCollection)

export default Customer
