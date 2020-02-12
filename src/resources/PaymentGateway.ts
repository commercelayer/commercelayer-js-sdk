import library from './library'
import BaseClass from '../utils/BaseClass'

export class PaymentGatewayCollection extends BaseClass {
  static className = 'PaymentGateway'
  id: string
  static define() {
    this.attributes('id')
  }
}

const PaymentGateway = library.createResource<PaymentGatewayCollection>(
  PaymentGatewayCollection
)

export default PaymentGateway
