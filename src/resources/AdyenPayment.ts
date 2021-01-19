import library from './library'
import BaseClass from '#utils/BaseClass'
import { OrderCollection } from './Order'

export class AdyenPaymentCollection extends BaseClass {
  static className = 'AdyenPayment'
  paymentMethod: object
  paymentRequestData: object
  paymentRequestDetails: object
  paymentResponse: object
  Authorize: boolean
  _details: boolean
  id: string
  reference: string
  referenceOrigin: string
  createdAt: Date
  updatedAt: Date
  metadata: object
  order: () => OrderCollection
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
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('order', { className: 'Order' })
  }
}

const AdyenPayment = library.createResource<AdyenPaymentCollection>(
  AdyenPaymentCollection
)

export default AdyenPayment
