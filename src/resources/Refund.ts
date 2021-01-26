import library from './library'
import BaseClass from '#utils/BaseClass'
import { SingleRelationship } from '#typings/Library'
import { OrderCollection } from './Order'
import { CaptureCollection } from './Capture'

export class RefundCollection extends BaseClass {
  static className = 'Refund'
  number: string
  currencyCode: string
  amountCents: number
  amountFloat: number
  formattedAmount: string
  succeeded: boolean
  message: string
  errorCode: string
  errorDetail: string
  token: string
  gatewayTransactionId: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  order: () => SingleRelationship<OrderCollection>
  referenceCapture: () => SingleRelationship<CaptureCollection>
  static define() {
    this.attributes(
      'number',
      'currencyCode',
      'amountCents',
      'amountFloat',
      'formattedAmount',
      'succeeded',
      'message',
      'errorCode',
      'errorDetail',
      'token',
      'gatewayTransactionId',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('order', { className: 'Order' })
    this.hasOne('referenceCapture', { className: 'Capture' })
  }
}

const Refund = library.createResource<RefundCollection>(RefundCollection)

export default Refund
