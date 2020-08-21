import library from './library'
import BaseClass from '../utils/BaseClass'
import { SingleRelationship, MultiRelationship } from './typings/Library'
import { CouponCodesPromotionRuleCollection } from './CouponCodesPromotionRule'
import { MarketCollection } from './Market'
import { PromotionRuleCollection } from './PromotionRule'
import { OrderAmountPromotionRuleCollection } from './OrderAmountPromotionRule'
import { SkuListPromotionRuleCollection } from './SkuListPromotionRule'

export class FreeShippingPromotionCollection extends BaseClass {
  static className = 'FreeShippingPromotion'
  name: string
  startsAt: Date
  expiresAt: Date
  totalUsageLimit: Date
  totalUsageCount: Date
  active: boolean
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  market: () => SingleRelationship<MarketCollection>
  orderAmountPromotionRule: () => SingleRelationship<
    OrderAmountPromotionRuleCollection
  >
  skuListPromotionRule: () => SingleRelationship<SkuListPromotionRuleCollection>
  couponCodesPromotionRule: () => SingleRelationship<
    CouponCodesPromotionRuleCollection
  >
  promotionRules: () => MultiRelationship<PromotionRuleCollection>
  static define() {
    this.attributes(
      'name',
      'startsAt',
      'expiresAt',
      'totalUsageLimit',
      'totalUsageCount',
      'active',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('market', { className: 'Market' })
    this.hasOne('orderAmountPromotionRule', {
      className: 'OrderAmountPromotionRule',
    })
    this.hasOne('skuListPromotionRule', { className: 'SkuListPromotionRule' })
    this.hasOne('couponCodesPromotionRule', {
      className: 'CouponCodesPromotionRule',
    })
    this.hasMany('promotionRules', { className: 'PromotionRule' })
  }
}

const FreeShippingPromotion = library.createResource<
  FreeShippingPromotionCollection
>(FreeShippingPromotionCollection)

export default FreeShippingPromotion
