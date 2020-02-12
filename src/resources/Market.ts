import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionResponse } from './@types/Library'
import { OrderCollection } from './Order'

export class MarketCollection extends BaseClass {
  static className = 'Market'
  number: number
  name: string
  facebookPixelId: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  orders: () => CollectionResponse<OrderCollection>
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

const Market = library.createResource<MarketCollection>(MarketCollection)

export default Market
