import library from './library'
import BaseClass from '#utils/BaseClass'
import { OrderCollection } from './Order'
import { SingleRelationship } from '#typings/Library'

export class WireTransferCollection extends BaseClass {
  static className = 'WireTransfer'
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  order: () => SingleRelationship<OrderCollection>
  static define() {
    this.attributes(
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )
    this.hasOne('order', { className: 'Order' })
  }
}

const WireTransfer = library.createResource<WireTransferCollection>(
  WireTransferCollection
)

export default WireTransfer
