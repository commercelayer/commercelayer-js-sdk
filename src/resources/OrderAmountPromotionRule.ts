import library from './library'
import BaseClass from '../utils/BaseClass'
import { SingleRelationship } from './@types/Library'
import { PromotionCollection } from './Promotion'

export class OrderAmountPromotionRuleCollection extends BaseClass {
  static className = 'OrderAmountPromotionRule'
  orderAmountCents: number
  orderAmountFloat: number
  formattedOrderAmount: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  promotion: () => SingleRelationship<PromotionCollection>
  static define() {
    this.attributes(
      'orderAmountCents',
      'orderAmountFloat',
      'formattedOrderAmount',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('promotion', { className: 'Promotion' })
  }
}

const OrderAmountPromotionRule = library.createResource<
  OrderAmountPromotionRuleCollection
>(OrderAmountPromotionRuleCollection)

export default OrderAmountPromotionRule
