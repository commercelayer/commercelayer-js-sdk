import library from './library'

class Item extends library.Base {
	static define() {
		this.attributes()
	}
}

export default library.createResource(Item)
