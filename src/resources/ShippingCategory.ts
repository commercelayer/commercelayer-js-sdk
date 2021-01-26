import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { SkuCollection } from './Sku'

export class ShippingCategoryCollection extends BaseClass {
  static className = 'ShippingCategory'
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  skus: () => MultiRelationship<SkuCollection>
  static define() {
    this.attributes(
      'name',
      'id',
      'createdAt',
      'updatedAt',
      'referenceOrigin',
      'metadata'
    )

    this.hasMany('skus', { className: 'Sku' })
  }
}

const ShippingCategory = library.createResource<ShippingCategoryCollection>(
  ShippingCategoryCollection
)

export default ShippingCategory
