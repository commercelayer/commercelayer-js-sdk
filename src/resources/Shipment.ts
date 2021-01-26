import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship, SingleRelationship } from '#typings/Library'
import { ShippingMethodCollection } from './ShippingMethod'
import { ParcelCollection } from './Parcel'
import { AttachmentCollection } from './Attachment'
import { ShippingCategoryCollection } from './ShippingCategory'
import { StockLocationCollection } from './StockLocation'
import { AddressCollection } from './Address'
import { ShipmentLineItemCollection } from './ShipmentLineItem'

export class ShipmentCollection extends BaseClass {
  static className = 'Shipment'
  _getRates: number
  _onHold: number
  _packing: number
  _picking: number
  _purchase: number
  _readyToShip: number
  _ship: number
  costAmountCents: number
  costAmountFloat: number
  createdAt: Date
  currencyCode: string
  formattedCostAmount: string
  id: string
  metadata: object
  number: string
  reference: string
  referenceOrigin: string
  selectedRateId: string
  status: string
  updatedAt: Date
  shippingCategory: () => SingleRelationship<ShippingCategoryCollection>
  stockLocation: () => SingleRelationship<StockLocationCollection>
  shippingAddress: () => SingleRelationship<AddressCollection>
  shippingMethod: () => SingleRelationship<ShippingMethodCollection>
  shipmentLineItems: () => MultiRelationship<ShipmentLineItemCollection>
  availableShippingMethods: () => MultiRelationship<ShippingMethodCollection>
  parcels: () => MultiRelationship<ParcelCollection>
  attachments: () => MultiRelationship<AttachmentCollection>
  static define() {
    this.attributes(
      'number',
      'status',
      'currencyCode',
      'costAmountCents',
      'costAmountFloat',
      'formattedCostAmount',
      '_onHold',
      '_picking',
      '_packing',
      '_readyToShip',
      '_ship',
      '_getRates',
      'selectedRateId',
      '_purchase',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
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
