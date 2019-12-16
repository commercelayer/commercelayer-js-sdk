import library from './library'

export class GeocoderCollection extends library.Base {
  static className = 'Geocoder'
  static define() {
    this.attributes()
  }
}

const Geocoder = library.createResource<GeocoderCollection>(GeocoderCollection)

export default Geocoder
