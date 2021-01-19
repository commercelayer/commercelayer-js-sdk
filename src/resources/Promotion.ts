import library from './library'
import BaseClass from '#utils/BaseClass'
import { SingleRelationship, MultiRelationship } from '#typings/Library'
import { MarketCollection } from './Market'
import { OrderAmountPromotionRuleCollection } from './OrderAmountPromotionRule'
import { PromotionRuleCollection } from './PromotionRule'
import { SkuListPromotionRuleCollection } from './SkuListPromotionRule'

export class PromotionCollection extends BaseClass {
  static className = 'Promotion'
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

const Promotion = library.createResource<PromotionCollection>(
  PromotionCollection
)

export default Promotion
