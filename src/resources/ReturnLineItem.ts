import library from './library'
import BaseClass from '#utils/BaseClass'
import { LineItemCollection } from './LineItem'
import { ReturnCollection } from './Return'

export class ReturnLineItemCollection extends BaseClass {
  static className = 'ReturnLineItem'
  skuCode: string
  name: string
  quantity: number
  _restock: boolean
  returnReason: string
  restockedAt: Date
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  return: () => Promise<ReturnCollection> | ReturnCollection
  lineItem: () => Promise<LineItemCollection> | LineItemCollection
  static define() {
    this.attributes(
      'skuCode',
      'name',
      'quantity',
      '_restock',
      'returnReason',
      'restockedAt',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )
    this.hasOne('return', { className: 'Return' })
    this.hasOne('lineItem', { className: 'LineItem' })
  }
}

const InventoryModel = library.createResource<ReturnLineItemCollection>(
  ReturnLineItemCollection
)

export default InventoryModel
