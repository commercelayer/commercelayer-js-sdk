import library from './library'
import BaseClass from '../utils/BaseClass'

export class ImportCollection extends BaseClass {
  static className = 'Import'
  resourceType: string
  parentResourceId: number
  status: string
  startedAt: Date
  completedAt: Date
  inputs: object
  errorsCount: number
  warningsCount: number
  destroyedCount: number
  errorsLog: object
  warningsLog: object
  cleanupRecords: boolean
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  static define() {
    this.attributes(
      'resourceType',
      'parentResourceId',
      'status',
      'startedAt',
      'completedAt',
      'inputs',
      'errorsCount',
      'warningsCount',
      'destroyedCount',
      'errorsLog',
      'warningsLog',
      'cleanupRecords',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'metadata'
    )
  }
}

const Import = library.createResource<ImportCollection>(ImportCollection)

export default Import
