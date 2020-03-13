import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionProxy } from './@types/Library'
import { SkuCollection } from './Sku'

export class ShippingCategoryCollection extends BaseClass {
  static className = 'ShippingCategory'
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  skus: () => CollectionProxy<SkuCollection>
  static define() {
    this.attributes(
      'name',
      'id',
      'createdAt',
      'updatedAt',
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
