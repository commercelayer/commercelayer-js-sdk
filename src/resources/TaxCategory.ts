import library from './library'
import BaseClass from '#utils/BaseClass'
import { SingleRelationship } from '#typings/Library'
import { SkuCollection } from './Sku'
import { TaxCalculatorCollection } from './TaxCalculator'

export class TaxCategoryCollection extends BaseClass {
  static className = 'TaxCategory'
  code: string
  createdAt: Date
  id: string
  metadata: object
  reference: string
  referenceOrigin: string
  skuCode: string
  updatedAt: Date
  sku: () => Promise<SkuCollection> | SingleRelationship<SkuCollection>
  taxCalculator: () =>
    | Promise<TaxCalculatorCollection>
    | SingleRelationship<TaxCalculatorCollection>
  static define() {
    this.attributes(
      'code',
      'createdAt',
      'id',
      'metadata',
      'reference',
      'referenceOrigin',
      'skuCode',
      'updatedAt'
    )

    this.hasOne('sku', { className: 'Sku' })
    this.hasOne('taxCalculator', { className: 'TaxCalculator' })
  }
}

const TaxCategory = library.createResource<TaxCategoryCollection>(
  TaxCategoryCollection
)

export default TaxCategory
