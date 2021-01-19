import library from './library'
import BaseClass from '#utils/BaseClass'

export class WebhookCollection extends BaseClass {
  static className = 'Webhook'
  topic: string
  callbackUrl: string
  includeResources: string[]
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  static define() {
    this.attributes(
      'topic',
      'callbackUrl',
      'includeResources',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )
  }
}

const Webhook = library.createResource<WebhookCollection>(WebhookCollection)

export default Webhook
