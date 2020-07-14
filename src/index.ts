import Address, { AddressCollection } from './resources/Address'
import Attachment, { AttachmentCollection } from './resources/Attachment'
import CreditCard, { CreditCardCollection } from './resources/CreditCard'
import CustomerAddress, {
  CustomerAddressCollection,
} from './resources/CustomerAddress'
import CustomerGroup, {
  CustomerGroupCollection,
} from './resources/CustomerGroup'
import CustomerPasswordReset, {
  CustomerPasswordResetCollection,
} from './resources/CustomerPasswordReset'
import CustomerPaymentSource, {
  CustomerPaymentSourceCollection,
} from './resources/CustomerPaymentSource'
import CustomerSubscription, {
  CustomerSubscriptionCollection,
} from './resources/CustomerSubscription'
import Customer, { CustomerCollection } from './resources/Customer'
import DeliveryLeadTime, {
  DeliveryLeadTimeCollection,
} from './resources/DeliveryLeadTime'
import Import, { ImportCollection } from './resources/Import'
import InStockSubscription, {
  InStockSubscriptionCollection,
} from './resources/InStockSubscription'
import InventoryModel, {
  InventoryModelCollection,
} from './resources/InventoryModel'
import LineItemOption, {
  LineItemOptionCollection,
} from './resources/LineItemOption'
import LineItem, { LineItemCollection } from './resources/LineItem'
import Market, { MarketCollection } from './resources/Market'
import Merchant, { MerchantCollection } from './resources/Merchant'
import Order, { OrderCollection } from './resources/Order'
import Parcel, { ParcelCollection } from './resources/Parcel'
import PaymentMethod, {
  PaymentMethodCollection,
} from './resources/PaymentMethod'
import PaymentGateway, {
  PaymentGatewayCollection,
} from './resources/PaymentGateway'
import PaypalPayment, {
  PaypalPaymentCollection,
} from './resources/PaypalPayment'
import Price, { PriceCollection } from './resources/Price'
import PriceList, { PriceListCollection } from './resources/PriceList'
import Shipment, { ShipmentCollection } from './resources/Shipment'
import ShippingCategory, {
  ShippingCategoryCollection,
} from './resources/ShippingCategory'
import ShippingMethod, {
  ShippingMethodCollection,
} from './resources/ShippingMethod'
import ShippingZone, { ShippingZoneCollection } from './resources/ShippingZone'
import SkuOption, { SkuOptionCollection } from './resources/SkuOption'
import Sku, { SkuCollection } from './resources/Sku'
import SkuList, { SkuListCollection } from './resources/SkuList'
import SkuListItem, { SkuListItemCollection } from './resources/SkuListItem'
import StockItem, { StockItemCollection } from './resources/StockItem'
import StockLevel, { StockLevelCollection } from './resources/StockLevel'
import StockLocation, {
  StockLocationCollection,
} from './resources/StockLocation'
import Webhook, { WebhookCollection } from './resources/Webhook'
import WireTransfer, { WireTransferCollection } from './resources/WireTransfer'
import init, { Init } from './resources/Initialize'
import Geocoder, { GeocoderCollection } from './resources/Geocoder'
import PaymentSource, {
  PaymentSourceCollection,
} from './resources/PaymentSource'
import Item, { ItemCollection } from './resources/Item'
import Attachable, { AttachableCollection } from './resources/Attachable'
import GiftCard, { GiftCardCollection } from './resources/GiftCard'
import GiftCardRecipient, {
  GiftCardRecipientCollection,
} from './resources/GiftCardRecipient'
import AdyenPayment, { AdyenPaymentCollection } from './resources/AdyenPayment'
import BraintreePayment, {
  BraintreePaymentCollection,
} from './resources/BraintreePayment'
import StripePayment, {
  StripePaymentCollection,
} from './resources/StripePayment'
import { BaseResource } from './resources/@types/Library'
import ExternalPayment, {
  ExternalPaymentCollection,
} from './resources/ExternalPayment'
import Package, { PackageCollection } from './resources/Package'

// export {
//   AddressCollection,
//   AdyenPaymentCollection,
//   AttachableCollection,
//   AttachmentCollection,
//   BaseResource,
//   BraintreePaymentCollection,
//   Collection,
//   CollectionResponse,
//   CreditCardCollection,
//   CustomerAddressCollection,
//   CustomerCollection,
//   CustomerGroupCollection,
//   CustomerPasswordResetCollection,
//   CustomerPaymentSourceCollection,
//   CustomerSubscriptionCollection,
//   DeliveryLeadTimeCollection,
//   ExternalPaymentCollection,
//   GeocoderCollection,
//   GiftCardCollection,
//   GiftCardRecipientCollection,
//   ImportCollection,
//   InStockSubscriptionCollection,
//   InventoryCollection,
//   InventoryModelCollection,
//   Library,
//   LineItemCollection,
//   LineItemOptionCollection,
//   MarketCollection,
//   MerchantCollection,
//   OrderCollection,
//   PackageCollection,
//   ParcelCollection,
//   PaymentGatewayCollection,
//   PaymentMethodCollection,
//   PaymentSourceCollection,
//   PaypalPaymentCollection,
//   PriceCollection,
//   PriceListCollection,
//   ShipmentCollection,
//   ShippingCategoryCollection,
//   ShippingMethodCollection,
//   ShippingZoneCollection,
//   SkuCollection,
//   SkuListCollection,
//   SkuListItemCollection,
//   SkuOptionCollection,
//   StockItemCollection,
//   StockLevelCollection,
//   StockLocationCollection,
//   StripePaymentCollection,
//   WebhookCollection,
//   WireTransferCollection,
// }

export interface CLayer {
  Address: BaseResource<AddressCollection>
  AdyenPayment: BaseResource<AdyenPaymentCollection>
  Attachable: BaseResource<AttachableCollection>
  Attachment: BaseResource<AttachmentCollection>
  BraintreePayment: BaseResource<BraintreePaymentCollection>
  CreditCard: BaseResource<CreditCardCollection>
  Customer: BaseResource<CustomerCollection>
  CustomerAddress: BaseResource<CustomerAddressCollection>
  CustomerGroup: BaseResource<CustomerGroupCollection>
  CustomerPasswordReset: BaseResource<CustomerPasswordResetCollection>
  CustomerPaymentSource: BaseResource<CustomerPaymentSourceCollection>
  CustomerSubscription: BaseResource<CustomerSubscriptionCollection>
  DeliveryLeadTime: BaseResource<DeliveryLeadTimeCollection>
  ExternalPayment: BaseResource<ExternalPaymentCollection>
  Geocoder: BaseResource<GeocoderCollection>
  GiftCard: BaseResource<GiftCardCollection>
  GiftCardRecipient: BaseResource<GiftCardRecipientCollection>
  Import: BaseResource<ImportCollection>
  InStockSubscription: BaseResource<InStockSubscriptionCollection>
  InventoryModel: BaseResource<InventoryModelCollection>
  Item: BaseResource<ItemCollection>
  LineItem: BaseResource<LineItemCollection>
  LineItemOption: BaseResource<LineItemOptionCollection>
  Market: BaseResource<MarketCollection>
  Merchant: BaseResource<MerchantCollection>
  Order: BaseResource<OrderCollection>
  Package: BaseResource<PackageCollection>
  Parcel: BaseResource<ParcelCollection>
  PaymentGateway: BaseResource<PaymentGatewayCollection>
  PaymentMethod: BaseResource<PaymentMethodCollection>
  PaymentSource: BaseResource<PaymentSourceCollection>
  PaypalPayment: BaseResource<PaypalPaymentCollection>
  Price: BaseResource<PriceCollection>
  PriceList: BaseResource<PriceListCollection>
  Shipment: BaseResource<ShipmentCollection>
  ShippingCategory: BaseResource<ShippingCategoryCollection>
  ShippingMethod: BaseResource<ShippingMethodCollection>
  ShippingZone: BaseResource<ShippingZoneCollection>
  Sku: BaseResource<SkuCollection>
  SkuList: BaseResource<SkuListCollection>
  SkuListItem: BaseResource<SkuListItemCollection>
  SkuOption: BaseResource<SkuOptionCollection>
  StockItem: BaseResource<StockItemCollection>
  StockLevel: BaseResource<StockLevelCollection>
  StockLocation: BaseResource<StockLocationCollection>
  StripePayment: BaseResource<StripePaymentCollection>
  Webhook: BaseResource<WebhookCollection>
  WireTransfer: BaseResource<WireTransferCollection>
  init: Init
}
const CLayer: CLayer = {
  Address,
  AdyenPayment,
  Attachable,
  Attachment,
  BraintreePayment,
  CreditCard,
  Customer,
  CustomerAddress,
  CustomerGroup,
  CustomerPasswordReset,
  CustomerPaymentSource,
  CustomerSubscription,
  DeliveryLeadTime,
  ExternalPayment,
  Geocoder,
  GiftCard,
  GiftCardRecipient,
  Import,
  InStockSubscription,
  InventoryModel,
  Item,
  LineItem,
  LineItemOption,
  Market,
  Merchant,
  Order,
  Package,
  Parcel,
  PaymentGateway,
  PaymentMethod,
  PaymentSource,
  PaypalPayment,
  Price,
  PriceList,
  Shipment,
  ShippingCategory,
  ShippingMethod,
  ShippingZone,
  Sku,
  SkuList,
  SkuListItem,
  SkuOption,
  StockItem,
  StockLevel,
  StockLocation,
  StripePayment,
  Webhook,
  WireTransfer,
  init,
}

const initCLayer = init

export {
  Address,
  AdyenPayment,
  Attachable,
  Attachment,
  BraintreePayment,
  CreditCard,
  Customer,
  CustomerAddress,
  CustomerGroup,
  CustomerPasswordReset,
  CustomerPaymentSource,
  CustomerSubscription,
  DeliveryLeadTime,
  ExternalPayment,
  Geocoder,
  GiftCard,
  GiftCardRecipient,
  Import,
  InStockSubscription,
  InventoryModel,
  Item,
  LineItem,
  LineItemOption,
  Market,
  Merchant,
  Order,
  Package,
  Parcel,
  PaymentGateway,
  PaymentMethod,
  PaymentSource,
  PaypalPayment,
  Price,
  PriceList,
  Shipment,
  ShippingCategory,
  ShippingMethod,
  ShippingZone,
  Sku,
  SkuList,
  SkuListItem,
  SkuOption,
  StockItem,
  StockLevel,
  StockLocation,
  StripePayment,
  Webhook,
  WireTransfer,
  initCLayer,
}

export default CLayer
