import library from './library'
import BaseClass from '../utils/BaseClass'
import { SingleRelationship } from './typings/Library'
import { PromotionCollection } from './Promotion'

export class CouponCodesPromotionRuleCollection extends BaseClass {
  static className = 'CouponCodesPromotionRule'
  reference: string
  referenceOrigin: string
  createdAt: Date
  updatedAt: Date
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

    this.hasOne('promotions', { className: 'Promotion' })
  }
}

const CouponCodesPromotionRule = library.createResource<
  CouponCodesPromotionRuleCollection
>(CouponCodesPromotionRuleCollection)

export default CouponCodesPromotionRule
