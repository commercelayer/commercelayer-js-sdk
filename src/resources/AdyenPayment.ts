import library from './library'
import BaseClass from '../utils/BaseClass'

export class AdyenPaymentCollection extends BaseClass {
  static className = 'AdyenPayment'
  paymentMethod: object
  paymentRequestData: object
  paymentRequestDetails: object
  paymentResponse: object
  Authorize: boolean
  Details: boolean
  id: string
  createdAt: Date
  updatedAt: Date
  metadata: object
  destroy: () => Promise<any>
  static define() {
    this.attributes(
      'paymentMethod',
      'paymentRequestData',
      'paymentRequestDetails',
      'paymentResponse',
      'Authorize',
      'Details',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'metadata'
    )

    this.hasOne('order', { className: 'Order' })
  }
}

const AdyenPayment = library.createResource<AdyenPaymentCollection>(
  AdyenPaymentCollection
)

export default AdyenPayment
