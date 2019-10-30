import library from './library'

class Attachment extends library.Base {
	static define() {
		this.attributes(
			'name',
			'description',
			'url',
			'id',
			'created_at',
			'updated_at',
			'reference',
			'metadata'
		)

		this.hasOne('attachable', { className: 'Attachable', polymorphic: true })
	}
}

export default library.createResource(Attachment)
