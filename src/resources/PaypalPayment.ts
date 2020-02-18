import library from './library'
import BaseClass from '../utils/BaseClass'

export class PaypalPaymentCollection extends BaseClass {
  static className = 'PaypalPayment'
  returnUrl: string
  cancelUrl: string
  noteToPayer: string
  paypalPayerId: string
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
      'returnUrl',
      'cancelUrl',
      'noteToPayer',
      'paypalPayerId',
      'name',
      'paypalId',
      'status',
      'approvalUrl',
      'id',
      'createdAt',
      'updatedAt',
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
