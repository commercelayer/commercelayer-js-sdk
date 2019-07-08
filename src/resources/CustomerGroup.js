import library from './library';

class CustomerGroup extends library.Base {
  static define() {
    this.attributes(
      'name',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )

    this.belongsTo('priceList', { className: 'PriceList' })

    this.hasMany('customers', { className: 'Customer' })
  }
}

export default library.createResource(CustomerGroup);
