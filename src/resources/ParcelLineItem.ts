import library from './library'
import BaseClass from '#utils/BaseClass'
import { SingleRelationship } from '#typings/Library'
import { ShipmentLineItemCollection } from './ShipmentLineItem'
import { ParcelCollection } from './Parcel'

export class ParcelLineItemCollection extends BaseClass {
  static className = 'ParcelLineItem'
  id: string
  skuCode: string
  quantity: number
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: Record<string, string>
  parcel: () => SingleRelationship<ParcelCollection>
  loadParcel: () => SingleRelationship<ParcelCollection>
  shipmentLineItem: () => SingleRelationship<ShipmentLineItemCollection>
  loadShipmentLineItem: () => SingleRelationship<ShipmentLineItemCollection>
  static define() {
    this.attributes(
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('parcel', { className: 'Parcel' })
    this.hasOne('shipmentLineItem', { className: 'ShipmentLineItem' })
  }
}

const ParcelLineItem = library.createResource<ParcelLineItemCollection>(
  ParcelLineItemCollection
)

export default ParcelLineItem
