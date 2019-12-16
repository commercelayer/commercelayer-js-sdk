import library from './library'
import { CollectionResponse } from './@types/Library'
import { SkuCollection } from './Sku'

export class ShippingCategoryCollection extends library.Base {
  static className = 'ShippingCategory'
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  skus: () => CollectionResponse<SkuCollection>
  static define() {
    this.attributes(
      'name',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasMany('skus', { className: 'Sku' })
  }
}

const ShippingCategory = library.createResource<ShippingCategoryCollection>(
  ShippingCategoryCollection
)

export default ShippingCategory
