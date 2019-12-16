import library from './library'

export class ImportCollection extends library.Base {
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
      'resource_type',
      'parent_resource_id',
      'status',
      'started_at',
      'completed_at',
      'inputs',
      'errors_count',
      'warnings_count',
      'destroyed_count',
      'errors_log',
      'warnings_log',
      'cleanup_records',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata'
    )
  }
}

const Import = library.createResource<ImportCollection>(ImportCollection)

export default Import
