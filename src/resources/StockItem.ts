import library from './library'
import BaseClass from '#utils/BaseClass'
import { StockLocationCollection } from './StockLocation'
import { SkuCollection } from './Sku'
import { SingleRelationship } from '#typings/Library'

export class StockItemCollection extends BaseClass {
  static className = 'StockItem'
  skuCode: string
  quantity: number
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  stockLocation: () => SingleRelationship<StockLocationCollection>
  sku: () => SingleRelationship<SkuCollection>
  static define() {
    this.attributes(
      'skuCode',
      'quantity',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('stockLocation', { className: 'StockLocation' })
    this.hasOne('sku', { className: 'Sku' })
  }
}

const StockItem = library.createResource<StockItemCollection>(
  StockItemCollection
)

export default StockItem
