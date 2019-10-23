import library from './library';

class Webhook extends library.Base {
  static define() {
    this.attributes(
      'topic',
      'callback_url',
      'include_resources',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )


  }
}

export default library.createResource(Webhook);
