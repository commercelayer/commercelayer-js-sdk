import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionProxy } from './typings/Library'
import { SkuCollection } from './Sku'
import { SkuListItemCollection } from './SkuListItem'

export class SkuListCollection extends BaseClass {
  static className = 'SkuList'
  name: string
  slug: string
  description: string
  manual: boolean
  skuCodeRegex: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  skus: () => CollectionProxy<SkuCollection>
  skuListItems: () => CollectionProxy<SkuListItemCollection>
  static define() {
    this.attributes(
      'name',
      'slug',
      'description',
      'manual',
      'skuCodeRegex',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasMany('skus', { className: 'Sku' })
    this.hasMany('skuListItems', { className: 'SkuListItem' })
  }
}

const SkuList = library.createResource<SkuListCollection>(SkuListCollection)

export default SkuList
