import library from './library'
import BaseClass from '#utils/BaseClass'
import { CustomerCollection } from './Customer'
import { SingleRelationship } from '#typings/Library'
import { PaymentSourceCollection } from './PaymentSource'

export class CustomerPaymentSourceCollection extends BaseClass {
  static className = 'CustomerPaymentSource'
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  paymentSourceId: string
  paymentSourceType: string
  customer: () => SingleRelationship<CustomerCollection>
  paymentSource: () => SingleRelationship<PaymentSourceCollection>
  static define() {
    this.attributes(
      'name',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
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
  // @ts-ignore
  if (this.paymentSourceId) delete this.paymentSourceId
  // @ts-ignore
  if (this.paymentSourceType) delete this.paymentSourceType
})

export default CustomerPaymentSource
