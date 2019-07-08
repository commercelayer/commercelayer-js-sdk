import library from './library';

class CustomerAddress extends library.Base {
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
    this.belongsTo('address', { className: 'Address' })

  }
}

export default library.createResource(CustomerAddress);
