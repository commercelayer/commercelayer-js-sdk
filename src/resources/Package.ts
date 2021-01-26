import library from './library'
import BaseClass from '#utils/BaseClass'
import { StockLocationCollection } from './StockLocation'
import { MultiRelationship, SingleRelationship } from '#typings/Library'
import { ParcelCollection } from './Parcel'

export class PackageCollection extends BaseClass {
  static className = 'Package'
  code: string
  createdAt: Date
  length: number
  metadata: object
  name: string
  reference: string
  referenceOrigin: string
  unitOfLength: 'cm' | 'in'
  updatedAt: Date
  width: number
  stockLocation: () => SingleRelationship<StockLocationCollection>
  parcels: () => MultiRelationship<ParcelCollection>
  static define() {
    this.attributes(
      'code',
      'createdAt',
      'length',
      'metadata',
      'name',
      'reference',
      'referenceOrigin',
      'unitOfLength',
      'updatedAt',
      'width'
    )
    this.hasOne('stockLocation', { className: 'StockLocation' })
    this.hasMany('parcels', { className: 'Parcel' })
  }
}

const Package = library.createResource<PackageCollection>(PackageCollection)

export default Package
