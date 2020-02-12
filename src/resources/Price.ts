import library from './library'
import BaseClass from '../utils/BaseClass'

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
  metadata: object
  static define() {
    this.attributes(
      'currency_code',
      'sku_code',
      'amount_cents',
      'amount_float',
      'formatted_amount',
      'compare_at_amount_cents',
      'compare_at_amount_float',
      'formatted_compare_at_amount',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('priceList', { className: 'PriceList' })
    this.hasOne('sku', { className: 'Sku' })
  }
}

const Price = library.createResource<PriceCollection>(PriceCollection)

export default Price
