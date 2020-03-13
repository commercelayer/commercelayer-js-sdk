import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionProxy } from './@types/Library'
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
  orders: () => CollectionProxy<OrderCollection>
  static define() {
    this.attributes(
      'number',
      'name',
      'facebookPixelId',
      'id',
      'createdAt',
      'updatedAt',
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
