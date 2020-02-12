import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionResponse } from './@types/Library'
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
  metadata: object
  prices: () => CollectionResponse<PriceCollection>
  static define() {
    this.attributes(
      'name',
      'currency_code',
      'tax_included',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasMany('prices', { className: 'Price' })
  }
}

const PriceList = library.createResource<PriceListCollection>(
  PriceListCollection
)

export default PriceList
