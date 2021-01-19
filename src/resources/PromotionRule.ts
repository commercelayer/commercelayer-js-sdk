import library from './library'
import BaseClass from '#utils/BaseClass'
import { SingleRelationship } from '#typings/Library'
import { PromotionCollection } from './Promotion'

export class PromotionRuleCollection extends BaseClass {
  static className = 'PromotionRule'
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  promotion: () => SingleRelationship<PromotionCollection>
  static define() {
    this.attributes(
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('promotion', { className: 'Promotion' })
  }
}

const PromotionRule = library.createResource<PromotionRuleCollection>(
  PromotionRuleCollection
)

export default PromotionRule
