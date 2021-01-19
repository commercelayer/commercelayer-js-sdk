import Address, { AddressCollection } from '#resources/Address'
import Attachment, { AttachmentCollection } from '#resources/Attachment'
import CustomerAddress, {
  CustomerAddressCollection,
} from '#resources/CustomerAddress'
import CustomerGroup, {
  CustomerGroupCollection,
} from '#resources/CustomerGroup'
import CustomerPasswordReset, {
  CustomerPasswordResetCollection,
} from '#resources/CustomerPasswordReset'
import CustomerPaymentSource, {
  CustomerPaymentSourceCollection,
} from '#resources/CustomerPaymentSource'
import CustomerSubscription, {
  CustomerSubscriptionCollection,
} from '#resources/CustomerSubscription'
import Customer, { CustomerCollection } from '#resources/Customer'
import DeliveryLeadTime, {
  DeliveryLeadTimeCollection,
} from '#resources/DeliveryLeadTime'
import Import, { ImportCollection } from '#resources/Import'
import InStockSubscription, {
  InStockSubscriptionCollection,
} from '#resources/InStockSubscription'
import InventoryModel, {
  InventoryModelCollection,
} from '#resources/InventoryModel'
import LineItemOption, {
  LineItemOptionCollection,
} from '#resources/LineItemOption'
import LineItem, { LineItemCollection } from '#resources/LineItem'
import Market, { MarketCollection } from '#resources/Market'
import Merchant, { MerchantCollection } from '#resources/Merchant'
import Order, { OrderCollection } from '#resources/Order'
import Parcel, { ParcelCollection } from '#resources/Parcel'
import PaymentMethod, {
  PaymentMethodCollection,
} from '#resources/PaymentMethod'
import PaymentGateway, {
  PaymentGatewayCollection,
} from '#resources/PaymentGateway'
import PaypalPayment, {
  PaypalPaymentCollection,
} from '#resources/PaypalPayment'
import Price, { PriceCollection } from '#resources/Price'
import PriceList, { PriceListCollection } from '#resources/PriceList'
import Shipment, { ShipmentCollection } from '#resources/Shipment'
import ShippingCategory, {
  ShippingCategoryCollection,
} from '#resources/ShippingCategory'
import ShippingMethod, {
  ShippingMethodCollection,
} from '#resources/ShippingMethod'
import ShippingZone, { ShippingZoneCollection } from '#resources/ShippingZone'
import SkuOption, { SkuOptionCollection } from '#resources/SkuOption'
import Sku, { SkuCollection } from '#resources/Sku'
import SkuList, { SkuListCollection } from '#resources/SkuList'
import SkuListItem, { SkuListItemCollection } from '#resources/SkuListItem'
import StockItem, { StockItemCollection } from '#resources/StockItem'
import InventoryStockLocation, {
  InventoryStockLocationCollection,
} from '#resources/InventoryStockLocation'
import StockLocation, {
  StockLocationCollection,
} from '#resources/StockLocation'
import Webhook, { WebhookCollection } from '#resources/Webhook'
import WireTransfer, { WireTransferCollection } from '#resources/WireTransfer'
import init, { Init } from '#resources/Initialize'
import Geocoder, { GeocoderCollection } from '#resources/Geocoder'
import PaymentSource, {
  PaymentSourceCollection,
} from '#resources/PaymentSource'
import Item, { ItemCollection } from '#resources/Item'
import Attachable, { AttachableCollection } from '#resources/Attachable'
import GiftCard, { GiftCardCollection } from '#resources/GiftCard'
import GiftCardRecipient, {
  GiftCardRecipientCollection,
} from '#resources/GiftCardRecipient'
import AdyenPayment, { AdyenPaymentCollection } from '#resources/AdyenPayment'
import BraintreePayment, {
  BraintreePaymentCollection,
} from '#resources/BraintreePayment'
import StripePayment, {
  StripePaymentCollection,
} from '#resources/StripePayment'
import { BaseResource } from './typings/Library'
import ExternalPayment, {
  ExternalPaymentCollection,
} from '#resources/ExternalPayment'
import Package, { PackageCollection } from '#resources/Package'
import Adjustment, { AdjustmentCollection } from '#resources/Adjustment'
import Capture, { CaptureCollection } from '#resources/Capture'
import Authorization, {
  AuthorizationCollection,
} from '#resources/Authorization'
import BillingInfoValidationRule, {
  BillingInfoValidationRuleCollection,
} from '#resources/BillingInfoValidationRule'
import Refund, { RefundCollection } from '#resources/Refund'
import Void, { VoidCollection } from '#resources/Void'
import CouponCodesPromotionRule, {
  CouponCodesPromotionRuleCollection,
} from '#resources/CouponCodesPromotionRule'
import Coupon, { CouponCollection } from '#resources/Coupon'
import ExternalPromotion, {
  ExternalPromotionCollection,
} from '#resources/ExternalPromotion'
import FixedAmountPromotion, {
  FixedAmountPromotionCollection,
} from '#resources/FixedAmountPromotion'
import FreeShippingPromotion, {
  FreeShippingPromotionCollection,
} from '#resources/FreeShippingPromotion'
import OrderAmountPromotionRule, {
  OrderAmountPromotionRuleCollection,
} from '#resources/OrderAmountPromotionRule'
import PercentageDiscountPromotion, {
  PercentageDiscountPromotionCollection,
} from '#resources/PercentageDiscountPromotion'
import PromotionRule, {
  PromotionRuleCollection,
} from '#resources/PromotionRule'
import Promotion, { PromotionCollection } from '#resources/Promotion'
import SkuListPromotionRule, {
  SkuListPromotionRuleCollection,
} from '#resources/SkuListPromotionRule'
import InventoryReturnLocation, {
  InventoryReturnLocationCollection,
} from '#resources/InventoryReturnLocation'
import Return, { ReturnCollection } from '#resources/Return'
import ReturnLineItem, {
  ReturnLineItemCollection,
} from '#resources/ReturnLineItem'
import ShipmentLineItem, {
  ShipmentLineItemCollection,
} from '#resources/ShipmentLineItem'

export {
  AddressCollection,
  AdjustmentCollection,
  AdyenPaymentCollection,
  AttachableCollection,
  AttachmentCollection,
  AuthorizationCollection,
  BillingInfoValidationRuleCollection,
  BraintreePaymentCollection,
  CaptureCollection,
  CouponCodesPromotionRuleCollection,
  CouponCollection,
  CustomerAddressCollection,
  CustomerCollection,
  CustomerGroupCollection,
  CustomerPasswordResetCollection,
  CustomerPaymentSourceCollection,
  CustomerSubscriptionCollection,
  DeliveryLeadTimeCollection,
  ExternalPaymentCollection,
  ExternalPromotionCollection,
  FixedAmountPromotionCollection,
  FreeShippingPromotionCollection,
  GeocoderCollection,
  GiftCardCollection,
  GiftCardRecipientCollection,
  ImportCollection,
  InStockSubscriptionCollection,
  InventoryReturnLocationCollection,
  InventoryModelCollection,
  LineItemCollection,
  LineItemOptionCollection,
  MarketCollection,
  MerchantCollection,
  OrderAmountPromotionRuleCollection,
  OrderCollection,
  PackageCollection,
  ParcelCollection,
  PaymentGatewayCollection,
  PaymentMethodCollection,
  PaymentSourceCollection,
  PaypalPaymentCollection,
  PercentageDiscountPromotionCollection,
  PriceCollection,
  PriceListCollection,
  PromotionCollection,
  PromotionRuleCollection,
  RefundCollection,
  ReturnCollection,
  ReturnLineItemCollection,
  ShipmentLineItemCollection,
  ShipmentCollection,
  ShippingCategoryCollection,
  ShippingMethodCollection,
  ShippingZoneCollection,
  SkuCollection,
  SkuListCollection,
  SkuListItemCollection,
  SkuListPromotionRuleCollection,
  SkuOptionCollection,
  StockItemCollection,
  InventoryStockLocationCollection,
  StockLocationCollection,
  StripePaymentCollection,
  VoidCollection,
  WebhookCollection,
  WireTransferCollection,
}

export interface CLayer {
  Address: BaseResource<AddressCollection>
  Adjustment: BaseResource<AdjustmentCollection>
  AdyenPayment: BaseResource<AdyenPaymentCollection>
  Attachable: BaseResource<AttachableCollection>
  Attachment: BaseResource<AttachmentCollection>
  Authorization: BaseResource<AuthorizationCollection>
  BillingInfoValidationRule: BaseResource<BillingInfoValidationRuleCollection>
  BraintreePayment: BaseResource<BraintreePaymentCollection>
  Capture: BaseResource<CaptureCollection>
  Coupon: BaseResource<CouponCollection>
  CouponCodesPromotionRule: BaseResource<CouponCodesPromotionRuleCollection>
  Customer: BaseResource<CustomerCollection>
  CustomerAddress: BaseResource<CustomerAddressCollection>
  CustomerGroup: BaseResource<CustomerGroupCollection>
  CustomerPasswordReset: BaseResource<CustomerPasswordResetCollection>
  CustomerPaymentSource: BaseResource<CustomerPaymentSourceCollection>
  CustomerSubscription: BaseResource<CustomerSubscriptionCollection>
  DeliveryLeadTime: BaseResource<DeliveryLeadTimeCollection>
  ExternalPayment: BaseResource<ExternalPaymentCollection>
  ExternalPromotion: BaseResource<ExternalPromotionCollection>
  FixedAmountPromotion: BaseResource<FixedAmountPromotionCollection>
  FreeShippingPromotion: BaseResource<FreeShippingPromotionCollection>
  Geocoder: BaseResource<GeocoderCollection>
  GiftCard: BaseResource<GiftCardCollection>
  GiftCardRecipient: BaseResource<GiftCardRecipientCollection>
  Import: BaseResource<ImportCollection>
  InStockSubscription: BaseResource<InStockSubscriptionCollection>
  InventoryModel: BaseResource<InventoryModelCollection>
  InventoryReturnLocation: BaseResource<InventoryReturnLocationCollection>
  Item: BaseResource<ItemCollection>
  LineItem: BaseResource<LineItemCollection>
  LineItemOption: BaseResource<LineItemOptionCollection>
  Market: BaseResource<MarketCollection>
  Merchant: BaseResource<MerchantCollection>
  Order: BaseResource<OrderCollection>
  OrderAmountPromotionRule: BaseResource<OrderAmountPromotionRuleCollection>
  Package: BaseResource<PackageCollection>
  Parcel: BaseResource<ParcelCollection>
  PaymentGateway: BaseResource<PaymentGatewayCollection>
  PaymentMethod: BaseResource<PaymentMethodCollection>
  PaymentSource: BaseResource<PaymentSourceCollection>
  PaypalPayment: BaseResource<PaypalPaymentCollection>
  PercentageDiscountPromotion: BaseResource<
    PercentageDiscountPromotionCollection
  >
  Price: BaseResource<PriceCollection>
  PriceList: BaseResource<PriceListCollection>
  Promotion: BaseResource<PromotionCollection>
  PromotionRule: BaseResource<PromotionRuleCollection>
  Refund: BaseResource<RefundCollection>
  Return: BaseResource<ReturnCollection>
  ReturnLineItem: BaseResource<ReturnLineItemCollection>
  Shipment: BaseResource<ShipmentCollection>
  ShipmentLineItem: BaseResource<ShipmentLineItemCollection>
  ShippingCategory: BaseResource<ShippingCategoryCollection>
  ShippingMethod: BaseResource<ShippingMethodCollection>
  ShippingZone: BaseResource<ShippingZoneCollection>
  Sku: BaseResource<SkuCollection>
  SkuList: BaseResource<SkuListCollection>
  SkuListItem: BaseResource<SkuListItemCollection>
  SkuListPromotionRule: BaseResource<SkuListPromotionRuleCollection>
  SkuOption: BaseResource<SkuOptionCollection>
  StockItem: BaseResource<StockItemCollection>
  InventoryStockLocation: BaseResource<InventoryStockLocationCollection>
  StockLocation: BaseResource<StockLocationCollection>
  StripePayment: BaseResource<StripePaymentCollection>
  Void: BaseResource<VoidCollection>
  Webhook: BaseResource<WebhookCollection>
  WireTransfer: BaseResource<WireTransferCollection>
  init: Init
}
const CLayer: CLayer = {
  Address,
  Adjustment,
  AdyenPayment,
  Attachable,
  Attachment,
  Authorization,
  BillingInfoValidationRule,
  BraintreePayment,
  Capture,
  Coupon,
  CouponCodesPromotionRule,
  Customer,
  CustomerAddress,
  CustomerGroup,
  CustomerPasswordReset,
  CustomerPaymentSource,
  CustomerSubscription,
  DeliveryLeadTime,
  ExternalPayment,
  ExternalPromotion,
  FixedAmountPromotion,
  FreeShippingPromotion,
  Geocoder,
  GiftCard,
  GiftCardRecipient,
  Import,
  InStockSubscription,
  InventoryModel,
  InventoryReturnLocation,
  Item,
  LineItem,
  LineItemOption,
  Market,
  Merchant,
  Order,
  OrderAmountPromotionRule,
  Package,
  Parcel,
  PaymentGateway,
  PaymentMethod,
  PaymentSource,
  PaypalPayment,
  PercentageDiscountPromotion,
  Price,
  PriceList,
  Promotion,
  PromotionRule,
  Refund,
  Return,
  ReturnLineItem,
  Shipment,
  ShipmentLineItem,
  ShippingCategory,
  ShippingMethod,
  ShippingZone,
  Sku,
  SkuList,
  SkuListItem,
  SkuListPromotionRule,
  SkuOption,
  StockItem,
  InventoryStockLocation,
  StockLocation,
  StripePayment,
  Void,
  Webhook,
  WireTransfer,
  init,
}

const initCLayer = init

export {
  Address,
  Adjustment,
  AdyenPayment,
  Attachable,
  Attachment,
  Authorization,
  BillingInfoValidationRule,
  BraintreePayment,
  Capture,
  Coupon,
  CouponCodesPromotionRule,
  Customer,
  CustomerAddress,
  CustomerGroup,
  CustomerPasswordReset,
  CustomerPaymentSource,
  CustomerSubscription,
  DeliveryLeadTime,
  ExternalPayment,
  ExternalPromotion,
  FixedAmountPromotion,
  FreeShippingPromotion,
  Geocoder,
  GiftCard,
  GiftCardRecipient,
  Import,
  InStockSubscription,
  InventoryModel,
  InventoryReturnLocation,
  Item,
  LineItem,
  LineItemOption,
  Market,
  Merchant,
  Order,
  OrderAmountPromotionRule,
  Package,
  Parcel,
  PaymentGateway,
  PaymentMethod,
  PaymentSource,
  PaypalPayment,
  PercentageDiscountPromotion,
  Price,
  PriceList,
  Promotion,
  PromotionRule,
  Refund,
  Return,
  ReturnLineItem,
  Shipment,
  ShipmentLineItem,
  ShippingCategory,
  ShippingMethod,
  ShippingZone,
  Sku,
  SkuList,
  SkuListItem,
  SkuListPromotionRule,
  SkuOption,
  StockItem,
  InventoryStockLocation,
  StockLocation,
  StripePayment,
  Void,
  Webhook,
  WireTransfer,
  initCLayer,
}

export default CLayer
