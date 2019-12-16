import library from './library'

export class AddressCollection extends library.Base {
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
  metadata: object
  static define() {
    this.attributes(
      'business',
      'first_name',
      'last_name',
      'company',
      'full_name',
      'line_1',
      'line_2',
      'city',
      'zip_code',
      'state_code',
      'country_code',
      'phone',
      'full_address',
      'name',
      'email',
      'notes',
      'lat',
      'lng',
      'is_localized',
      'is_geocoded',
      'provider_name',
      'map_url',
      'static_map_url',
      'billing_info',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )

    this.hasOne('geocoder', { className: 'Geocoder' })
  }
}

const Address = library.createResource<AddressCollection>(AddressCollection)

export default Address
