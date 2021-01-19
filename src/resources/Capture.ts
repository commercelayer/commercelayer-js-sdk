import library from './library'
import BaseClass from '#utils/BaseClass'

export class CaptureCollection extends BaseClass {
  static className = 'Capture'
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
  _refund: boolean
  _refundAmountCents: number
  refundAmountCents: number
  refundAmountFloat: number
  formattedRefundAmount: string
  refundBalanceCents: number
  refundBalanceFloat: number
  formattedRefundBalance: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
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
      '_refund',
      '_refundAmountCents',
      'refundAmountCents',
      'refundAmountFloat',
      'formattedRefundAmount',
      'refundBalanceCents',
      'refundBalanceFloat',
      'formattedRefundBalance',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('order', { className: 'Order' })
    this.hasOne('referenceAuthorization', { className: 'Authorization' })
    this.hasMany('refunds', { className: 'Refund' })
  }
}

const Capture = library.createResource<CaptureCollection>(CaptureCollection)

export default Capture
