import library from './library';

class SkuOption extends library.Base {
  static define() {
    this.attributes(
      'name',
      'description',
      'price_amount_cents',
      'price_amount_float',
      'formatted_price_amount',
      'delay_hours',
      'delay_days',
      'sku_code_regex',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )

    this.belongsTo('market', { className: 'Market' })

  }
}

export default library.createResource(SkuOption);
