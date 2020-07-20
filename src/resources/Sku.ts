import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionProxy } from './@types/Library'
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
  referenceOrigin: string
  metadata: object
  shippingCategory: () => Promise<SkuCollection>
  prices: () => CollectionProxy<PriceCollection>
  stockItems: () => CollectionProxy<StockItemCollection>
  deliveryLeadTimes: () => CollectionProxy<DeliveryLeadTimeCollection>
  skuOptions: () => CollectionProxy<SkuOptionCollection>
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
      'referenceOrigin',
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
