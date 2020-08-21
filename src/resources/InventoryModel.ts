import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionProxy } from './typings/Library'
import { StockLevelCollection } from './StockLevel'

export class InventoryModelCollection extends BaseClass {
  static className = 'InventoryModel'
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  stockLevels: () => CollectionProxy<StockLevelCollection>
  static define() {
    this.attributes(
      'name',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )
    this.hasMany('stockLevels', { className: 'StockLevel' })
  }
}

const InventoryModel = library.createResource<InventoryModelCollection>(
  InventoryModelCollection
)

export default InventoryModel
