import library from './library'
import BaseClass from '../utils/BaseClass'
import { LineItemCollection } from './LineItem'
import { SkuOptionCollection } from './SkuOption'

export class LineItemOptionCollection extends BaseClass {
  static className = 'LineItemOption'
  name: string
  quantity: number
  currencyCode: string
  unitAmountCents: number
  unitAmountFloat: number
  formattedUnitAmount: string
  totalAmountCents: number
  totalAmountFloat: number
  formattedTotalAmount: string
  delayHours: number
  delayDays: number
  options: object
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  lineItem: () => Promise<LineItemCollection>
  skuOption: () => Promise<SkuOptionCollection>
  static define() {
    this.attributes(
      'name',
      'quantity',
      'currencyCode',
      'unitAmountCents',
      'unitAmountFloat',
      'formattedUnitAmount',
      'totalAmountCents',
      'totalAmountFloat',
      'formattedTotalAmount',
      'delayHours',
      'delayDays',
      'options',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('lineItem', { className: 'LineItem' })
    this.hasOne('skuOption', { className: 'SkuOption' })
  }
}

const LineItemOption = library.createResource<LineItemOptionCollection>(
  LineItemOptionCollection
)

export default LineItemOption
