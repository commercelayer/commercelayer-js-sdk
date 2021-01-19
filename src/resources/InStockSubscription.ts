import library from './library'
import BaseClass from '#utils/BaseClass'
import { SkuCollection } from './Sku'
import { MarketCollection } from './Market'
import { CustomerCollection } from './Customer'

export class InStockSubscriptionCollection extends BaseClass {
  static className = 'InStockSubscription'
  status: string
  customerEmail: string
  skuCode: string
  _activate: boolean
  _deactivate: boolean
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  market: () => Promise<MarketCollection>
  customer: () => Promise<CustomerCollection>
  sku: () => Promise<SkuCollection>
  static define() {
    this.attributes(
      'status',
      'customerEmail',
      'skuCode',
      '_activate',
      '_deactivate',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )
    this.hasOne('market', { className: 'Market' })
    this.hasOne('customer', { className: 'Customer' })
    this.hasOne('sku', { className: 'Sku' })
  }
}

const InStockSubscription = library.createResource<
  InStockSubscriptionCollection
>(InStockSubscriptionCollection)

export default InStockSubscription
