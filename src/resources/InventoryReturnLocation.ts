import library from './library'
import BaseClass from '../utils/BaseClass'
import { StockLocationCollection } from './StockLocation'
import { InventoryModelCollection } from './InventoryModel'

export class InventoryReturnLocationCollection extends BaseClass {
  static className = 'InventoryReturnLocation'
  priority: number
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  stockLocation: () => Promise<StockLocationCollection>
  inventoryModel: () => Promise<InventoryModelCollection>
  static define() {
    this.attributes(
      'priority',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )
    this.hasOne('stockLocation', { className: 'StockLocation' })
    this.hasOne('inventoryModel', { className: 'InventoryModel' })
  }
}

const InventoryModel = library.createResource<
  InventoryReturnLocationCollection
>(InventoryReturnLocationCollection)

export default InventoryModel
