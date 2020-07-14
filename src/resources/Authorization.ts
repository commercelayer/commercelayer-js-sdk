import library from './library'
import BaseClass from '../utils/BaseClass'

export class AuthorizationCollection extends BaseClass {
  static className = 'Authorization'
  number: string
  currencyCode: string
  amountCents: number
  amountFloat: number
  formattedAmount: string
  succeeded: boolean
  message: string
  errorCode: string
  errorDetail: string
  cvvCode: string
  cvvMessage: string
  avsCode: string
  avsMessage: string
  fraudReview: string
  gatewayTransactionId: string
  _capture: boolean
  _captureAmountCents: number
  captureAmountCents: number
  captureAmountFloat: number
  formattedCaptureAmount: string
  captureBalanceCents: number
  captureBalanceFloat: number
  formattedCaptureBalance: string
  _void: boolean
  voidBalanceCents: number
  voidBalanceFloat: number
  formattedVoidBalance: string
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
      'cvvCode',
      'cvvMessage',
      'avsCode',
      'avsMessage',
      'fraudReview',
      'gatewayTransactionId',
      '_capture',
      '_captureAmountCents',
      'captureAmountCents',
      'captureAmountFloat',
      'formattedCaptureAmount',
      'captureBalanceCents',
      'captureBalanceFloat',
      'formattedCaptureBalance',
      '_void',
      'voidBalanceCents',
      'voidBalanceFloat',
      'formattedVoidBalance',
      'name',
      'currencyCode',
      'amountCents',
      'amountFloat',
      'formattedAmount',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('order', { className: 'Order' })
    this.hasMany('captures', { className: 'Capture' })
    this.hasMany('voids', { className: 'Void' })
  }
}

const Authorization = library.createResource<AuthorizationCollection>(
  AuthorizationCollection
)

export default Authorization
