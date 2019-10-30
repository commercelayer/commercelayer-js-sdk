import library from './library'

class Attachable extends library.Base {
	static define() {
		this.attributes()
	}
}

export default library.createResource(Attachable)
