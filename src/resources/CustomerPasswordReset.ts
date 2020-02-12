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
      'customer_email',
      'reset_password_token',
      'customer_password',
      '_reset_password_token',
      'reset_password_at',
      'id',
      'created_at',
      'updated_at',
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
