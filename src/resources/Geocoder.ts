import library from './library'

class Geocoder extends library.Base {
	static define() {
		this.attributes()
	}
}

export default library.createResource(Geocoder)
