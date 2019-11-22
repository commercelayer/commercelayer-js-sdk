import library from './library'

export class Market extends library.Base {
  number: number
  name: string
  facebookPixelId: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'number',
      'name',
      'facebook_pixel_id',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('merchant', { className: 'Merchant' })
    this.hasOne('priceList', { className: 'PriceList' })
    this.hasOne('inventoryModel', { className: 'InventoryModel' })

    this.hasMany('orders', { className: 'Order' })
  }
}

export default library.createResource<Market>(Market)
