import library from './library'
import BaseClass from '../utils/BaseClass'
import { MarketCollection } from './Market'
import { GiftCardRecipientCollection } from './GiftCardRecipient'

export class GiftCardCollection extends BaseClass {
  static className = 'GiftCard'
  assignMarket: (value: MarketCollection) => MarketCollection
  createMarket: (value?: MarketCollection) => Promise<MarketCollection>
  updateMarket: (value?: MarketCollection) => Promise<MarketCollection>
  assignGiftCardRecipient: (
    value: GiftCardRecipientCollection
  ) => Promise<GiftCardRecipientCollection>
  createGiftCardRecipient: (
    value?: GiftCardRecipientCollection
  ) => Promise<GiftCardRecipientCollection>
  updateGiftCardRecipient: (
    value?: GiftCardRecipientCollection
  ) => Promise<GiftCardRecipientCollection>
  market: () => MarketCollection
  giftCardRecipient: () => GiftCardRecipientCollection
  status: string
  code: string
  currencyCode: string
  initialBalanceCents: number
  initialBalanceFloat: number
  formattedInitialBalance: string
  balanceCents: number
  balanceFloat: number
  formattedBalance: string
  balanceMaxCents: number
  balanceMaxFloat: number
  formattedBalanceMax: string
  balanceLog: object
  singleUse: boolean
  rechargeable: boolean
  imageUrl: string
  expiresAt: Date
  referenceOrigin: string
  recipientEmail: string
  Purchase: number
  Activate: number
  Deactivate: number
  BalanceChangeCents: number
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'status',
      'code',
      'currencyCode',
      'initialBalanceCents',
      'initialBalanceFloat',
      'formattedInitialBalance',
      'balanceCents',
      'balanceFloat',
      'formattedBalance',
      'balanceMaxCents',
      'balanceMaxFloat',
      'formattedBalanceMax',
      'balanceLog',
      'singleUse',
      'rechargeable',
      'imageUrl',
      'expiresAt',
      'referenceOrigin',
      'recipientEmail',
      'Purchase',
      'Activate',
      'Deactivate',
      'BalanceChangeCents',
      'id',
      'createAt',
      'updateAt',
      'reference',
      'metadata'
    )

    this.hasOne('market', { className: 'Market' })
    this.hasOne('giftCardRecipient', { className: 'GiftCardRecipient' })
  }
}

const GiftCard = library.createResource<GiftCardCollection>(GiftCardCollection)
export default GiftCard
