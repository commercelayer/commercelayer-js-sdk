import library from './library'
import { CollectionResponse } from '../@types/Library'
import { Price } from './Price'

export interface Inventory {
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

export class Sku extends library.Base {
  prices: () => CollectionResponse<Price>
  code: string
  name: string
  description: string
  imageUrl: string
  tagNames: string
  piecesPerPack: number
  weight: number
  unitOfWeight: string
  inventory: Inventory
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

export default library.createResource<Sku>(Sku)
