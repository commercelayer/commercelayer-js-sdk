import library from './library'
import BaseClass from '#utils/BaseClass'
import {
  MultiRelationship,
  SingleRelationship,
} from '#typings/Library'
import { OrderCollection } from './Order'
import { CustomerSubscriptionCollection } from './CustomerSubscription'
import { CustomerAddressCollection } from './CustomerAddress'
import { CustomerPaymentSourceCollection } from './CustomerPaymentSource'
import { CustomerGroupCollection } from './CustomerGroup'

export class CustomerCollection extends BaseClass {
  static className = 'Customer'
  createdAt: Date
  email: string
  hasPassword: boolean
  id: string
  metadata: object
  password: string
  passwordBlank: boolean
  passwordPresent: boolean
  reference: string
  referenceOrigin: string
  status: 'prospect' | 'acquired' | 'repeat'
  updatedAt: Date
  customerAddresses: () => MultiRelationship<CustomerAddressCollection>
  customerPaymentSources: () => MultiRelationship<
    CustomerPaymentSourceCollection
  >
  customerSubscriptions: () => MultiRelationship<CustomerSubscriptionCollection>
  orders: () => MultiRelationship<OrderCollection>
  customerGroup: () => SingleRelationship<CustomerGroupCollection>
  static define() {
    this.attributes(
      'email',
      'hasPassword',
      'password',
      'passwordBlank',
      'passwordPresent',
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
