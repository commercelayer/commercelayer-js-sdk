import library from './library'
import BaseClass from '../utils/BaseClass'

export class WireTransferCollection extends BaseClass {
  static className = 'WireTransfer'
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes('id', 'createdAt', 'updatedAt', 'reference', 'metadata')
    this.hasOne('order', { className: 'Order' })
  }
}

const WireTransfer = library.createResource<WireTransferCollection>(
  WireTransferCollection
)

export default WireTransfer
