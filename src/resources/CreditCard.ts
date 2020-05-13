import library from './library'
import BaseClass from '../utils/BaseClass'
import { OrderCollection } from './Order'

export class CreditCardCollection extends BaseClass {
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
  order: () => Promise<OrderCollection>
  static define() {
    this.attributes(
      'firstName',
      'lastName',
      'fullName',
      'number',
      'month',
      'year',
      'validThru',
      'verificationValue',
      'cardType',
      'displayNumber',
      'name',
      'displayVerificationValue',
      'fingerprint',
      'storageState',
      'id',
      'createdAt',
      'updatedAt',
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
