import library from './library'
import BaseClass from '#utils/BaseClass'
import { MarketCollection } from './Market'

export class SkuOptionCollection extends BaseClass {
  static className = 'SkuOption'
  name: string
  description: string
  priceAmountCents: number
  priceAmountFloat: number
  formattedPriceAmount: string
  delayHours: number
  delayDays: number
  skuCode_regex: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  market: () => Promise<MarketCollection>
  static define() {
    this.attributes(
      'name',
      'description',
      'priceAmountCents',
      'priceAmountFloat',
      'formattedPriceAmount',
      'delayHours',
      'delayDays',
      'skuCodeRegex',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('market', { className: 'Market' })
  }
}

const SkuOption = library.createResource<SkuOptionCollection>(
  SkuOptionCollection
)

export default SkuOption
