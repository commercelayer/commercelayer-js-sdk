import library from './library'
import BaseClass from '../utils/BaseClass'
import { LineItemCollection } from './LineItem'
import { Collection, CollectionProxy } from './@types/Library'
import { ShipmentCollection } from './Shipment'
import { PaymentMethodCollection } from './PaymentMethod'
import { MarketCollection } from './Market'
import { CustomerCollection } from './Customer'
import { AddressCollection } from './Address'

export class OrderCollection extends BaseClass {
  static className = 'Order'
  number: number
  status: string
  paymentStatus: string
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
  Place: number
  Cancel: number
  Approve: number
  Capture: number
  Refund: number
  UpdateTaxes: number
  BillingAddressCloneId: number
  ShippingAddressCloneId: number
  CustomerPaymentSourceId: number
  ShippingAddressSameAsBilling: number
  BillingAddressSameAsShipping: number
  SavePaymentSourceToCustomerWallet: number
  SaveShippingAddressToCustomerAddressBook: number
  SaveBillingAddressToCustomerAddressBook: number
  Refresh: number
  placedAt: Date
  approvedAt: Date
  cancelledAt: Date
  paymentUpdatedAt: Date
  fulfillmentUpdatedAt: Date
  id: string
  createdAt: Date
  updatedAt: Date
  reference: string
  metadata: object
  loadLineItems: () => CollectionProxy<LineItemCollection>
  loadAvailablePaymentMethods: () => CollectionProxy<PaymentMethodCollection>
  loadShipments: () => CollectionProxy<ShipmentCollection>
  lineItems: () => CollectionProxy<LineItemCollection>
  availablePaymentMethods: () => CollectionProxy<PaymentMethodCollection>
  shipments: () => CollectionProxy<ShipmentCollection>
  buildMarket: () => Collection<MarketCollection>
  buildCustomer: () => Collection<CustomerCollection>
  buildShippingAddress: () => Collection<AddressCollection>
  buildBillingAddress: () => Collection<AddressCollection>
  buildPaymentMethod: () => Collection<PaymentMethodCollection>
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
      'Place',
      'Cancel',
      'Approve',
      'Capture',
      'Refund',
      'UpdateTaxes',
      'BillingAddressCloneId',
      'ShippingAddressCloneId',
      'CustomerPaymentSourceId',
      'ShippingAddressSameAsBilling',
      'BillingAddressSameAsShipping',
      'SavePaymentSourceToCustomerWallet',
      'SaveShippingAddressToCustomerAddressBook',
      'SaveBillingAddressToCustomerAddressBook',
      'Refresh',
      'placedAt',
      'approvedAt',
      'cancelledAt',
      'paymentUpdatedAt',
      'fulfillmentUpdatedAt',
      'id',
      'createdAt',
      'updatedAt',
      'reference',
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
  if (this.paymentSourceId) delete this.paymentSourceId
  if (this.paymentSourceType) delete this.paymentSourceType
})

export default Order
