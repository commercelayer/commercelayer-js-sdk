import library from './library'
import BaseClass from '#utils/BaseClass'

export class GeocoderCollection extends BaseClass {
  static className = 'Geocoder'
  static define() {
    this.attributes()
  }
}

const Geocoder = library.createResource<GeocoderCollection>(GeocoderCollection)

export default Geocoder
