import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionResponse } from './@types/Library'
import { CustomerCollection } from './Customer'

export class GiftCardRecipientCollection extends BaseClass {
  static className = 'GiftCardRecipient'
  customer: () => CollectionResponse<CustomerCollection>
  email: string
  firstName: string
  lastName: string
  reference_origin: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
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

    this.hasMany('customer', { className: 'Customer' })
  }
}

const GiftCardRecipient = library.createResource<GiftCardRecipientCollection>(
  GiftCardRecipientCollection
)
export default GiftCardRecipient
