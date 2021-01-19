import library from './library'
import BaseClass from '#utils/BaseClass'
import { CollectionProxy } from '#typings/Library'
import { ShippingMethodCollection } from './ShippingMethod'
import { ParcelCollection } from './Parcel'
import { AttachmentCollection } from './Attachment'
import { ShippingCategoryCollection } from './ShippingCategory'
import { StockLocationCollection } from './StockLocation'
import { AddressCollection } from './Address'

export class ShipmentCollection extends BaseClass {
  static className = 'Shipment'
  number: string
  status: string
  currencyCode: string
  costAmountCents: number
  costAmountFloat: number
  formattedCostAmount: string
  _onHold: number
  _picking: number
  _packing: number
  _readyToShip: number
  _ship: number
  _getRates: number
  selectedRateId: string
  _purchase: number
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  shippingCategory: () => Promise<ShippingCategoryCollection>
  stockLocation: () => Promise<StockLocationCollection>
  shippingAddress: () => Promise<AddressCollection>
  shippingMethod: () => Promise<ShippingMethodCollection>
  shipmentLineItems: () => CollectionProxy<any>
  availableShippingMethods: () => CollectionProxy<ShippingMethodCollection>
  parcels: () => CollectionProxy<ParcelCollection>
  attachments: () => CollectionProxy<AttachmentCollection>
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

    this.hasMany('shipmentLineItems', { className: 'LineItem' })
    this.hasMany('availableShippingMethods', { className: 'ShippingMethod' })
    this.hasMany('parcels', { className: 'Parcel' })
    this.hasMany('attachments', { className: 'Attachment' })
  }
}

const Shipment = library.createResource<ShipmentCollection>(ShipmentCollection)

export default Shipment
