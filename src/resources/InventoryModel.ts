import library from './library'
import { CollectionResponse } from './@types/Library'
import { StockLevelCollection } from './StockLevel'

export class InventoryModelCollection extends library.Base {
  static className = 'InventoryModel'
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  stockLevels: () => CollectionResponse<StockLevelCollection>
  static define() {
    this.attributes(
      'name',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )
    this.hasMany('stockLevels', { className: 'StockLevel' })
  }
}

const InventoryModel = library.createResource<InventoryModelCollection>(
  InventoryModelCollection
)

export default InventoryModel
