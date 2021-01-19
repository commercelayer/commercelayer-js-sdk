import library from './library'
import BaseClass from '#utils/BaseClass'

export class PaymentSourceCollection extends BaseClass {
  static className = 'PaymentSource'
  static define() {}
}

const PaymentSource = library.createResource<PaymentSourceCollection>(
  PaymentSourceCollection
)

export default PaymentSource
