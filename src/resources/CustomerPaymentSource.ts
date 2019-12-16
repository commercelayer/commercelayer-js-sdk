import library from './library'

export class CustomerPaymentSourceCollection extends library.Base {
  static className = 'CustomerPaymentSource'
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'name',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('customer', { className: 'Customer' })
    this.hasOne('paymentSource', {
      className: 'PaymentSource',
      polymorphic: true
    })
  }
}

const CustomerPaymentSource = library.createResource<
  CustomerPaymentSourceCollection
>(CustomerPaymentSourceCollection)

export default CustomerPaymentSource
