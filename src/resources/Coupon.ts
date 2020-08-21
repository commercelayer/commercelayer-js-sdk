import library from './library'
import BaseClass from '../utils/BaseClass'
import { SingleRelationship } from './typings/Library'
import { PromotionRuleCollection } from './PromotionRule'

export class CouponCollection extends BaseClass {
  static className = 'Coupon'
  code: string
  usageLimit: number
  usageCount: number
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  promotionRule: () => SingleRelationship<PromotionRuleCollection>
  static define() {
    this.attributes(
      'code',
      'usageLimit',
      'usageCount',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('promotionRule', { className: 'PromotionRule' })
  }
}

const Coupon = library.createResource<CouponCollection>(CouponCollection)

export default Coupon
