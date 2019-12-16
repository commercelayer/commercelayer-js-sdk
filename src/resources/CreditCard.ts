import library from './library'

export class CreditCardCollection extends library.Base {
  static className = 'CreditCard'
  firstName: string
  lastName: string
  fullName: string
  number: string
  month: string
  year: string
  validThru: string
  verificationValue: string
  cardType: string
  displayNumber: string
  name: string
  displayVerificationValue: string
  fingerprint: string
  storageState: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'first_name',
      'last_name',
      'full_name',
      'number',
      'month',
      'year',
      'valid_thru',
      'verification_value',
      'card_type',
      'display_number',
      'name',
      'display_verification_value',
      'fingerprint',
      'storage_state',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('order', { className: 'Order' })
  }
}

const CreditCard = library.createResource<CreditCardCollection>(
  CreditCardCollection
)

export default CreditCard
