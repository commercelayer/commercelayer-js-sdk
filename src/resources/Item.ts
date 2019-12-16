import library from './library'

export class ItemCollection extends library.Base {
  static className = 'Item'
  static define() {
    this.attributes()
    this.hasOne('skus', { className: 'Sku' })
  }
}

const Item = library.createResource<ItemCollection>(ItemCollection)

export default Item
