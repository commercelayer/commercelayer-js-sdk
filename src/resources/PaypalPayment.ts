import library from './library'

export class PaypalPaymentCollection extends library.Base {
  static className = 'PaypalPayment'
  returnUrl: string
  cancelUrl: string
  noteToPayer: string
  paypalPayer_id: string
  name: string
  paypalId: string
  status: string
  approvalUrl: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'return_url',
      'cancel_url',
      'note_to_payer',
      'paypal_payer_id',
      'name',
      'paypal_id',
      'status',
      'approval_url',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('order', { className: 'Order' })
  }
}

const PaypalPayment = library.createResource<PaypalPaymentCollection>(
  PaypalPaymentCollection
)

export default PaypalPayment
