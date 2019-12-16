import library from './library'

export class StockLevelCollection extends library.Base {
  static className = 'StockLevel'
  priority: number
  onHold: boolean
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'priority',
      'on_hold',
      'id',
      'created_at',
      'updated_at',
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
