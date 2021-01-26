import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { InventoryStockLocationCollection } from './InventoryStockLocation'

export class InventoryModelCollection extends BaseClass {
  static className = 'InventoryModel'
  name: string
  id: string
  stockLocationsCutoff: number
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  inventoryStockLocations: () => MultiRelationship<
    InventoryStockLocationCollection
  >
  static define() {
    this.attributes(
      'name',
      'id',
      'stockLocationsCutoff',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )
    this.hasMany('inventoryStockLocations', {
      className: 'InventoryStockLocation',
    })
  }
}

const InventoryModel = library.createResource<InventoryModelCollection>(
  InventoryModelCollection
)

export default InventoryModel
