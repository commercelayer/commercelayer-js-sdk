import library from './library'

class PaypalPayment extends library.Base {
  static define() {
    this.attributes('return_url', 'cancel_url', 'note_to_payer', 'paypal_payer_id', 'name', 'paypal_id', 'status', 'approval_url', 'id', 'created_at', 'updated_at', 'reference', 'metadata')

    this.hasOne('order', {className: 'Order'})
  }
}

export default library.createResource(PaypalPayment)
