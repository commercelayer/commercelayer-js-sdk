import library from './library'
import { LineItemCollection } from './LineItem'
import { CollectionResponse, Collection } from './@types/Library'
import { ShipmentCollection } from './Shipment'
import { PaymentMethodCollection } from './PaymentMethod'
import { MarketCollection } from './Market'
import { CustomerCollection } from './Customer'
import { AddressCollection } from './Address'

export class OrderCollection extends library.Base {
  static className = 'Order'
  number: number
  status: string
  payment_status: string
  fulfillment_status: string
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
  paymentMethodAmount_cents: number
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
  shippingTaxableAmount_float: number
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
  lineItem_optionsCount: number
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
  _savePaymentSourceToCustomer_wallet: number
  _saveShippingAddressToCustomerAddress_book: number
  _saveBillingAddressToCustomerAddress_book: number
  _refresh: number
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
  lineItems: () => CollectionResponse<LineItemCollection>
  availablePaymentMethods: () => CollectionResponse<PaymentMethodCollection>
  shipments: () => CollectionResponse<ShipmentCollection>
  buildMarket: () => Collection<MarketCollection>
  buildCustomer: () => Collection<CustomerCollection>
  buildShippingAddress: () => Collection<AddressCollection>
  buildBillingAddress: () => Collection<AddressCollection>
  buildPaymentMethod: () => Collection<PaymentMethodCollection>
  static define() {
    this.attributes(
      'number',
      'status',
      'payment_status',
      'fulfillment_status',
      'guest',
      'editable',
      'placeable',
      'customer_email',
      'customer_password',
      'language_code',
      'currency_code',
      'tax_included',
      'tax_rate',
      'freight_taxable',
      'country_code',
      'shipping_country_code_lock',
      'coupon_code',
      'subtotal_amount_cents',
      'subtotal_amount_float',
      'formatted_subtotal_amount',
      'shipping_amount_cents',
      'shipping_amount_float',
      'formatted_shipping_amount',
      'payment_method_amount_cents',
      'payment_method_amount_float',
      'formatted_payment_method_amount',
      'discount_amount_cents',
      'discount_amount_float',
      'formatted_discount_amount',
      'total_tax_amount_cents',
      'total_tax_amount_float',
      'formatted_total_tax_amount',
      'subtotal_tax_amount_cents',
      'subtotal_tax_amount_float',
      'formatted_subtotal_tax_amount',
      'shipping_tax_amount_cents',
      'shipping_tax_amount_float',
      'formatted_shipping_tax_amount',
      'payment_method_tax_amount_cents',
      'payment_method_tax_amount_float',
      'formatted_payment_method_tax_amount',
      'discount_tax_amount_cents',
      'discount_tax_amount_float',
      'formatted_discount_tax_amount',
      'total_amount_cents',
      'total_amount_float',
      'formatted_total_amount',
      'total_taxable_amount_cents',
      'total_taxable_amount_float',
      'formatted_total_taxable_amount',
      'subtotal_taxable_amount_cents',
      'subtotal_taxable_amount_float',
      'formatted_subtotal_taxable_amount',
      'shipping_taxable_amount_cents',
      'shipping_taxable_amount_float',
      'formatted_shipping_taxable_amount',
      'payment_method_taxable_amount_cents',
      'payment_method_taxable_amount_float',
      'formatted_payment_method_taxable_amount',
      'discount_taxable_amount_cents',
      'discount_taxable_amount_float',
      'formatted_discount_taxable_amount',
      'total_amount_with_taxes_cents',
      'total_amount_with_taxes_float',
      'formatted_total_amount_with_taxes',
      'fees_amount_cents',
      'fees_amount_float',
      'formatted_fees_amount',
      'skus_count',
      'line_item_options_count',
      'shipments_count',
      'payment_source_details',
      'token',
      'cart_url',
      'return_url',
      'terms_url',
      'privacy_url',
      'checkout_url',
      '_place',
      '_cancel',
      '_approve',
      '_capture',
      '_refund',
      '_update_taxes',
      '_billing_address_clone_id',
      '_shipping_address_clone_id',
      '_customer_payment_source_id',
      '_shipping_address_same_as_billing',
      '_billing_address_same_as_shipping',
      '_save_payment_source_to_customer_wallet',
      '_save_shipping_address_to_customer_address_book',
      '_save_billing_address_to_customer_address_book',
      '_refresh',
      'placed_at',
      'approved_at',
      'cancelled_at',
      'payment_updated_at',
      'fulfillment_updated_at',
      'id',
      'created_at',
      'updated_at',
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
