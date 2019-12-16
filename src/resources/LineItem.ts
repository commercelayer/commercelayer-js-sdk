import library from './library'
import { CollectionResponse } from './@types/Library'
import { LineItemOptionCollection } from './LineItemOption'

export class LineItemCollection extends library.Base {
  static className = 'LineItem'
  quantity: number
  itemType: string
  imageUrl: string
  id: string
  formattedUnitAmount: string
  formattedTotalAmount: string
  reference: string
  skuCode: string
  _updateQuantity: string
  currencyCode: string
  unitAmountCents: number
  unitAmountFloat: number
  optionsAmountCents: number
  optionsAmountFloat: number
  formattedOptionsAmount: string
  totalAmountCents: number
  totalAmountFloat: number
  name: string
  taxRate: number
  taxBreakdown: object
  createdAt: Date
  updatedAt: Date
  metadata: object
  destroy: () => Promise<any>
  lineItemOptions: () => CollectionResponse<LineItemOptionCollection>
  static define() {
    this.attributes(
      'sku_code',
      'quantity',
      '_update_quantity',
      'currency_code',
      'unit_amount_cents',
      'unit_amount_float',
      'formatted_unit_amount',
      'options_amount_cents',
      'options_amount_float',
      'formatted_options_amount',
      'total_amount_cents',
      'total_amount_float',
      'formatted_total_amount',
      'name',
      'image_url',
      'tax_rate',
      'tax_breakdown',
      'item_type',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('order', { className: 'Order' })
    this.hasOne('item', { className: 'Item' })

    this.hasMany('lineItemOptions', { className: 'LineItemOption' })
  }
}

const LineItem = library.createResource<LineItemCollection>(LineItemCollection)

export default LineItem
