import library from './library'
import BaseClass from '../utils/BaseClass'
import { SingleRelationship, MultiRelationship } from './@types/Library'
import { CouponCodesPromotionRuleCollection } from './CouponCodesPromotionRule'
import { MarketCollection } from './Market'
import { OrderAmountPromotionRuleCollection } from './OrderAmountPromotionRule'
import { SkuListPromotionRuleCollection } from './SkuListPromotionRule'
import { PromotionRuleCollection } from './PromotionRule'

export class FixedAmountPromotionCollection extends BaseClass {
  static className = 'FixedAmountPromotion'
  name: string
  startsAt: Date
  expiresAt: Date
  totalUsageLimit: Date
  totalUsageCount: Date
  active: boolean
  fixedAmountCents: number
  fixedAmountFloat: number
  formattedFixedAmount: string
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
      'fixedAmountCents',
      'fixedAmountFloat',
      'formattedFixedAmount',
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

const FixedAmountPromotion = library.createResource<
  FixedAmountPromotionCollection
>(FixedAmountPromotionCollection)

export default FixedAmountPromotion
