import library from './library'
import BaseClass from '../utils/BaseClass'
import { StockLocationCollection } from './StockLocation'
import { ShippingMethodCollection } from './ShippingMethod'

export class DeliveryLeadTimeCollection extends BaseClass {
  static className = 'DeliveryLeadTime'
  minHours: number
  maxHours: number
  minDays: number
  maxDays: number
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  stockLocation: () => Promise<StockLocationCollection>
  shippingMethod: () => Promise<ShippingMethodCollection>
  static define() {
    this.attributes(
      'minHours',
      'maxHours',
      'minDays',
      'maxDays',
      'id',
      'createdAt',
      'updatedAt',
      'referenceOrigin',
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
