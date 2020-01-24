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
    this.belongsTo('paymentSource', { polymorphic: true })
  }
}

const CustomerPaymentSource = library.createResource<
  CustomerPaymentSourceCollection
>(CustomerPaymentSourceCollection)

CustomerPaymentSource.afterBuild(function() {
  if (this.paymentSourceId) delete this.paymentSourceId
  if (this.paymentSourceType) delete this.paymentSourceType
})

export default CustomerPaymentSource
