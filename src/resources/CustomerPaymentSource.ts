import library from './library'

class CustomerPaymentSource extends library.Base {
	static define() {
		this.attributes(
			'name',
			'id',
			'created_at',
			'updated_at',
			'reference',
			'metadata'
		)

		this.hasOne('customer', { className: 'Customer' })
		this.hasOne('paymentSource', {
			className: 'PaymentSource',
			polymorphic: true
		})
	}
}

export default library.createResource(CustomerPaymentSource)
