import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionProxy } from './typings/Library'
import { InventoryStockLocationCollection } from './InventoryStockLocation'

export class InventoryModelCollection extends BaseClass {
  static className = 'InventoryModel'
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  InventoryStockLocations: () => CollectionProxy<
    InventoryStockLocationCollection
  >
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
    this.hasMany('InventoryStockLocations', {
      className: 'InventoryStockLocation',
    })
  }
}

const InventoryModel = library.createResource<InventoryModelCollection>(
  InventoryModelCollection
)

export default InventoryModel
