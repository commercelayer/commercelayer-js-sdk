import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionResponse } from './@types/Library'
import { CustomerCollection } from './Customer'

export class GiftCardRecipientCollection extends BaseClass {
  static className = 'GiftCardRecipient'
  customer: () => CollectionResponse<CustomerCollection>
  email: string
  first_name: string
  last_name: string
  reference_origin: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'email',
      'first_name',
      'last_name',
      'reference_origin',
      'id',
      'create_at',
      'update_at',
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
