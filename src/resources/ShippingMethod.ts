import library from './library'

class ShippingMethod extends library.Base {
  static define() {
    this.attributes('name', 'disabled_at', 'currency_code', 'price_amount_cents', 'price_amount_float', 'formatted_price_amount', 'free_over_amount_cents', 'free_over_amount_float', 'formatted_free_over_amount', 'price_amount_for_shipment_cents', 'price_amount_for_shipment_float', 'formatted_price_amount_for_shipment', 'id', 'created_at', 'updated_at', 'reference', 'metadata')

    this.hasOne('market', {className: 'Market'})
    this.hasOne('shippingZone', {className: 'ShippingZone'})
    this.hasOne('shippingCategory', {className: 'ShippingCategory'})
    this.hasOne('deliveryLeadTimeForShipment', {className: 'DeliveryLeadTime'})
  }
}

export default library.createResource(ShippingMethod)
