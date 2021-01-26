import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { CustomerGroupCollection } from './CustomerGroup'
import { PriceListCollection } from './PriceList'
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
  customerGroup: () => MultiRelationship<CustomerGroupCollection>
  priceList: () => MultiRelationship<PriceListCollection>
  inventoryModel: () => MultiRelationship<InventoryModelCollection>
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
    this.hasMany('customerGroup', { className: 'CustomerGroup' })
  }
}

const Market = library.createResource<MarketCollection>(MarketCollection)

export default Market
