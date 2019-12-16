import library from './library'

export class StockItemCollection extends library.Base {
  static className = 'StockItem'
  skuCode: string
  quantity: number
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'sku_code',
      'quantity',
      'id',
      'created_at',
      'updated_at',
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
