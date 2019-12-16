import library from './library'

export class SkuOptionCollection extends library.Base {
  static className = 'SkuOption'
  name: string
  description: string
  priceAmountCents: number
  priceAmountFloat: number
  formattedPriceAmount: string
  delayHours: number
  delayDays: number
  skuCode_regex: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'name',
      'description',
      'price_amount_cents',
      'price_amount_float',
      'formatted_price_amount',
      'delay_hours',
      'delay_days',
      'sku_code_regex',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('market', { className: 'Market' })
  }
}

const SkuOption = library.createResource<SkuOptionCollection>(
  SkuOptionCollection
)

export default SkuOption
