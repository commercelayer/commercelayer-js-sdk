import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { TaxCategoryCollection } from './TaxCategory'

export class TaxCalculatorCollection extends BaseClass {
  static className = 'TaxCalculator'
  createdAt: Date
  id: string
  metadata: object
  name: string
  reference: string
  referenceOrigin: string
  updatedAt: Date
  taxCategories: () => MultiRelationship<TaxCategoryCollection>
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
  }
}

const TaxCalculator = library.createResource<TaxCalculatorCollection>(
  TaxCalculatorCollection
)

export default TaxCalculator
