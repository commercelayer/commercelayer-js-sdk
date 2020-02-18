import library from './library'
import BaseClass from '../utils/BaseClass'

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
