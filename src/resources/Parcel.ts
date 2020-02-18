import library from './library'
import BaseClass from '../utils/BaseClass'
import { CollectionResponse } from './@types/Library'

export class ParcelCollection extends BaseClass {
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
      'unitOfWeight',
      'eelPfc',
      'contentsType',
      'contentsExplanation',
      'customsCertify',
      'customsSigner',
      'nonDeliveryOption',
      'restrictionType',
      'restrictionComments',
      'customsInfoRequired',
      'shippingLabelUrl',
      'shippingLabelFileType',
      'shippingLabelSize',
      'shippingLabelResolution',
      'trackingNumber',
      'trackingStatus',
      'trackingStatusDetail',
      'trackingStatusUpdatedAt',
      'trackingDetails',
      'carrierWeightOz',
      'signedBy',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
      'metadata'
    )

    this.hasOne('shipment', { className: 'Shipment' })
    this.hasMany('parcelLineItems', { className: 'ParcelLineItem' })
  }
}

const Parcel = library.createResource<ParcelCollection>(ParcelCollection)

export default Parcel
