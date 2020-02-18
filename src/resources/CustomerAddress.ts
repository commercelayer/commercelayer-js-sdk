import library from './library'
import BaseClass from '../utils/BaseClass'

export class CustomerAddressCollection extends BaseClass {
  static className = 'CustomerAddress'
  name: string
  id: string
  createdAt: string
  updatedAt: string
  reference: string
  metadata: object

  static define() {
    this.attributes(
      'name',
      'id',
      'createdAt',
      'updatedAt',
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
