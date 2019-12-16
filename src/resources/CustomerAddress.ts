import library from './library'

export class CustomerAddressCollection extends library.Base {
  static className = 'CustomerAddress'
  name: string
  id: string
  created_at: string
  updated_at: string
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

    this.hasOne('customer', { className: 'Customer' })
    this.hasOne('address', { className: 'Address' })
  }
}

const CustomerAddress = library.createResource<CustomerAddressCollection>(
  CustomerAddressCollection
)

export default CustomerAddress
