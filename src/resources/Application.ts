import library from './library'
import BaseClass from '#utils/BaseClass'

type ApplicationKind =
  | 'checkout'
  | 'contentful'
  | 'datocms'
  | 'sanity'
  | 'cli'
  | 'integration'
  | 'webapp'
  | 'zapier'
  | 'channel'
  | 'sales_channel'

export class ApplicationCollection extends BaseClass {
  static className = 'Application'
  static queryName = 'application'
  name: string
  kind: ApplicationKind
  publicAccess: string
  redirectUri: string
  uid: string
  secret: string
  scopes: string
  createdAt: Date
  reference: string
  referenceOrigin: string
  updatedAt: Date
  id: string
  metadata: Record<string, string>
  static define() {
    this.attributes(
      'name',
      'kind',
      'publicAccess',
      'redirectUri',
      'uid',
      'secret',
      'scopes',
      'createdAt',
      'reference',
      'referenceOrigin',
      'updatedAt',
      'id',
      'metadata'
    )
  }
}

const Application = library.createResource<ApplicationCollection>(
  ApplicationCollection
)

export default Application
