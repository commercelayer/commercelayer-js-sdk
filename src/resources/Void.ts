import library from './library'
import BaseClass from '../utils/BaseClass'

export class VoidCollection extends BaseClass {
  static className = 'Void'
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
    this.hasOne('referenceAuthorization', { className: 'Authorization' })
  }
}

const Void = library.createResource<VoidCollection>(VoidCollection)

export default Void
