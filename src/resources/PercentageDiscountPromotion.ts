import library from './library'
import BaseClass from '#utils/BaseClass'
import { SingleRelationship, MultiRelationship } from '#typings/Library'
import { CouponCodesPromotionRuleCollection } from './CouponCodesPromotionRule'
import { MarketCollection } from './Market'
import { SkuListCollection } from './SkuList'
import { OrderAmountPromotionRuleCollection } from './OrderAmountPromotionRule'
import { SkuCollection } from './Sku'
import { PromotionRuleCollection } from './PromotionRule'
import { SkuListPromotionRuleCollection } from './SkuListPromotionRule'

export class PercentageDiscountPromotionCollection extends BaseClass {
  static className = 'PercentageDiscountPromotion'
  name: string
  startsAt: Date
  expiresAt: Date
  totalUsageLimit: Date
  totalUsageCount: Date
  active: boolean
  percentage: number
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
  skuList: () => SingleRelationship<SkuListCollection>
  couponCodesPromotionRule: () => SingleRelationship<
    CouponCodesPromotionRuleCollection
  >
  promotionRules: () => MultiRelationship<PromotionRuleCollection>
  skus: () => MultiRelationship<SkuCollection>
  static define() {
    this.attributes(
      'name',
      'startsAt',
      'expiresAt',
      'totalUsageLimit',
      'totalUsageCount',
      'active',
      'percentage',
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
    this.hasOne('skuList', { className: 'SkuList' })
    this.hasOne('couponCodesPromotionRule', {
      className: 'CouponCodesPromotionRule',
    })
    this.hasMany('promotionRules', { className: 'PromotionRule' })
    this.hasMany('skus', { className: 'Sku' })
  }
}

const PercentageDiscountPromotion = library.createResource<
  PercentageDiscountPromotionCollection
>(PercentageDiscountPromotionCollection)

export default PercentageDiscountPromotion
