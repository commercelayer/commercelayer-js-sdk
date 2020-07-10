import library from './library'
import BaseClass from '../utils/BaseClass'
import { CustomerCollection } from './Customer'
import { AdyenPaymentCollection } from './AdyenPayment'
import { BraintreePaymentCollection } from './BraintreePayment'
import { StripePaymentCollection } from './StripePayment'
import { PaypalPaymentCollection } from './PaypalPayment'

export class CustomerPaymentSourceCollection extends BaseClass {
  static className = 'CustomerPaymentSource'
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  customer: () => Promise<CustomerCollection>
  paymentSource: () => Promise<
    | AdyenPaymentCollection
    | BraintreePaymentCollection
    | PaypalPaymentCollection
    | StripePaymentCollection
  >
  static define() {
    this.attributes(
      'name',
      'id',
      'createdAt',
      'updatedAt',
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
  // @ts-ignore
  if (this.paymentSourceId) delete this.paymentSourceId
  // @ts-ignore
  if (this.paymentSourceType) delete this.paymentSourceType
})

export default CustomerPaymentSource
