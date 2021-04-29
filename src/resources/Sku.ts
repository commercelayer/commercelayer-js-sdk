import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship, SingleRelationship } from '#typings/Library'
import { PriceCollection } from './Price'
import { SkuOptionCollection } from './SkuOption'
import { DeliveryLeadTimeCollection } from './DeliveryLeadTime'
import { StockItemCollection } from './StockItem'
import { ShippingCategoryCollection } from './ShippingCategory'
import { AttachableCollection } from './Attachable'

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
  createdAt: Date
  description: string
  doNotShip: string
  doNotTrack: string
  hsTariffNumber: string
  id: string
  imageUrl: string
  inventory: InventoryCollection
  metadata: object
  name: string
  piecesPerPack: number
  reference: string
  referenceOrigin: string
  unitOfWeight: string
  updatedAt: Date
  weight: number
  shippingCategory: () => SingleRelationship<ShippingCategoryCollection>
  loadShippingCategory: () => SingleRelationship<ShippingCategoryCollection>
  prices: () => MultiRelationship<PriceCollection>
  loadPrices: () => MultiRelationship<PriceCollection>
  stockItems: () => MultiRelationship<StockItemCollection>
  loadStockItems: () => MultiRelationship<StockItemCollection>
  deliveryLeadTimes: () => MultiRelationship<DeliveryLeadTimeCollection>
  loadDeliveryLeadTimes: () => MultiRelationship<DeliveryLeadTimeCollection>
  skuOptions: () => MultiRelationship<SkuOptionCollection>
  loadSkuOptions: () => MultiRelationship<SkuOptionCollection>
  attachments: () => MultiRelationship<AttachableCollection>
  loadAttachments: () => MultiRelationship<AttachableCollection>
  static define() {
    this.attributes(
      'code',
      'createdAt',
      'description',
      'doNotShip',
      'doNotTrack',
      'hsTariffNumber',
      'id',
      'imageUrl',
      'inventory',
      'metadata',
      'name',
      'piecesPerPack',
      'reference',
      'referenceOrigin',
      'unitOfWeight',
      'updatedAt',
      'weight'
    )
    this.hasOne('shippingCategory', { className: 'ShippingCategory' })
    this.hasMany('prices', { className: 'Price' })
    this.hasMany('stockItems', { className: 'StockItem' })
    this.hasMany('deliveryLeadTimes', { className: 'DeliveryLeadTime' })
    this.hasMany('skuOptions', { className: 'SkuOption' })
    this.hasMany('attachments', {
      className: 'Attachment',
    })
  }
}

const Sku = library.createResource<SkuCollection>(SkuCollection)
export default Sku
