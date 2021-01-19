import library from './library'
import BaseClass from '#utils/BaseClass'
import { CustomerCollection } from './Customer'

export class GiftCardRecipientCollection extends BaseClass {
  static className = 'GiftCardRecipient'
  email: string
  firstName: string
  lastName: string
  referenceOrigin: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  customer: () => Promise<CustomerCollection>
  static define() {
    this.attributes(
      'email',
      'firstName',
      'lastName',
      'referenceOrigin',
      'id',
      'createAt',
      'updateAt',
      'reference',
      'metadata'
    )
    this.hasOne('customer', { className: 'Customer' })
  }
}

const GiftCardRecipient = library.createResource<GiftCardRecipientCollection>(
  GiftCardRecipientCollection
)
export default GiftCardRecipient
