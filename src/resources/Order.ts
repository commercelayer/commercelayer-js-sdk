import library from './library'
import BaseClass from '../utils/BaseClass'
import { LineItemCollection } from './LineItem'
import {
  CollectionProxy,
  SingleRelationship,
  MultiRelationship,
} from './typings/Library'
import { ShipmentCollection } from './Shipment'
import { PaymentMethodCollection } from './PaymentMethod'
import { MarketCollection } from './Market'
import { CustomerCollection } from './Customer'
import { AddressCollection } from './Address'
import { StripePaymentCollection } from './StripePayment'
import { WireTransferCollection } from './WireTransfer'
import { PaypalPaymentCollection } from './PaypalPayment'
import { BraintreePaymentCollection } from './BraintreePayment'
import { AdyenPaymentCollection } from './AdyenPayment'

export class OrderCollection extends BaseClass {
  static className = 'Order'
  number: number
  status: string
  paymentStatus: string
  paymentSourceId: string
  paymentSourceType: string
  fulfillmentStatus: string
  guest: boolean
  editable: boolean
  placeable: boolean
  customerEmail: string
  customerPassword: string
  languageCode: string
  currencyCode: string
  taxIncluded: boolean
  taxRate: number
  freightTaxable: boolean
  countryCode: string
  shippingCountryCodeLock: string
  couponCode: string
  subtotalAmountCents: number
  subtotalAmountFloat: number
  formattedSubtotalAmount: string
  shippingAmountCents: number
  shippingAmountFloat: number
  formattedShippingAmount: string
  paymentMethodAmountCents: number
  paymentMethodAmountFloat: number
  formattedPaymentMethodAmount: string
  discountAmountCents: number
  discountAmountFloat: number
  formattedDiscountAmount: string
  totalTaxAmountCents: number
  totalTaxAmountFloat: number
  formattedTotalTaxAmount: string
  subtotalTaxAmountCents: number
  subtotalTaxAmountFloat: number
  formattedSubtotalTaxAmount: string
  shippingTaxAmountCents: number
  shippingTaxAmountFloat: number
  formattedShippingTaxAmount: string
  paymentMethodTaxAmountCents: number
  paymentMethodTaxAmountFloat: number
  formattedPaymentMethodTaxAmount: string
  discountTaxAmountCents: number
  discountTaxAmountFloat: number
  formattedDiscountTaxAmount: string
  totalAmountCents: number
  totalAmountFloat: number
  formattedTotalAmount: string
  totalTaxableAmountCents: number
  totalTaxableAmountFloat: number
  formattedTotalTaxableAmount: string
  subtotalTaxableAmountCents: number
  subtotalTaxableAmountFloat: number
  formattedSubtotalTaxableAmount: string
  shippingTaxableAmountCents: number
  shippingTaxableAmountFloat: number
  formattedShippingTaxableAmount: string
  paymentMethodTaxableAmountCents: number
  paymentMethodTaxableAmountFloat: number
  formattedPaymentMethodTaxableAmount: string
  discountTaxableAmountCents: number
  discountTaxableAmountFloat: number
  formattedDiscountTaxableAmount: string
  totalAmountWithTaxesCents: number
  totalAmountWithTaxesFloat: number
  formattedTotalAmountWithTaxes: string
  feesAmountCents: number
  feesAmountFloat: number
  formattedFeesAmount: string
  skusCount: string
  lineItemOptionsCount: number
  shipmentsCount: number
  paymentSourceDetails: object
  token: string
  cartUrl: string
  returnUrl: string
  termsUrl: string
  privacyUrl: string
  checkoutUrl: string
  _place: number
  _cancel: number
  _approve: number
  _capture: number
  _refund: number
  _updateTaxes: number
  _billingAddressCloneId: number
  _shippingAddressCloneId: number
  _customerPaymentSourceId: number
  _shippingAddressSameAsBilling: number
  _billingAddressSameAsShipping: number
  _savePaymentSourceToCustomerWallet: number
  _saveShippingAddressToCustomerAddressBook: number
  _saveBillingAddressToCustomerAddressBook: number
  _refresh: number
  placedAt: Date
  archivedAt: Date
  approvedAt: Date
  cancelledAt: Date
  paymentUpdatedAt: Date
  fulfillmentUpdatedAt: Date
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  referenceOrigin: string
  metadata: object
  market: () => Promise<MarketCollection>
  customer: () => Promise<CustomerCollection>
  shippingAddress: () =>
    | Promise<AddressCollection>
    | SingleRelationship<AddressCollection>
  paymentSource: () => SingleRelationship<
    | StripePaymentCollection
    | WireTransferCollection
    | PaypalPaymentCollection
    | BraintreePaymentCollection
    | AdyenPaymentCollection
  >
  loadShippingAddress: () => Promise<AddressCollection>
  billingAddress: () =>
    | Promise<AddressCollection>
    | SingleRelationship<AddressCollection>
  paymentMethod: () => Promise<PaymentMethodCollection>
  lineItems: () => MultiRelationship<LineItemCollection>
  availablePaymentMethods: () => CollectionProxy<PaymentMethodCollection>
  shipments: () => CollectionProxy<ShipmentCollection>
  static define() {
    this.attributes(
      'number',
      'status',
      'paymentStatus',
      'fulfillmentStatus',
      'guest',
      'editable',
      'placeable',
      'customerEmail',
      'customerPassword',
      'languageCode',
      'currencyCode',
      'taxIncluded',
      'taxRate',
      'freightTaxable',
      'countryCode',
      'shippingCountryCodeLock',
      'couponCode',
      'subtotalAmountCents',
      'subtotalAmountFloat',
      'formattedSubtotalAmount',
      'shippingAmountCents',
      'shippingAmountFloat',
      'formattedShippingAmount',
      'paymentMethodAmountCents',
      'paymentMethodAmountFloat',
      'formattedPaymentMethodAmount',
      'discountAmountCents',
      'discountAmountFloat',
      'formattedDiscountAmount',
      'totalTaxAmountCents',
      'totalTaxAmountFloat',
      'formattedTotalTaxAmount',
      'subtotalTaxAmountCents',
      'subtotalTaxAmountFloat',
      'formattedSubtotalTaxAmount',
      'shippingTaxAmountCents',
      'shippingTaxAmountFloat',
      'formattedShippingTaxAmount',
      'paymentMethodTaxAmountCents',
      'paymentMethodTaxAmountFloat',
      'formattedPaymentMethodTaxAmount',
      'discountTaxAmountCents',
      'discountTaxAmountFloat',
      'formattedDiscountTaxAmount',
      'totalAmountCents',
      'totalAmountFloat',
      'formattedTotalAmount',
      'totalTaxableAmountCents',
      'totalTaxableAmountFloat',
      'formattedTotalTaxableAmount',
      'subtotalTaxableAmountCents',
      'subtotalTaxableAmountFloat',
      'formattedSubtotalTaxableAmount',
      'shippingTaxableAmountCents',
      'shippingTaxableAmountFloat',
      'formattedShippingTaxableAmount',
      'paymentMethodTaxableAmountCents',
      'paymentMethodTaxableAmountFloat',
      'formattedPaymentMethodTaxableAmount',
      'discountTaxableAmountCents',
      'discountTaxableAmountFloat',
      'formattedDiscountTaxableAmount',
      'totalAmountWithTaxesCents',
      'totalAmountWithTaxesFloat',
      'formattedTotalAmountWithTaxes',
      'feesAmountCents',
      'feesAmountFloat',
      'formattedFeesAmount',
      'skusCount',
      'lineItemOptionsCount',
      'shipmentsCount',
      'paymentSourceDetails',
      'token',
      'cartUrl',
      'returnUrl',
      'termsUrl',
      'privacyUrl',
      'checkoutUrl',
      '_place',
      '_cancel',
      '_approve',
      '_capture',
      '_refund',
      '_updateTaxes',
      '_billingAddressCloneId',
      '_shippingAddressCloneId',
      '_customerPaymentSourceId',
      '_shippingAddressSameAsBilling',
      '_billingAddressSameAsShipping',
      '_savePaymentSourceToCustomerWallet',
      '_saveShippingAddressToCustomerAddressBook',
      '_saveBillingAddressToCustomerAddressBook',
      '_refresh',
      'placedAt',
      'approvedAt',
      'cancelledAt',
      'paymentUpdatedAt',
      'fulfillmentUpdatedAt',
      'id',
      'archivedAt',
      'createdAt',
      'updatedAt',
      'reference',
      'referenceOrigin',
      'metadata'
    )

    this.hasOne('market', { className: 'Market' }) // Required
    this.hasOne('customer', { className: 'Customer' })
    this.hasOne('shippingAddress', { className: 'Address' })
    this.hasOne('billingAddress', { className: 'Address' })
    this.hasOne('paymentMethod', { className: 'PaymentMethod' })
    this.hasMany('availablePaymentMethods', { className: 'PaymentMethod' })
    this.hasMany('lineItems', { className: 'LineItem' })
    this.hasMany('shipments', { className: 'Shipment' })
    this.belongsTo('paymentSource', { polymorphic: true })
  }
}
const Order = library.createResource<OrderCollection>(OrderCollection)

Order.afterBuild(function() {
  // @ts-ignore
  if (this.paymentSourceId) delete this.paymentSourceId
  // @ts-ignore
  if (this.paymentSourceType) delete this.paymentSourceType
})

export default Order
