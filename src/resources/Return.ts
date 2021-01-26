import library from './library'
import BaseClass from '#utils/BaseClass'
import { OrderCollection } from './Order'
import { CustomerCollection } from './Customer'
import { InventoryReturnLocationCollection } from './InventoryReturnLocation'
import { StockLocationCollection } from './StockLocation'
import { AddressCollection } from './Address'
import { MultiRelationship, SingleRelationship } from '#typings/Library'
import { ReturnLineItemCollection } from './ReturnLineItem'
import { AttachmentCollection } from './Attachment'

export class ReturnCollection extends BaseClass {
  static className = 'Return'
  number: string
  status:
    | string
    | 'draft'
    | 'pending'
    | 'approved'
    | 'rejected'
    | 'shipped'
    | 'received'
  customerEmail: string
  skusCount: number
  approvedAt: Date
  rejectedAt: Date
  shippedAt: Date
  receivedAt: Date
  archivedAt: Date
  _request: boolean
  _approve: boolean
  _reject: boolean
  _ship: boolean
  _receive: boolean
  _restock: boolean
  _archive: boolean
  _unarchive: boolean
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  order: () => SingleRelationship<OrderCollection>
  customer: () => SingleRelationship<CustomerCollection>
  inventoryReturnLocation: () => SingleRelationship<
    InventoryReturnLocationCollection
  >
  stockLocation: () => SingleRelationship<StockLocationCollection>
  originAddress: () => SingleRelationship<AddressCollection>
  destinationAddress: () => SingleRelationship<AddressCollection>
  returnLineItems: () => MultiRelationship<ReturnLineItemCollection>
  attachments: () => MultiRelationship<AttachmentCollection>
  static define() {
    this.attributes(
      'number',
      'customerEmail',
      'status',
      'skusCount',
      'approvedAt',
      'rejectedAt',
      'shippedAt',
      'receivedAt',
      'archivedAt',
      '_request',
      '_approve',
      '_reject',
      '_ship',
      '_receive',
      '_restock',
      '_archive',
      '_unarchive',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )
    this.hasOne('order', { className: 'Order' })
    this.hasOne('customer', { className: 'Customer' })
    this.hasOne('inventoryReturnLocation', {
      className: 'InventoryReturnLocation',
    })
    this.hasOne('stockLocation', { className: 'StockLocation' })
    this.hasOne('originAddress', { className: 'Address' })
    this.hasOne('destinationAddress', { className: 'Address' })
    this.hasMany('returnLineItems', { className: 'ReturnLineItem' })
    this.hasMany('attachments', { className: 'Attachment' })
  }
}

const InventoryModel = library.createResource<ReturnCollection>(
  ReturnCollection
)

export default InventoryModel
