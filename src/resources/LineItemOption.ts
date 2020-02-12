import library from './library'
import BaseClass from '../utils/BaseClass'

export class LineItemOptionCollection extends BaseClass {
  static className = 'LineItemOption'
  name: string
  quantity: number
  currencyCode: string
  unitAmountCents: number
  unitAmountFloat: number
  formattedUnitAmount: string
  totalAmountCents: number
  totalAmountFloat: number
  formattedTotalAmount: string
  delayHours: number
  delayDays: number
  options: object
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'name',
      'quantity',
      'currency_code',
      'unit_amount_cents',
      'unit_amount_float',
      'formatted_unit_amount',
      'total_amount_cents',
      'total_amount_float',
      'formatted_total_amount',
      'delay_hours',
      'delay_days',
      'options',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('lineItem', { className: 'LineItem' })
    this.hasOne('skuOption', { className: 'SkuOption' })
  }
}

const LineItemOption = library.createResource<LineItemOptionCollection>(
  LineItemOptionCollection
)

export default LineItemOption
