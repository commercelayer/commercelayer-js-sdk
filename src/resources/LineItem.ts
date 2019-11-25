import library from './library'

export class LineItem extends library.Base {
  destroy: () => Promise<any>
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

export default library.createResource<LineItem>(LineItem)
