import library from './library'
import BaseClass from '#utils/BaseClass'

export class OrganizationCollection extends BaseClass {
  static className = 'Organization'
  static queryName = 'organization'
  acceptanceDisabled: boolean
  accountDisabled: boolean
  contrastColor: string
  createdAt: Date
  discountDisabled: boolean
  domain: string
  faviconUrl: string
  gtmId: string
  gtmIdTest: string
  logoUrl: string
  metadata: object
  name: string
  primaryColor: string
  reference: string
  referenceOrigin: string
  slug: string
  updatedAt: Date
  id: string
  static define() {
    this.attributes(
      'acceptanceDisabled',
      'accountDisabled',
      'contrastColor',
      'createdAt',
      'discountDisabled',
      'domain',
      'faviconUrl',
      'gtmId',
      'gtmIdTest',
      'logoUrl',
      'metadata',
      'name',
      'primaryColor',
      'reference',
      'referenceOrigin',
      'slug',
      'updatedAt'
    )
  }
}

const Organization = library.createResource<OrganizationCollection>(
  OrganizationCollection
)

export default Organization
