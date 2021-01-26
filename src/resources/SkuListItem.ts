import library from './library'
import BaseClass from '#utils/BaseClass'
import { SkuCollection } from './Sku'
import { SkuListCollection } from './SkuList'
import { SingleRelationship } from '#typings/Library'

export class SkuListItemCollection extends BaseClass {
  static className = 'SkuListItem'
  position: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  sku: () => SingleRelationship<SkuCollection>
  skuList: () => SingleRelationship<SkuListCollection>
  static define() {
    this.attributes(
      'position',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )
    this.hasOne('sku', { className: 'Sku' })
    this.hasOne('skuList', { className: 'SkuList' })
  }
}

const SkuListItem = library.createResource<SkuListItemCollection>(
  SkuListItemCollection
)

export default SkuListItem
