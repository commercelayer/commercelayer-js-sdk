import library from './library'
import BaseClass from '../utils/BaseClass'
import { StockLocationCollection } from './StockLocation'
import { SkuCollection } from './Sku'

export class StockItemCollection extends BaseClass {
  static className = 'StockItem'
  skuCode: string
  quantity: number
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  stockLocation: () => Promise<StockLocationCollection>
  sku: () => Promise<SkuCollection>
  static define() {
    this.attributes(
      'skuCode',
      'quantity',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
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
