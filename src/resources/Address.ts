import library from './library'
import BaseClass from '#utils/BaseClass'
import { GeocoderCollection } from './Geocoder'

export class AddressCollection extends BaseClass {
  static className = 'Address'
  business: boolean
  firstName: string
  lastName: string
  company: string
  fullName: string
  line1: string
  line2: string
  city: string
  zipCode: string
  stateCode: string
  countryCode: string
  phone: string
  fullAddress: string
  name: string
  email: string
  notes: string
  lat: number
  lng: number
  isLocalized: boolean
  isGeocoded: boolean
  providerName: string
  mapUrl: string
  staticMapUrl: string
  billingInfo: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  geocoder: () => Promise<GeocoderCollection>
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

    this.hasOne('geocoder', { className: 'Geocoder' })
  }
}

const Address = library.createResource<AddressCollection>(AddressCollection)

export default Address
