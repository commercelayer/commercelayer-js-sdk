import library from './library'
import BaseClass from '../utils/BaseClass'

export class MerchantCollection extends BaseClass {
  static className = 'Merchant'
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'name',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('address', { className: 'Address' })
  }
}

const Merchant = library.createResource<MerchantCollection>(MerchantCollection)

export default Merchant
