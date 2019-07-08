import library from './library';

class Market extends library.Base {
  static define() {
    this.attributes(
      'number',
      'name',
      'facebook_pixel_id',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )

    this.belongsTo('merchant', { className: 'Merchant' })
    this.belongsTo('priceList', { className: 'PriceList' })
    this.belongsTo('inventoryModel', { className: 'InventoryModel' })

  }
}

export default library.createResource(Market);
