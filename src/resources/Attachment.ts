import library from './library'
import BaseClass from '#utils/BaseClass'

export class AttachmentCollection extends BaseClass {
  static className = 'Attachment'
  name: string
  description: string
  url: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  attachableId: string
  attachableType: string
  static define() {
    this.attributes(
      'name',
      'description',
      'url',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )
    this.belongsTo('attachable', { polymorphic: true })
  }
}

const Attachment = library.createResource<AttachmentCollection>(
  AttachmentCollection
)

Attachment.afterBuild(function() {
  // @ts-ignore
  if (this.attachableId) delete this.attachableId
  // @ts-ignore
  if (this.attachableType) delete this.attachableType
})

export default Attachment
