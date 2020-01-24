import library from './library'

export class BraintreePaymentCollection extends library.Base {
  static className = 'BraintreePayment'
  client_token: string
  payment_method_nonce: string
  options: object
  id: string
  createdAt: Date
  updatedAt: Date
  metadata: object
  destroy: () => Promise<any>
  static define() {
    this.attributes(
      'client_token',
      'payment_method_nonce',
      'options',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('order', { className: 'Order' })
  }
}

const BraintreePayment = library.createResource<BraintreePaymentCollection>(
  BraintreePaymentCollection
)

export default BraintreePayment
