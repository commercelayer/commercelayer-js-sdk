import library from './library'

class CustomerPasswordReset extends library.Base {
  static define() {
    this.attributes('customer_email', 'reset_password_token', 'customer_password', '_reset_password_token', 'reset_password_at', 'id', 'created_at', 'updated_at', 'reference', 'metadata')

    this.hasOne('customer', {className: 'Customer'})
  }
}

export default library.createResource(CustomerPasswordReset)
