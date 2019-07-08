import library from './library';

class Merchant extends library.Base {
  static define() {
    this.attributes(
      'name',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )

    this.belongsTo('address', { className: 'Address' })

  }
}

export default library.createResource(Merchant);
