import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { TaxCategoryCollection } from './TaxCategory'

export class AvalaraAccountCollection extends BaseClass {
  static className = 'AvalaraAccount'
  companyCode: string
  createdAt: Date
  ddp: string
  id: string
  metadata: object
  name: string
  password: string
  reference: string
  referenceOrigin: string
  updatedAt: Date
  username: string
  taxCategories: () => MultiRelationship<TaxCategoryCollection>
  static define() {
    this.attributes(
      'companyCode',
      'createdAt',
      'createdAt',
      'ddp',
      'id',
      'metadata',
      'name',
      'password',
      'reference',
      'referenceOrigin',
      'updatedAt'
    )

    this.hasMany('taxCategories', { className: 'TaxCategory' })
  }
}

const AvalaraAccount = library.createResource<AvalaraAccountCollection>(
  AvalaraAccountCollection
)

export default AvalaraAccount
