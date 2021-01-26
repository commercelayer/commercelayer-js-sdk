import library from './library'
import BaseClass from '#utils/BaseClass'
import { MarketCollection } from './Market'
import { ShippingZoneCollection } from './ShippingZone'
import { ShippingCategoryCollection } from './ShippingCategory'
import { DeliveryLeadTimeCollection } from './DeliveryLeadTime'
import { SingleRelationship } from '#typings/Library'

export class ShippingMethodCollection extends BaseClass {
  static className = 'ShippingMethod'
  name: string
  disabledAt: Date
  currencyCode: Date
  priceAmountCents: number
  priceAmountFloat: number
  formattedPriceAmount: string
  freeOverAmountCents: number
  freeOverAmountFloat: number
  formattedFreeOverAmount: string
  priceAmountForShipmentCents: number
  priceAmountForShipmentFloat: number
  formattedPriceAmountForShipment: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  market: () => SingleRelationship<MarketCollection>
  shippingZone: () => SingleRelationship<ShippingZoneCollection>
  shippingCategory: () => SingleRelationship<ShippingCategoryCollection>
  deliveryLeadTime: () => SingleRelationship<DeliveryLeadTimeCollection>
  static define() {
    this.attributes(
      'name',
      'disabledAt',
      'currencyCode',
      'priceAmountCents',
      'priceAmountFloat',
      'formattedPriceAmount',
      'freeOverAmountCents',
      'freeOverAmountFloat',
      'formattedFreeOverAmount',
      'priceAmountForShipmentCents',
      'priceAmountForShipmentFloat',
      'formattedPriceAmountForShipment',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('market', { className: 'Market' })
    this.hasOne('shippingZone', { className: 'ShippingZone' })
    this.hasOne('shippingCategory', { className: 'ShippingCategory' })
    this.hasOne('deliveryLeadTimeForShipment', {
      className: 'DeliveryLeadTime',
    })
  }
}

const ShippingMethod = library.createResource<ShippingMethodCollection>(
  ShippingMethodCollection
)

export default ShippingMethod
