import library from './library'

class LineItemOption extends library.Base {
  static define() {
    this.attributes('name', 'quantity', 'currency_code', 'unit_amount_cents', 'unit_amount_float', 'formatted_unit_amount', 'total_amount_cents', 'total_amount_float', 'formatted_total_amount', 'delay_hours', 'delay_days', 'options', 'id', 'created_at', 'updated_at', 'reference', 'metadata')

    this.hasOne('lineItem', {className: 'LineItem'})
    this.hasOne('skuOption', {className: 'SkuOption'})
  }
}

export default library.createResource(LineItemOption)
