export default [
	{
		testName: 'Skus',
		belongsToClass: 'ShippingCategory',
		className: 'Sku',
		associations: [
			'prices',
			'stockItems',
			'deliveryLeadTimes',
			'skuOptions',
			'shippingCategory'
		],
		tests: [
			{
				type: 'toArray'
			},
			{
				type: 'size'
			},
			{
				type: 'associations'
			},
			{
				type: 'create',
				relationship: 'shippingCategory',
				data: {
					name: 'Black Men T-shirt with White Logo (UNIT-TEST)',
					code: 'TSHIRTMM000000FFFFFFXLUNITTEST'
				}
			},
			{
				type: 'update',
				data: {
					description: 'Unit test'
				}
			},
			{
				type: 'delete'
			}
		]
	},
	{
		testName: 'Orders',
		belongsToClass: 'Market',
		className: 'Order',
		associations: [
			'market',
			'customer',
			'shippingAddress',
			'billingAddress',
			'paymentSource',
			'availablePaymentMethods',
			'lineItems',
			'shipments'
		],
		tests: [
			{
				type: 'toArray'
			},
			{
				type: 'size'
			},
			{
				type: 'associations'
			},
			{
				type: 'create',
				relationship: 'market',
				data: {
					shipping_country_code_lock: 'US',
					language_code: 'en'
				}
			},
			{
				type: 'update',
				data: {
					reference: 'UnitTest'
				}
			},
			{
				type: 'delete'
			}
		]
	},
	{
		testName: 'Credit Cards',
		belongsToClass: 'Order',
		className: 'CreditCard',
		associations: ['order'],
		tests: [
			{
				type: 'toArray'
			},
			{
				type: 'size'
			},
			{
				type: 'associations'
			},
			{
				type: 'create',
				relationship: 'order',
				data: {
					first_name: 'John',
					last_name: 'Smith',
					number: '4111111111111111',
					month: '10',
					year: '2023',
					verification_value: '123'
				}
			},
			{
				type: 'update',
				data: {
					first_name: 'Alessandro'
				}
			}
		]
	},
	{
		testName: 'Customer Address',
		belongsToClass: ['Customer', 'Address'],
		className: 'CustomerAddress',
		associations: ['customer', 'address'],
		tests: [
			{
				type: 'toArray'
			},
			{
				type: 'size'
			},
			{
				type: 'associations'
			},
			{
				type: 'create',
				relationship: ['customer', 'address'],
				data: {}
			},
			{
				type: 'update',
				data: {
					reference: 'UNIT TEST REFERENCE'
				}
			},
			{
				type: 'delete'
			}
		]
	},
	{
		testName: 'Prices',
		className: 'Price',
		associations: ['priceList', 'sku'],
		tests: [
			{
				type: 'toArray'
			},
			{
				type: 'size'
			},
			{
				type: 'associations'
			}
		]
	}
]
