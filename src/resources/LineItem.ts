import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionProxy } from './@types/Library'
import { LineItemOptionCollection } from './LineItemOption'

export class LineItemCollection extends BaseClass {
  static className = 'LineItem'
  quantity: number
  itemType: string
  imageUrl: string
  id: string
  formattedUnitAmount: string
  formattedTotalAmount: string
  reference: string
  skuCode: string
  _updateQuantity: string
  currencyCode: string
  unitAmountCents: number
  unitAmountFloat: number
  optionsAmountCents: number
  optionsAmountFloat: number
  formattedOptionsAmount: string
  totalAmountCents: number
  totalAmountFloat: number
  name: string
  taxRate: number
  taxBreakdown: object
  createdAt: Date
  updatedAt: Date
  metadata: object
  lineItemOptions: () => CollectionProxy<LineItemOptionCollection>
  item: () => any
  static define() {
    this.attributes(
      'skuCode',
      'quantity',
      '_updateQuantity',
      'currencyCode',
      'unitAmountCents',
      'unitAmountFloat',
      'formattedUnitAmount',
      'optionsAmountCents',
      'optionsAmountFloat',
      'formattedOptionsAmount',
      'totalAmountCents',
      'totalAmountFloat',
      'formattedTotalAmount',
      'name',
      'imageUrl',
      'taxRate',
      'taxBreakdown',
      'itemType',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'metadata'
    )

    this.hasOne('order', { className: 'Order' })
    this.belongsTo('item', { polymorphic: true })
    this.hasMany('lineItemOptions', { className: 'LineItemOption' })
  }
}

const LineItem = library.createResource<LineItemCollection>(LineItemCollection)

LineItem.afterBuild(function() {
  if (this.itemId) delete this.itemId
  if (this.itemType) delete this.itemType
})

export default LineItem
