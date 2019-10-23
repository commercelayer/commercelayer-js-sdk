import library from './library'

class StockLocation extends library.Base {
  static define() {
    this.attributes('name', 'label_format', 'id', 'created_at', 'updated_at', 'reference', 'metadata')

    this.hasOne('address', {className: 'Address'})

    this.hasMany('stockLevels', {className: 'StockLevel'})
    this.hasMany('stockItems', {className: 'StockItem'})
  }
}

export default library.createResource(StockLocation)
