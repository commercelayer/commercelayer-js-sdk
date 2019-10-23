import library from './library'

class StockLevel extends library.Base {
  static define() {
    this.attributes('priority', 'on_hold', 'id', 'created_at', 'updated_at', 'reference', 'metadata')

    this.hasOne('stockLocation', {className: 'StockLocation'})
    this.hasOne('inventoryModel', {className: 'InventoryModel'})
  }
}

export default library.createResource(StockLevel)
