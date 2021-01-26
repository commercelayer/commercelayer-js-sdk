import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { TaxCategoryCollection } from './TaxCategory'

export class TaxjarAccountCollection extends BaseClass {
  static className = 'TaxjarAccount'
  apiKey: string
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
      'apiKey',
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

const TaxjarAccount = library.createResource<TaxjarAccountCollection>(
  TaxjarAccountCollection
)

export default TaxjarAccount
