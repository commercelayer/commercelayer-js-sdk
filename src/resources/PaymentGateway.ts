import library from './library'

export class PaymentGatewayCollection extends library.Base {
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
