import library from './library'
import BaseClass from '#utils/BaseClass'

export class AddressCollection extends BaseClass {
  static className = 'Address'
  billingInfo: string
  business: boolean
  city: string
  company: string
  countryCode: string
  createdAt: Date
  customerAddressId?: string
  email: string
  firstName: string
  fullAddress: string
  fullName: string
  id: string
  isGeocoded: boolean
  isLocalized: boolean
  lastName: string
  lat: number
  line1: string
  line2: string
  lng: number
  mapUrl: string
  metadata: object
  name: string
  notes: string
  phone: string
  providerName: string
  reference: string
  referenceOrigin: string
  stateCode: string
  staticMapUrl: string
  updatedAt: Date
  zipCode: string
  static define() {
    this.attributes(
      'business',
      'firstName',
      'lastName',
      'company',
      'fullName',
      'line1',
      'line2',
      'city',
      'zipCode',
      'stateCode',
      'countryCode',
      'phone',
      'fullAddress',
      'name',
      'email',
      'notes',
      'lat',
      'lng',
      'isLocalized',
      'isGeocoded',
      'providerName',
      'mapUrl',
      'staticMapUrl',
      'billingInfo',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('geocoder', { polymorphic: true })
  }
}

const Address = library.createResource<AddressCollection>(AddressCollection)

export default Address
