import library from './library'
import BaseClass from '#utils/BaseClass'
import { ShipmentCollection } from './Shipment'
import { LineItemCollection } from './LineItem'
import { StockItemCollection } from './StockItem'
import { SingleRelationship } from '#typings/Library'

export class ShipmentLineItemCollection extends BaseClass {
  static className = 'ShipmentLineItem'
  skuCode: string
  quantity: number
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  shipment: () => SingleRelationship<ShipmentCollection>
  lineItem: () => SingleRelationship<LineItemCollection>
  stockItem: () => SingleRelationship<StockItemCollection>
  static define() {
    this.attributes(
      'skuCode',
      'quantity',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('stockItem', { className: 'StockItem' })
    this.hasOne('lineItem', { className: 'LineItem' })
    this.hasOne('shipment', { className: 'Shipment' })
  }
}

const ShipmentLineItem = library.createResource<ShipmentLineItemCollection>(
  ShipmentLineItemCollection
)

export default ShipmentLineItem
