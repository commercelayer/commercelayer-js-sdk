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
import { StockTransferCollection } from './StockTransfer'

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
  attachments: () => MultiRelationship<AttachmentCollection>
  availableShippingMethods: () => MultiRelationship<ShippingMethodCollection>
  parcels: () => MultiRelationship<ParcelCollection>
  shipmentLineItems: () => MultiRelationship<ShipmentLineItemCollection>
  shippingAddress: () => SingleRelationship<AddressCollection>
  shippingCategory: () => SingleRelationship<ShippingCategoryCollection>
  shippingMethod: () => SingleRelationship<ShippingMethodCollection>
  stockLocation: () => SingleRelationship<StockLocationCollection>
  stockTransfers: () => MultiRelationship<StockTransferCollection>
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
    this.hasOne('deliveryLeadTime', { className: 'DeliveryLeadTime' })

    this.hasMany('shipmentLineItems', { className: 'ShipmentLineItem' })
    this.hasMany('availableShippingMethods', { className: 'ShippingMethod' })
    this.hasMany('parcels', { className: 'Parcel' })
    this.hasMany('attachments', { className: 'Attachment' })
    this.hasMany('stockTransfers', { className: 'StockTransfer' })
  }
}

const Shipment = library.createResource<ShipmentCollection>(ShipmentCollection)

export default Shipment
