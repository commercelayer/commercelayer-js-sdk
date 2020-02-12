import library from './library'
import BaseClass from '../utils/BaseClass'

export class AdyenPaymentCollection extends BaseClass {
  static className = 'AdyenPayment'
  payment_method: object
  payment_request_data: object
  payment_request_details: object
  payment_response: object
  _authorize: boolean
  _details: boolean
  id: string
  createdAt: Date
  updatedAt: Date
  metadata: object
  destroy: () => Promise<any>
  static define() {
    this.attributes(
      'payment_method',
      'payment_request_data',
      'payment_request_details',
      'payment_response',
      '_authorize',
      '_details',
      'id',
      'created_at',
      'updated_at',
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
