import library from './library'

class PaymentMethod extends library.Base {
  static define() {
    this.attributes('payment_source_type', 'name', 'disabled_at', 'price_amount_cents', 'price_amount_float', 'formatted_price_amount', 'id', 'created_at', 'updated_at', 'reference', 'metadata')

    this.hasOne('market', {className: 'Market'})
    this.hasOne('paymentGateway', {className: 'PaymentGateway'})
  }
}

export default library.createResource(PaymentMethod)
