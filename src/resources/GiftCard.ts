import library from './library'
import BaseClass from '#utils/BaseClass'
import { MarketCollection } from './Market'
import { GiftCardRecipientCollection } from './GiftCardRecipient'

export class GiftCardCollection extends BaseClass {
  static className = 'GiftCard'
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
  _purchase: number
  _activate: number
  _deactivate: number
  _balanceChangeCents: number
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  market: () => Promise<MarketCollection>
  giftCardRecipient: () => Promise<GiftCardRecipientCollection>
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
      '_purchase',
      '_activate',
      '_deactivate',
      '_balanceChangeCents',
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
