import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { TaxCategoryCollection } from './TaxCategory'

export class ExternalTaxCalculatorCollection extends BaseClass {
  static className = 'ExternalTaxCalculator'
  createdAt: Date
  id: string
  metadata: object
  name: string
  reference: string
  referenceOrigin: string
  updatedAt: Date
  taxCalculatorUrl: string
  taxCategories: () =>
    | Promise<TaxCategoryCollection>
    | MultiRelationship<TaxCategoryCollection>
  static define() {
    this.attributes(
      'createdAt',
      'id',
      'metadata',
      'name',
      'reference',
      'referenceOrigin',
      'updatedAt',
      'taxCalculatorUrl'
    )

    this.hasMany('taxCategories', { className: 'TaxCategory' })
  }
}

const ExternalTaxCalculator = library.createResource<
  ExternalTaxCalculatorCollection
>(ExternalTaxCalculatorCollection)

export default ExternalTaxCalculator
