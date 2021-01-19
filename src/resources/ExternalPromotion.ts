import library from './library'
import BaseClass from '#utils/BaseClass'
import { MarketCollection } from './Market'
import { CouponCodesPromotionRuleCollection } from './CouponCodesPromotionRule'
import { MultiRelationship, SingleRelationship } from '#typings/Library'
import { OrderAmountPromotionRuleCollection } from './OrderAmountPromotionRule'
import { SkuListPromotionRuleCollection } from './SkuListPromotionRule'
import { PromotionRuleCollection } from './PromotionRule'

export class ExternalPromotionCollection extends BaseClass {
  static className = 'ExternalPromotion'
  name: string
  startsAt: Date
  expiresAt: Date
  totalUsageLimit: number
  totalUsageCount: number
  active: boolean
  promotionUrl: string
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
      'promotionUrl',
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

const ExternalPromotion = library.createResource<ExternalPromotionCollection>(
  ExternalPromotionCollection
)

export default ExternalPromotion
