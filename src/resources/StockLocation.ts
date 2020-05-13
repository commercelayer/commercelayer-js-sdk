import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionProxy } from './@types/Library'
import { StockLevelCollection } from './StockLevel'
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
  metadata: object
  address: () => Promise<AddressCollection>
  stockLevels: () => CollectionProxy<StockLevelCollection>
  stockItems: () => CollectionProxy<StockItemCollection>
  static define() {
    this.attributes(
      'name',
      'labelFormat',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'metadata'
    )

    this.hasOne('address', { className: 'Address' })

    this.hasMany('stockLevels', { className: 'StockLevel' })
    this.hasMany('stockItems', { className: 'StockItem' })
  }
}

const StockLocation = library.createResource<StockLocationCollection>(
  StockLocationCollection
)

export default StockLocation
