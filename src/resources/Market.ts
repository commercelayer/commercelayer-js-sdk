import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionProxy } from './typings/Library'
import { OrderCollection } from './Order'
import { PriceCollection } from './Price'
import { InventoryModelCollection } from './InventoryModel'

export class MarketCollection extends BaseClass {
  static className = 'Market'
  number: number
  name: string
  facebookPixelId: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  orders: () => CollectionProxy<OrderCollection>
  priceList: () => CollectionProxy<PriceCollection>
  inventoryModel: () => CollectionProxy<InventoryModelCollection>
  static define() {
    this.attributes(
      'number',
      'name',
      'facebookPixelId',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
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
