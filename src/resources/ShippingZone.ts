import library from './library'

export class ShippingZoneCollection extends library.Base {
  static className = 'ShippingZone'
  name: string
  countryCodeRegex: string
  notCountryCodeRegex: string
  stateCodeRegex: string
  notStateCodeRegex: string
  zipCodeRegex: string
  notZipCodeRegex: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'name',
      'country_code_regex',
      'not_country_code_regex',
      'state_code_regex',
      'not_state_code_regex',
      'zip_code_regex',
      'not_zip_code_regex',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )
  }
}

const ShippingZone = library.createResource<ShippingZoneCollection>(
  ShippingZoneCollection
)

export default ShippingZone
