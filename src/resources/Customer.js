import library from './library';

class Customer extends library.Base {
  static define() {
    this.attributes(
      'email',
      'password',
      'status',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )

    this.belongsTo('customerGroup', { className: 'CustomerGroup' })

    this.hasMany('customerAddresses', { className: 'CustomerAddress' })
    this.hasMany('customerPaymentSources', { className: 'CustomerPaymentSource' })
    this.hasMany('customerSubscriptions', { className: 'CustomerSubscription' })
    this.hasMany('orders', { className: 'Order' })
  }
}

export default library.createResource(Customer);
