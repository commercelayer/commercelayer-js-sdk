import library from './library';

class Parcel extends library.Base {
  static define() {
    this.attributes(
      'number',
      'weight',
      'unit_of_weight',
      'eel_pfc',
      'contents_type',
      'contents_explanation',
      'customs_certify',
      'customs_signer',
      'non_delivery_option',
      'restriction_type',
      'restriction_comments',
      'customs_info_required',
      'shipping_label_url',
      'shipping_label_file_type',
      'shipping_label_size',
      'shipping_label_resolution',
      'tracking_number',
      'tracking_status',
      'tracking_status_detail',
      'tracking_status_updated_at',
      'tracking_details',
      'carrier_weight_oz',
      'signed_by',
      'id',
      'created_at',
      'updated_at',
      'reference',
      'metadata',
    )

    this.belongsTo('shipment', { className: 'Shipment' })

    this.hasMany('parcelLineItems', { className: 'ParcelLineItem' })
  }
}

export default library.createResource(Parcel);
