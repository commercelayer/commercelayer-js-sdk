import CLayer from './src/resources'
import { getToken } from './helpers'
import * as _ from 'lodash'

const host = 'the-blue-brand-2.commercelayer.co'

async function f() {
	const { data: { access_token: token } } = await getToken()

	// Init commercelayer
	CLayer.init(token, host)

	const customer = await CLayer.Customer.first()
	const address = await CLayer.Address.first()

	const attr = {
		customer,
		address
	}

	const creditCard = await CLayer.CreditCard
		.select('first_name', 'last_name', 'id')
		.first(5)
	// const customerAddress = await CLayer.CustomerAddress.create(attr)

	// const newCreditCard = await CLayer.CreditCard.create(attrCreditCard)

	console.log('vars :', creditCard, customer, address)
}

f()
