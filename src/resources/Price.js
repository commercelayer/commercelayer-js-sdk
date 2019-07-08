import library from './library';

class Price extends library.Base {
  static define() {
    this.attributes(
      'currency_code',
      'sku_code',
      'amount_cents',
      'amount_float',
      'formatted_amount',
      'compare_at_amount_cents',
      'compare_at_amount_float',
      'formatted_compare_at_amount',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )

    this.belongsTo('priceList', { className: 'PriceList' })
    this.belongsTo('sku', { className: 'Sku' })

  }
}

export default library.createResource(Price);
