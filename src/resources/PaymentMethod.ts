import library from './library'
import BaseClass from '../utils/BaseClass'
import { MarketCollection } from './Market'

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
  metadata: object
  market: () => Promise<MarketCollection>
  paymentMethod: () => Promise<PaymentMethodCollection>
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
