import library from './library';

class InventoryModel extends library.Base {
  static define() {
    this.attributes(
      'name',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )


    this.hasMany('stockLevels', { className: 'StockLevel' })
  }
}

export default library.createResource(InventoryModel);
