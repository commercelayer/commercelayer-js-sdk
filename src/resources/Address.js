import library from './library';

class Address extends library.Base {
  static define() {
    this.attributes(
      'business',
      'first_name',
      'last_name',
      'company',
      'full_name',
      'line_1',
      'line_2',
      'city',
      'zip_code',
      'state_code',
      'country_code',
      'phone',
      'full_address',
      'name',
      'email',
      'notes',
      'lat',
      'lng',
      'is_localized',
      'is_geocoded',
      'provider_name',
      'map_url',
      'static_map_url',
      'billing_info',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )

    this.belongsTo('geocoder', { className: 'Geocoder' })

  }
}

export default library.createResource(Address);
