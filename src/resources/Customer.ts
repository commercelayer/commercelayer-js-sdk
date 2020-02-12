import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionResponse } from './@types/Library'
import { OrderCollection } from './Order'
import { CustomerSubscriptionCollection } from './CustomerSubscription'
import { CustomerAddressCollection } from './CustomerAddress'
import { CustomerPaymentSourceCollection } from './CustomerPaymentSource'

export class CustomerCollection extends BaseClass {
  static className = 'Customer'
  email: string
  password: string
  status: 'prospect' | 'acquired' | 'repeat'
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  customerAddresses: () => CollectionResponse<CustomerAddressCollection>
  customerPaymentSources: () => CollectionResponse<
    CustomerPaymentSourceCollection
  >
  customerSubscriptions: () => CollectionResponse<
    CustomerSubscriptionCollection
  >
  orders: () => CollectionResponse<OrderCollection>
  static define() {
    this.attributes(
      'email',
      'password',
      'status',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('customerGroup', { className: 'CustomerGroup' })

    this.hasMany('customerAddresses', { className: 'CustomerAddress' })
    this.hasMany('customerPaymentSources', {
      className: 'CustomerPaymentSource'
    })
    this.hasMany('customerSubscriptions', { className: 'CustomerSubscription' })
    this.hasMany('orders', { className: 'Order' })
  }
}

const Customer = library.createResource<CustomerCollection>(CustomerCollection)

export default Customer
