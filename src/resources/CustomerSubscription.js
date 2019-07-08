import library from './library';

class CustomerSubscription extends library.Base {
  static define() {
    this.attributes(
      'customer_email',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )

    this.belongsTo('customer', { className: 'Customer' })

  }
}

export default library.createResource(CustomerSubscription);
