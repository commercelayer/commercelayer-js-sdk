import library from './library'
import BaseClass from '#utils/BaseClass'

export class BillingInfoValidationRuleCollection extends BaseClass {
  static className = 'BillingInfoValidationRule'
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
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
