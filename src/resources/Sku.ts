import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionResponse } from './@types/Library'
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
        price_amount_cents: number
        free_over_amount_cents: number
        formatted_price_amount: string
        formatted_free_over_amount: string
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
  prices: () => CollectionResponse<PriceCollection>
  stockItems: () => CollectionResponse<StockItemCollection>
  deliveryLeadTimes: () => CollectionResponse<DeliveryLeadTimeCollection>
  skuOptions: () => CollectionResponse<SkuOptionCollection>
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

const Sku = library.createResource<SkuCollection>(SkuCollection)
export default Sku
