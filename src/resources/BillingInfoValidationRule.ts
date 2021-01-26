import library from './library'
import BaseClass from '#utils/BaseClass'
import { SingleRelationship } from '#typings/Library'
import { MarketCollection } from './Market'

export class BillingInfoValidationRuleCollection extends BaseClass {
  static className = 'BillingInfoValidationRule'
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  market: () => SingleRelationship<MarketCollection>
  static define() {
    this.attributes(
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('market', { className: 'Market' })
  }
}

const BillingInfoValidationRule = library.createResource<
  BillingInfoValidationRuleCollection
>(BillingInfoValidationRuleCollection)

export default BillingInfoValidationRule
