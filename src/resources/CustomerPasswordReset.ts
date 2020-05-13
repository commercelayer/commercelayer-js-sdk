import library from './library'
import BaseClass from '../utils/BaseClass'
import { CustomerCollection } from './Customer'

export class CustomerPasswordResetCollection extends BaseClass {
  static className = 'CustomerPasswordReset'
  customerEmail: string
  resetPasswordToken: string
  customerPassword: string
  _resetPasswordToken: string
  resetPasswordAt: Date
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  customer: () => Promise<CustomerCollection>
  static define() {
    this.attributes(
      'customerEmail',
      'resetPasswordToken',
      'customerPassword',
      '_resetPasswordToken',
      'resetPasswordAt',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'metadata'
    )

    this.hasOne('customer', { className: 'Customer' })
  }
}

const CustomerPasswordReset = library.createResource<
  CustomerPasswordResetCollection
>(CustomerPasswordResetCollection)

export default CustomerPasswordReset
