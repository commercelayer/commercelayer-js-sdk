import library from './library';

class PriceList extends library.Base {
  static define() {
    this.attributes(
      'name',
      'currency_code',
      'tax_included',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )


    this.hasMany('prices', { className: 'Price' })
  }
}

export default library.createResource(PriceList);
