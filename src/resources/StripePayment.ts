import library from './library'

export class StripePaymentCollection extends library.Base {
  static className = 'StripePayment'
  client_secret: string
  options: object
  id: string
  createdAt: Date
  updatedAt: Date
  metadata: object
  destroy: () => Promise<any>
  static define() {
    this.attributes(
      'client_secret',
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

const StripePayment = library.createResource<StripePaymentCollection>(
  StripePaymentCollection
)

export default StripePayment
