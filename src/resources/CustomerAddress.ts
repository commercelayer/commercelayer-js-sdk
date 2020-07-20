import library from './library'
import BaseClass from '../utils/BaseClass'
import { CustomerCollection } from './Customer'
import { AddressCollection } from './Address'

export class CustomerAddressCollection extends BaseClass {
  static className = 'CustomerAddress'
  name: string
  id: string
  createdAt: string
  updatedAt: string
  reference: string
  referenceOrigin: string
  metadata: object
  customer: () => Promise<CustomerCollection>
  address: () => Promise<AddressCollection>
  static define() {
    this.attributes(
      'name',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
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
