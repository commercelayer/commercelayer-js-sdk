import library from './library'
import BaseClass from '../utils/BaseClass'
import { PriceListCollection } from './PriceList'
import { SkuCollection } from './Sku'

export class PriceCollection extends BaseClass {
  static className = 'Price'
  currencyCode: string
  skuCode: string
  amountCents: number
  amountFloat: number
  formattedAmount: string
  compareAtAmountCents: number
  compareAtAmountFloat: number
  formattedCompareAtAmount: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  priceList: () => Promise<PriceListCollection>
  sku: () => Promise<SkuCollection>
  static define() {
    this.attributes(
      'currencyCode',
      'skuCode',
      'amountCents',
      'amountFloat',
      'formattedAmount',
      'compareAtAmountCents',
      'compareAtAmountFloat',
      'formattedCompareAtAmount',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('priceList', { className: 'PriceList' })
    this.hasOne('sku', { className: 'Sku' })
  }
}

const Price = library.createResource<PriceCollection>(PriceCollection)

export default Price
