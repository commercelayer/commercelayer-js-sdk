import library from './library';

class CustomerPaymentSource extends library.Base {
  static define() {
    this.attributes(
      'name',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )

    this.belongsTo('customer', { className: 'Customer' })
    this.belongsTo('paymentSource', { polymorphic: true })

  }
}

export default library.createResource(CustomerPaymentSource);
