import library from './library'

export class PaymentMethodCollection extends library.Base {
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
  static define() {
    this.attributes(
      'payment_source_type',
      'name',
      'disabled_at',
      'price_amount_cents',
      'price_amount_float',
      'formatted_price_amount',
      'id',
      'created_at',
      'updated_at',
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
