import library from './library';

class Import extends library.Base {
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
      'metadata',
    )


  }
}

export default library.createResource(Import);
