import library from './library'
import { CollectionResponse } from './@types/Library'

export class ParcelCollection extends library.Base {
  static className = 'Parcel'
  number: string
  weight: number
  unitOfWeight: string
  eelPfc: string
  contentsType: string
  contentsExplanation: string
  customsCertify: boolean
  customsSigner: string
  nonDeliveryOption: string
  restrictionType: string
  restrictionComments: string
  customsInfoRequired: boolean
  shippingLabelUrl: string
  shippingLabelFileType: string
  shippingLabelSize: string
  shippingLabelResolution: string
  trackingNumber: string
  trackingStatus: string
  trackingStatusDetail: string
  trackingStatusUpdatedAt: Date
  trackingDetails: string
  carrierWeightOz: string
  signedBy: string
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  parcelLineItems: () => CollectionResponse<any>
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
      'metadata'
    )

    this.hasOne('shipment', { className: 'Shipment' })

    this.hasMany('parcelLineItems', { className: 'ParcelLineItem' })
  }
}

const Parcel = library.createResource<ParcelCollection>(ParcelCollection)

export default Parcel
