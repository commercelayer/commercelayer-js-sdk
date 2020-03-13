import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionResponse, CollectionProxy } from './@types/Library'
import { PriceCollection } from './Price'
import { SkuOptionCollection } from './SkuOption'
import { DeliveryLeadTimeCollection } from './DeliveryLeadTime'
import { StockItemCollection } from './StockItem'

export interface InventoryCollection {
  available: boolean
  quantity: number
  levels: {
    quantity: number
    deliveryLeadTimes: {
      shippingMethod: {
        name: string
        reference: null | string
        priceAmountCents: number
        freeOverAmountCents: number
        formattedPriceAmount: string
        formattedFreeOverAmount: string
      }
      min: {
        hours: number
        days: number
      }
      max: {
        hours: number
        days: number
      }
    }[]
  }[]
}

export class SkuCollection extends BaseClass {
  static className = 'Sku'
  prices: () => CollectionProxy<PriceCollection>
  stockItems: () => CollectionProxy<StockItemCollection>
  deliveryLeadTimes: () => CollectionProxy<DeliveryLeadTimeCollection>
  skuOptions: () => CollectionProxy<SkuOptionCollection>
  code: string
  name: string
  description: string
  imageUrl: string
  tagNames: string
  piecesPerPack: number
  weight: number
  unitOfWeight: string
  inventory: InventoryCollection
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'code',
      'name',
      'description',
      'imageUrl',
      'tagNames',
      'piecesPerPack',
      'weight',
      'unitOfWeight',
      'inventory',
      'id',
      'createdAt',
      'updatedAt',
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

const Sku = library.createResource<SkuCollection>(SkuCollection)
export default Sku
