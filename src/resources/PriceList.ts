import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { PriceCollection } from './Price'

export class PriceListCollection extends BaseClass {
  static className = 'PriceList'
  name: string
  currencyCode: string
  taxIncluded: boolean
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  prices: () => MultiRelationship<PriceCollection>
  static define() {
    this.attributes(
      'name',
      'currencyCode',
      'taxIncluded',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasMany('prices', { className: 'Price' })
  }
}

const PriceList = library.createResource<PriceListCollection>(
  PriceListCollection
)

export default PriceList
