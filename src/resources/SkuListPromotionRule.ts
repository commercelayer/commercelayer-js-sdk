import library from './library'
import BaseClass from '#utils/BaseClass'
import { SingleRelationship, MultiRelationship } from '#typings/Library'
import { PromotionCollection } from './Promotion'
import { SkuListCollection } from './SkuList'
import { SkuCollection } from './Sku'

export class SkuListPromotionRuleCollection extends BaseClass {
  static className = 'SkuListPromotionRule'
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  promotion: () => SingleRelationship<PromotionCollection>
  skuList: () => SingleRelationship<SkuListCollection>
  skus: () => MultiRelationship<SkuCollection>
  static define() {
    this.attributes(
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('promotion', { className: 'Promotion' })
    this.hasOne('skuList', { className: 'SkuList' })
    this.hasMany('skus', { className: 'Sku' })
  }
}

const SkuListPromotionRule = library.createResource<
  SkuListPromotionRuleCollection
>(SkuListPromotionRuleCollection)

export default SkuListPromotionRule
