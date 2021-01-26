import library from './library'
import BaseClass from '#utils/BaseClass'
import { StockLocationCollection } from './StockLocation'
import { InventoryModelCollection } from './InventoryModel'
import { SingleRelationship } from '#typings/Library'

export class InventoryStockLocationCollection extends BaseClass {
  static className = 'InventoryStockLocation'
  priority: number
  onHold: boolean
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  stockLocation: () => SingleRelationship<StockLocationCollection>
  inventoryModel: () => SingleRelationship<InventoryModelCollection>
  static define() {
    this.attributes(
      'priority',
      'onHold',
      'id',
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

const InventoryStockLocation = library.createResource<
  InventoryStockLocationCollection
>(InventoryStockLocationCollection)

export default InventoryStockLocation
