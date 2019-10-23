import library from './library'

class PaymentSource extends library.Base {
	static define() {}
}

export default library.createResource(PaymentSource)
