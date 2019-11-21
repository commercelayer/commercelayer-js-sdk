import library from './library'

class DeliveryLeadTime extends library.Base {
  static define() {
    this.attributes(
      'min_hours',
      'max_hours',
      'min_days',
      'max_days',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('stockLocation', { className: 'StockLocation' })
    this.hasOne('shippingMethod', { className: 'ShippingMethod' })
  }
}

export default library.createResource(DeliveryLeadTime)
