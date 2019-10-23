import library from './library';

class ShippingZone extends library.Base {
  static define() {
    this.attributes(
      'name',
      'country_code_regex',
      'not_country_code_regex',
      'state_code_regex',
      'not_state_code_regex',
      'zip_code_regex',
      'not_zip_code_regex',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )


  }
}

export default library.createResource(ShippingZone);
