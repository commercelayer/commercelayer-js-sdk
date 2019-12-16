import library from './library'

export class MerchantCollection extends library.Base {
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
