import library from './library'

export class WebhookCollection extends library.Base {
  static className = 'Webhook'
  topic: string
  callbackUrl: string
  includeResources: string[]
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'topic',
      'callback_url',
      'include_resources',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )
  }
}

const Webhook = library.createResource<WebhookCollection>(WebhookCollection)

export default Webhook
