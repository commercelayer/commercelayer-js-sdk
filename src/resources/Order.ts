import library from './library'
import BaseClass from '#utils/BaseClass'
import { LineItemCollection } from './LineItem'
import { SingleRelationship, MultiRelationship } from '#typings/Library'
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
import { AuthorizationCollection } from './Authorization'
import { CaptureCollection } from './Capture'
import { VoidCollection } from './Void'
import { RefundCollection } from './Refund'
import { TransactionCollection } from './Transaction'
import { CustomerPaymentSourceCollection } from '..'

export class OrderCollection extends BaseClass {
  static className = 'Order'
  _approve: boolean
  _billingAddressCloneId: string
  _billingAddressSameAsShipping: boolean
  _cancel: boolean
  _capture: boolean
  _customerPaymentSourceId: string
  _place: boolean
  _refresh: boolean
  _refund: boolean
  _saveBillingAddressToCustomerAddressBook: boolean
  _savePaymentSourceToCustomerWallet: boolean
  _saveShippingAddressToCustomerAddressBook: boolean
  _shippingAddressCloneId: string
  _shippingAddressSameAsBilling: boolean
  _updateTaxes: boolean
  adjustmentAmountCents: number
  adjustmentAmountFloat: number
  adjustmentTaxAmountCents: number
  adjustmentTaxAmountFloat: number
  approvedAt: Date
  archivedAt: Date
  cancelledAt: Date
  cartUrl: string
  checkoutUrl: string
  countryCode: string
  couponCode: string
  createdAt: Date
  currencyCode: string
  customerEmail: string
  customerPassword: string
  discountAmountCents: number
  discountAmountFloat: number
  discountTaxAmountCents: number
  discountTaxAmountFloat: number
  discountTaxableAmountCents: number
  discountTaxableAmountFloat: number
  editable: boolean
  feesAmountCents: number
  feesAmountFloat: number
  formattedAdjustmentAmount: string
  formattedAdjustmentTaxAmount: number
  formattedDiscountAmount: string
  formattedDiscountTaxAmount: string
  formattedDiscountTaxableAmount: string
  formattedFeesAmount: string
  formattedGiftCardAmount: string
  formattedPaymentMethodAmount: string
  formattedPaymentMethodTaxAmount: string
  formattedPaymentMethodTaxableAmount: string
  formattedShippingAmount: string
  formattedShippingTaxAmount: string
  formattedShippingTaxableAmount: string
  formattedSubtotalAmount: string
  formattedSubtotalTaxAmount: string
  formattedSubtotalTaxableAmount: string
  formattedTotalAmount: string
  formattedTotalAmountWithTaxes: string
  formattedTotalTaxAmount: string
  formattedTotalTaxableAmount: string
  freightTaxable: boolean
  fulfillmentStatus: string
  fulfillmentUpdatedAt: Date
  giftCardAmountCents: number
  giftCardAmountFloat: number
  giftCardCode: string
  giftCardOrCouponCode: string
  guest: boolean
  id: string
  languageCode: string
  lineItemOptionsCount: number
  metadata: object
  number: number
  paymentMethodAmountCents: number
  paymentMethodAmountFloat: number
  paymentMethodTaxAmountCents: number
  paymentMethodTaxAmountFloat: number
  paymentMethodTaxableAmountCents: number
  paymentMethodTaxableAmountFloat: number
  paymentSourceDetails: object
  paymentSourceId: string
  paymentSourceType: string
  paymentStatus: string
  paymentUpdatedAt: Date
  placeable: boolean
  placedAt: Date
  privacyUrl: string
  reference: string
  referenceOrigin: string
  returnUrl: string
  shipmentsCount: number
  shippingAmountCents: number
  shippingAmountFloat: number
  shippingCountryCodeLock: string
  shippingTaxAmountCents: number
  shippingTaxAmountFloat: number
  shippingTaxableAmountCents: number
  shippingTaxableAmountFloat: number
  skusCount: string
  status: string
  subtotalAmountCents: number
  subtotalAmountFloat: number
  subtotalTaxAmountCents: number
  subtotalTaxAmountFloat: number
  subtotalTaxableAmountCents: number
  subtotalTaxableAmountFloat: number
  taxIncluded: boolean
  taxRate: number
  termsUrl: string
  token: string
  totalAmountCents: number
  totalAmountFloat: number
  totalAmountWithTaxesCents: number
  totalAmountWithTaxesFloat: number
  totalTaxAmountCents: number
  totalTaxAmountFloat: number
  totalTaxableAmountCents: number
  totalTaxableAmountFloat: number
  updatedAt: Date
  market: () => SingleRelationship<MarketCollection>
  customer: () => SingleRelationship<CustomerCollection>
  shippingAddress: () => SingleRelationship<AddressCollection>
  paymentSource: () => SingleRelationship<
    | StripePaymentCollection
    | WireTransferCollection
    | PaypalPaymentCollection
    | BraintreePaymentCollection
    | AdyenPaymentCollection
  >
  loadPaymentSource: () => SingleRelationship<
    | StripePaymentCollection
    | WireTransferCollection
    | PaypalPaymentCollection
    | BraintreePaymentCollection
    | AdyenPaymentCollection
  >
  loadBillingAddress: () => SingleRelationship<AddressCollection>
  loadShippingAddress: () => SingleRelationship<AddressCollection>
  billingAddress: () => SingleRelationship<AddressCollection>
  paymentMethod: () => SingleRelationship<PaymentMethodCollection>
  loadPaymentMethod: () => SingleRelationship<PaymentMethodCollection>
  lineItems: () => MultiRelationship<LineItemCollection>
  availablePaymentMethods: () => MultiRelationship<PaymentMethodCollection>
  loadAvailablePaymentMethods: () => MultiRelationship<PaymentMethodCollection>
  shipments: () => MultiRelationship<ShipmentCollection>
  loadShipments: () => MultiRelationship<ShipmentCollection>
  availableCustomerPaymentSources: () => MultiRelationship<
    CustomerPaymentSourceCollection
  >
  loadAvailableCustomerPaymentSources: () => MultiRelationship<
    CustomerPaymentSourceCollection
  >
  transactions: () => MultiRelationship<TransactionCollection>
  loadTransactions: () => MultiRelationship<TransactionCollection>
  authorizations: () => MultiRelationship<AuthorizationCollection>
  loadaAuthorizations: () => MultiRelationship<AuthorizationCollection>
  captures: () => MultiRelationship<CaptureCollection>
  loadCaptures: () => MultiRelationship<CaptureCollection>
  voids: () => MultiRelationship<VoidCollection>
  loadVoids: () => MultiRelationship<VoidCollection>
  refunds: () => MultiRelationship<RefundCollection>
  loadRefunds: () => MultiRelationship<RefundCollection>
  static define() {
    this.attributes(
      '_approve',
      '_billingAddressCloneId',
      '_billingAddressSameAsShipping',
      '_cancel',
      '_capture',
      '_customerPaymentSourceId',
      '_place',
      '_refresh',
      '_refund',
      '_saveBillingAddressToCustomerAddressBook',
      '_savePaymentSourceToCustomerWallet',
      '_saveShippingAddressToCustomerAddressBook',
      '_shippingAddressCloneId',
      '_shippingAddressSameAsBilling',
      '_updateTaxes',
      'adjustmentAmountCents',
      'adjustmentAmountFloat',
      'adjustmentTaxAmountCents',
      'adjustmentTaxAmountFloat',
      'approvedAt',
      'archivedAt',
      'cancelledAt',
      'cartUrl',
      'checkoutUrl',
      'countryCode',
      'couponCode',
      'createdAt',
      'currencyCode',
      'customerEmail',
      'customerPassword',
      'discountAmountCents',
      'discountAmountFloat',
      'discountTaxAmountCents',
      'discountTaxAmountFloat',
      'discountTaxableAmountCents',
      'discountTaxableAmountFloat',
      'editable',
      'feesAmountCents',
      'feesAmountFloat',
      'formattedAdjustmentAmount',
      'formattedAdjustmentTaxAmount',
      'formattedDiscountAmount',
      'formattedDiscountTaxAmount',
      'formattedDiscountTaxableAmount',
      'formattedFeesAmount',
      'formattedGiftCardAmount',
      'formattedPaymentMethodAmount',
      'formattedPaymentMethodTaxAmount',
      'formattedPaymentMethodTaxableAmount',
      'formattedShippingAmount',
      'formattedShippingTaxAmount',
      'formattedShippingTaxableAmount',
      'formattedSubtotalAmount',
      'formattedSubtotalTaxAmount',
      'formattedSubtotalTaxableAmount',
      'formattedTotalAmount',
      'formattedTotalAmountWithTaxes',
      'formattedTotalTaxAmount',
      'formattedTotalTaxableAmount',
      'freightTaxable',
      'fulfillmentStatus',
      'fulfillmentUpdatedAt',
      'giftCardAmountCents',
      'giftCardAmountFloat',
      'giftCardCode',
      'giftCardOrCouponCode',
      'guest',
      'id',
      'languageCode',
      'lineItemOptionsCount',
      'metadata',
      'number',
      'paymentMethodAmountCents',
      'paymentMethodAmountFloat',
      'paymentMethodTaxAmountCents',
      'paymentMethodTaxAmountFloat',
      'paymentMethodTaxableAmountCents',
      'paymentMethodTaxableAmountFloat',
      'paymentSourceDetails',
      'paymentStatus',
      'paymentUpdatedAt',
      'placeable',
      'placedAt',
      'privacyUrl',
      'reference',
      'referenceOrigin',
      'returnUrl',
      'shipmentsCount',
      'shippingAmountCents',
      'shippingAmountFloat',
      'shippingCountryCodeLock',
      'shippingTaxAmountCents',
      'shippingTaxAmountFloat',
      'shippingTaxableAmountCents',
      'shippingTaxableAmountFloat',
      'skusCount',
      'status',
      'subtotalAmountCents',
      'subtotalAmountFloat',
      'subtotalTaxAmountCents',
      'subtotalTaxAmountFloat',
      'subtotalTaxableAmountCents',
      'subtotalTaxableAmountFloat',
      'taxIncluded',
      'taxRate',
      'termsUrl',
      'token',
      'totalAmountCents',
      'totalAmountFloat',
      'totalAmountWithTaxesCents',
      'totalAmountWithTaxesFloat',
      'totalTaxAmountCents',
      'totalTaxAmountFloat',
      'totalTaxableAmountCents',
      'totalTaxableAmountFloat',
      'updatedAt'
    )

    this.hasOne('market', { className: 'Market' }) // Required
    this.hasOne('customer', { className: 'Customer' })
    this.hasOne('shippingAddress', { className: 'Address' })
    this.hasOne('billingAddress', { className: 'Address' })
    this.hasOne('paymentMethod', { className: 'PaymentMethod' })
    this.hasMany('availablePaymentMethods', { className: 'PaymentMethod' })
    this.hasMany('lineItems', { className: 'LineItem' })
    this.hasMany('shipments', { className: 'Shipment' })
    this.hasMany('transactions', { className: 'Transaction' })
    this.hasMany('authorizations', { className: 'Authorization' })
    this.hasMany('captures', { className: 'Capture' })
    this.hasMany('voids', { className: 'Void' })
    this.hasMany('refunds', { className: 'Refund' })
    this.hasMany('availableCustomerPaymentSources', {
      className: 'CustomerPaymentSource',
    })
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
