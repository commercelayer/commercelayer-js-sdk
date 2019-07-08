import library from './library';

class CreditCard extends library.Base {
  static define() {
    this.attributes(
      'first_name',
      'last_name',
      'full_name',
      'number',
      'month',
      'year',
      'valid_thru',
      'verification_value',
      'card_type',
      'display_number',
      'name',
      'display_verification_value',
      'fingerprint',
      'storage_state',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )

    this.belongsTo('order', { className: 'Order' })

  }
}

export default library.createResource(CreditCard);
