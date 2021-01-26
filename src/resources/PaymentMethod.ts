import library from './library'
import BaseClass from '#utils/BaseClass'
import { MarketCollection } from './Market'
import { SingleRelationship } from '#typings/Library'

export class PaymentMethodCollection extends BaseClass {
  static className = 'PaymentMethod'
  paymentSourceType: string
  name: string
  disabledAt: Date
  priceAmountCents: number
  priceAmountFloat: number
  formattedPriceAmount: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  market: () => SingleRelationship<MarketCollection>
  paymentMethod: () => SingleRelationship<PaymentMethodCollection>
  static define() {
    this.attributes(
      'paymentSourceType',
      'name',
      'disabledAt',
      'priceAmountCents',
      'priceAmountFloat',
      'formattedPriceAmount',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('market', { className: 'Market' })
    this.hasOne('paymentGateway', { className: 'PaymentGateway' })
  }
}

const PaymentMethod = library.createResource<PaymentMethodCollection>(
  PaymentMethodCollection
)

export default PaymentMethod
