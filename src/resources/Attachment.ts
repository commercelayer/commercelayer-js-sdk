import library from './library'

export class AttachmentCollection extends library.Base {
  static className = 'Attachment'
  name: string
  description: string
  url: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
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

const Attachment = library.createResource<AttachmentCollection>(
  AttachmentCollection
)

export default Attachment
