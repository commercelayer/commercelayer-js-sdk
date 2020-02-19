import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionResponse } from './@types/Library'
import { ShippingMethodCollection } from './ShippingMethod'
import { ParcelCollection } from './Parcel'
import { AttachmentCollection } from './Attachment'

export class ShipmentCollection extends BaseClass {
  static className = 'Shipment'
  number: string
  status: string
  currencyCode: string
  costAmountCents: number
  costAmountFloat: number
  formattedCostAmount: string
  OnHold: number
  Picking: number
  Packing: number
  ReadyToShip: number
  Ship: number
  GetRates: number
  selectedRateId: string
  Purchase: number
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  shipmentLineItems: () => CollectionResponse<any>
  availableShippingMethods: () => CollectionResponse<ShippingMethodCollection>
  parcels: () => CollectionResponse<ParcelCollection>
  attachments: () => CollectionResponse<AttachmentCollection>
  static define() {
    this.attributes(
      'number',
      'status',
      'currencyCode',
      'costAmountCents',
      'costAmount_float',
      'formattedCostAmount',
      'OnHold',
      'Picking',
      'Packing',
      'ReadyToShip',
      'Ship',
      'GetRates',
      'selectedRateId',
      'Purchase',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'metadata'
    )

    this.hasOne('shippingCategory', { className: 'ShippingCategory' })
    this.hasOne('stockLocation', { className: 'StockLocation' })
    this.hasOne('shippingAddress', { className: 'Address' })
    this.hasOne('shippingMethod', { className: 'ShippingMethod' })

    this.hasMany('shipmentLineItems', { className: 'ShipmentLineItem' })
    this.hasMany('availableShippingMethods', { className: 'ShippingMethod' })
    this.hasMany('parcels', { className: 'Parcel' })
    this.hasMany('attachments', { className: 'Attachment' })
  }
}

const Shipment = library.createResource<ShipmentCollection>(ShipmentCollection)

export default Shipment
