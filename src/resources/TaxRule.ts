import library from './library'
import BaseClass from '#utils/BaseClass'
import { SingleRelationship } from '#typings/Library'
import { ManualTaxCalculatorCollection } from './ManualTaxCalculator'

export class TaxRuleCollection extends BaseClass {
  static className = 'TaxRule'
  adjustmentTaxable: boolean
  breakDown: Record<string, string>
  countryCodeRegex: string
  createdAt: Date
  freightTaxable: boolean
  giftCardTaxable: boolean
  id: string
  metadata: object
  name: string
  notCountryCodeRegex: string
  notStateCodeRegex: string
  notZipCodeRegex: string
  paymentMethodTaxable: boolean
  reference: string
  referenceOrigin: string
  stateCodeRegex: string
  taxRate: number
  updatedAt: Date
  zipCodeRegex: string
  manualTaxCalculator: () =>
    | Promise<ManualTaxCalculatorCollection>
    | SingleRelationship<ManualTaxCalculatorCollection>

  static define() {
    this.attributes(
      'adjustmentTaxable',
      'breakDown',
      'countryCodeRegex',
      'createdAt',
      'freightTaxable',
      'giftCardTaxable',
      'id',
      'metadata',
      'name',
      'notCountryCodeRegex',
      'notStateCodeRegex',
      'notZipCodeRegex',
      'paymentMethodTaxable',
      'reference',
      'referenceOrigin',
      'stateCodeRegex',
      'taxRate',
      'updatedAt',
      'zipCodeRegex'
    )

    this.hasOne('manualTaxCalculator', { className: 'ManualTaxCalculator' })
  }
}

const TaxRule = library.createResource<TaxRuleCollection>(TaxRuleCollection)

export default TaxRule
