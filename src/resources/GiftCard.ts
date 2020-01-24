import library from './library'
import { CollectionResponse, HeaderParams } from './@types/Library'
import { MarketCollection } from './Market'
import { GiftCardRecipientCollection } from './GiftCardRecipient'

export class GiftCardCollection extends library.Base {
  static className = 'GiftCard'
  market: () => CollectionResponse<MarketCollection>
  giftCardRecipients: () => CollectionResponse<GiftCardRecipientCollection>
  status: string
  code: string
  currency_code: string
  initial_balance_cents: number
  initial_balance_float: number
  formatted_initial_balance: string
  balance_cents: number
  balance_float: number
  formatted_balance: string
  balance_max_cents: number
  balance_max_float: number
  formatted_balance_max: string
  balance_log: object
  single_use: boolean
  rechargeable: boolean
  image_url: string
  expires_at: Date
  reference_origin: string
  recipient_email: string
  _purchase: number
  _activate: number
  _deactivate: number
  _balance_change_cents: number
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'status',
      'code',
      'currency_code',
      'initial_balance_cents',
      'initial_balance_float',
      'formatted_initial_balance',
      'balance_cents',
      'balance_float',
      'formatted_balance',
      'balance_max_cents',
      'balance_max_float',
      'formatted_balance_max',
      'balance_log',
      'single_use',
      'rechargeable',
      'image_url',
      'expires_at',
      'reference_origin',
      'recipient_email',
      '_purchase',
      '_activate',
      '_deactivate',
      '_balance_change_cents',
      'id',
      'create_at',
      'update_at',
      'reference',
      'metadata'
    )

    this.hasOne('market', { className: 'Market' })
    this.hasOne('giftCardRecipents', { className: 'GiftCardRecipient' })
  }
}

const GiftCard = library.createResource<GiftCardCollection>(GiftCardCollection)
export default GiftCard
