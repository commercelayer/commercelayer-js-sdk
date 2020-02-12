import library from './library'
import BaseClass from '../utils/BaseClass'

export class ItemCollection extends BaseClass {
  static className = 'Item'
  static define() {
    this.attributes()
  }
}

const Item = library.createResource<ItemCollection>(ItemCollection)

export default Item
