import library from './library'

class ShippingCategory extends library.Base {
	static define() {
		this.attributes(
			'name',
			'id',
			'created_at',
			'updated_at',
			'reference',
			'metadata'
		)

		this.hasMany('skus', { className: 'Sku' })
	}
}

export default library.createResource(ShippingCategory)
