import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { TaxCategoryCollection } from './TaxCategory'
import { TaxRuleCollection } from './TaxRule'

export class ManualTaxCalculatorCollection extends BaseClass {
  static className = 'ManualTaxCalculator'
  createdAt: Date
  id: string
  metadata: object
  name: string
  reference: string
  referenceOrigin: string
  updatedAt: Date
  taxCategories: () =>
    | Promise<TaxCategoryCollection>
    | MultiRelationship<TaxCategoryCollection>
  taxRules: () =>
    | Promise<TaxRuleCollection>
    | MultiRelationship<TaxRuleCollection>
  static define() {
    this.attributes(
      'createdAt',
      'id',
      'metadata',
      'name',
      'reference',
      'referenceOrigin',
      'updatedAt'
    )

    this.hasMany('taxCategories', { className: 'TaxCategory' })
    this.hasMany('taxRules', { className: 'TaxRule' })
  }
}

const ManualTaxCalculator = library.createResource<
  ManualTaxCalculatorCollection
>(ManualTaxCalculatorCollection)

export default ManualTaxCalculator
