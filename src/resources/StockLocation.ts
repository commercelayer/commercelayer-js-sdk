import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship, SingleRelationship } from '#typings/Library'
import { InventoryStockLocationCollection } from './InventoryStockLocation'
import { StockItemCollection } from './StockItem'
import { AddressCollection } from './Address'

export class StockLocationCollection extends BaseClass {
  static className = 'StockLocation'
  name: string
  labelFormat: string
  id: string
  createdAt: string
  updatedAt: string
  reference: string
  referenceOrigin: string
  metadata: object
  address: () => SingleRelationship<AddressCollection>
  InventoryStockLocations: () => MultiRelationship<
    InventoryStockLocationCollection
  >
  stockItems: () => MultiRelationship<StockItemCollection>
  static define() {
    this.attributes(
      'name',
      'labelFormat',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('address', { className: 'Address' })

    this.hasMany('InventoryStockLocations', {
      className: 'InventoryStockLocation',
    })
    this.hasMany('stockItems', { className: 'StockItem' })
  }
}

const StockLocation = library.createResource<StockLocationCollection>(
  StockLocationCollection
)

export default StockLocation
