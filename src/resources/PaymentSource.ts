import library from './library'

export class PaymentSourceCollection extends library.Base {
  static className = 'PaymentSource'
  static define() {}
}

const PaymentSource = library.createResource<PaymentSourceCollection>(
  PaymentSourceCollection
)

export default PaymentSource
