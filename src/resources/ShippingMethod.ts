import library from './library'
import BaseClass from '../utils/BaseClass'

export class ShippingMethodCollection extends BaseClass {
  static className = 'ShippingMethod'
  name: string
  disabledAt: Date
  currencyCode: Date
  priceAmountCents: number
  priceAmountFloat: number
  formattedPriceAmount: string
  free_overAmountCents: number
  free_overAmountFloat: number
  formattedFree_overAmount: string
  priceAmountFor_shipmentCents: number
  priceAmountFor_shipmentFloat: number
  formattedPriceAmountFor_shipment: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object

  static define() {
    this.attributes(
      'name',
      'disabled_at',
      'currency_code',
      'price_amount_cents',
      'price_amount_float',
      'formatted_price_amount',
      'free_over_amount_cents',
      'free_over_amount_float',
      'formatted_free_over_amount',
      'price_amount_for_shipment_cents',
      'price_amount_for_shipment_float',
      'formatted_price_amount_for_shipment',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('market', { className: 'Market' })
    this.hasOne('shippingZone', { className: 'ShippingZone' })
    this.hasOne('shippingCategory', { className: 'ShippingCategory' })
    this.hasOne('deliveryLeadTimeForShipment', {
      className: 'DeliveryLeadTime'
    })
  }
}

const ShippingMethod = library.createResource<ShippingMethodCollection>(
  ShippingMethodCollection
)

export default ShippingMethod
