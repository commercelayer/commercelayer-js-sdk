import library from './library'

class Item extends library.Base {
  static define() {
    this.attributes()
    this.hasOne('skus', { className: 'Sku' })
  }
}

export default library.createResource(Item)
