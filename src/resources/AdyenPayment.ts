import library from './library'
import BaseClass from '../utils/BaseClass'

export class AdyenPaymentCollection extends BaseClass {
  static className = 'AdyenPayment'
  paymentMethod: object
  paymentRequestData: object
  paymentRequestDetails: object
  paymentResponse: object
  _authorize: boolean
  _details: boolean
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
      '_authorize',
      '_details',
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
