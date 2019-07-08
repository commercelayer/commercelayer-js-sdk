import library from './library';

class StockItem extends library.Base {
  static define() {
    this.attributes(
      'sku_code',
      'quantity',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )

    this.belongsTo('stockLocation', { className: 'StockLocation' })
    this.belongsTo('sku', { className: 'Sku' })

  }
}

export default library.createResource(StockItem);
