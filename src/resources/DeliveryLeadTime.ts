import library from './library'

export class DeliveryLeadTimeCollection extends library.Base {
  static className = 'DeliveryLeadTime'
  minHours: number
  maxHours: number
  minDays: number
  maxDays: number
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
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

const DeliveryLeadTime = library.createResource<DeliveryLeadTimeCollection>(
  DeliveryLeadTimeCollection
)

export default DeliveryLeadTime
