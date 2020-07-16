import library from './library'
import BaseClass from '../utils/BaseClass'

export class AdjustmentCollection extends BaseClass {
  static className = 'Adjustment'
  name: string
  currencyCode: string
  amountCents: number
  amountFloat: number
  formattedAmount: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  static define() {
    this.attributes(
      'name',
      'currencyCode',
      'amountCents',
      'amountFloat',
      'formattedAmount',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )
  }
}

const Adjustment = library.createResource<AdjustmentCollection>(
  AdjustmentCollection
)

export default Adjustment
