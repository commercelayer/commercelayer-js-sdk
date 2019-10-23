import library from './library'

class Sku extends library.Base {
	static define() {
		this.attributes(
			'code',
			'name',
			'description',
			'image_url',
			'tag_names',
			'pieces_per_pack',
			'weight',
			'unit_of_weight',
			'inventory',
			'id',
			'created_at',
			'updated_at',
			'reference',
			'metadata'
		)

		this.hasOne('shippingCategory', { className: 'ShippingCategory' })

		this.hasMany('prices', { className: 'Price' })
		this.hasMany('stockItems', { className: 'StockItem' })
		this.hasMany('deliveryLeadTimes', { className: 'DeliveryLeadTime' })
		this.hasMany('skuOptions', { className: 'SkuOption' })
	}
}

export default library.createResource(Sku)
