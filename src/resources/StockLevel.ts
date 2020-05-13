import library from './library'
import BaseClass from '../utils/BaseClass'
import { StockLocationCollection } from './StockLocation'
import { InventoryModelCollection } from './InventoryModel'

export class StockLevelCollection extends BaseClass {
  static className = 'StockLevel'
  priority: number
  onHold: boolean
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  stockLocation: () => Promise<StockLocationCollection>
  inventoryModel: () => Promise<InventoryModelCollection>
  static define() {
    this.attributes(
      'priority',
      'onHold',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'metadata'
    )

    this.hasOne('stockLocation', { className: 'StockLocation' })
    this.hasOne('inventoryModel', { className: 'InventoryModel' })
  }
}

const StockLevel = library.createResource<StockLevelCollection>(
  StockLevelCollection
)

export default StockLevel
