import library from './library'
import BaseClass from '#utils/BaseClass'

export class ShippingZoneCollection extends BaseClass {
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
  referenceOrigin: string
  metadata: object
  static define() {
    this.attributes(
      'name',
      'countryCodeRegex',
      'notCountryCodeRegex',
      'stateCodeRegex',
      'notStateCodeRegex',
      'zipCodeRegex',
      'notZipCodeRegex',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )
  }
}

const ShippingZone = library.createResource<ShippingZoneCollection>(
  ShippingZoneCollection
)

export default ShippingZone
