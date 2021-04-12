import library from './library'
import BaseClass from '#utils/BaseClass'
import { MultiRelationship } from '#typings/Library'
import { AttachmentCollection } from './Attachment'

export class CarrierAccountCollection extends BaseClass {
  static className = 'CarrierAccount'
  createdAt: Date
  credentials: Record<string, any>
  easypostId: string
  easypostType: string
  id: string
  metadata: object
  name: string
  reference: string
  referenceOrigin: string
  updatedAt: Date
  attachments: () => MultiRelationship<AttachmentCollection>
  loadAttachments: () => MultiRelationship<AttachmentCollection>
  static define() {
    this.attributes(
      'createdAt',
      'credentials',
      'easypostId',
      'easypostType',
      'id',
      'metadata',
      'name',
      'reference',
      'referenceOrigin',
      'updatedAt'
    )

    this.hasMany('attachments', { className: 'Attachment' })
  }
}

const CarrierAccount = library.createResource<CarrierAccountCollection>(
  CarrierAccountCollection
)

export default CarrierAccount
