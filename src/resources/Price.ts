import library from './library'

export class Price extends library.Base {
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

export default library.createResource(Price)
