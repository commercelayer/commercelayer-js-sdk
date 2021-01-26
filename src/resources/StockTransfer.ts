import library from './library'
import BaseClass from '#utils/BaseClass'
import { StockLocationCollection } from './StockLocation'
import { SkuCollection } from './Sku'
import { SingleRelationship } from '#typings/Library'
import { ShipmentCollection } from './Shipment'
import { LineItemCollection } from './LineItem'

export class StockTransferCollection extends BaseClass {
  static className = 'StockTransfer'
  _cancel: boolean
  _complete: boolean
  _inTransit: boolean
  _picking: boolean
  _upcoming: boolean
  cancelledAt: Date
  completedAt: Date
  createdAt: Date
  id: string
  metadata: object
  quantity: number
  reference: string
  referenceOrigin: string
  skuCode: string
  status: string
  updatedAt: Date
  originStockLocation: () =>
    | Promise<SingleRelationship<StockLocationCollection>>
    | SingleRelationship<StockLocationCollection>
    | null
  destinationStockLocation: () =>
    | Promise<SingleRelationship<StockLocationCollection>>
    | SingleRelationship<StockLocationCollection>
    | null
  lineItem: () =>
    | Promise<SingleRelationship<LineItemCollection>>
    | SingleRelationship<LineItemCollection>
    | null
  sku: () =>
    | Promise<SingleRelationship<SkuCollection>>
    | SingleRelationship<SkuCollection>
    | null
  shipment: () =>
    | Promise<SingleRelationship<ShipmentCollection>>
    | SingleRelationship<ShipmentCollection>
    | null
  static define() {
    this.attributes(
      '_cancel',
      '_complete',
      '_inTransit',
      '_picking',
      '_upcoming',
      'cancelledAt',
      'completedAt',
      'createdAt',
      'id',
      'metadata',
      'quantity',
      'reference',
      'referenceOrigin',
      'skuCode',
      'status',
      'updatedAt'
    )

    this.hasOne('sku', { className: 'Sku' })
    this.hasOne('originStockLocation', { className: 'StockLocation' })
    this.hasOne('destinationStockLocation', { className: 'StockLocation' })
    this.hasOne('shipment', { className: 'Shipment' })
    this.hasOne('lineItem', { className: 'LineItem' })
  }
}

const StockTransfer = library.createResource<StockTransferCollection>(
  StockTransferCollection
)

export default StockTransfer
