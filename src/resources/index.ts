import Address, { AddressCollection } from './Address'
import Attachment, { AttachmentCollection } from './Attachment'
import CreditCard, { CreditCardCollection } from './CreditCard'
import CustomerAddress, { CustomerAddressCollection } from './CustomerAddress'
import CustomerGroup, { CustomerGroupCollection } from './CustomerGroup'
import CustomerPasswordReset, {
  CustomerPasswordResetCollection,
} from './CustomerPasswordReset'
import CustomerPaymentSource, {
  CustomerPaymentSourceCollection,
} from './CustomerPaymentSource'
import CustomerSubscription, {
  CustomerSubscriptionCollection,
} from './CustomerSubscription'
import Customer, { CustomerCollection } from './Customer'
import DeliveryLeadTime, {
  DeliveryLeadTimeCollection,
} from './DeliveryLeadTime'
import Import, { ImportCollection } from './Import'
import InStockSubscription, {
  InStockSubscriptionCollection,
} from './InStockSubscription'
import InventoryModel, { InventoryModelCollection } from './InventoryModel'
import LineItemOption, { LineItemOptionCollection } from './LineItemOption'
import LineItem, { LineItemCollection } from './LineItem'
import Market, { MarketCollection } from './Market'
import Merchant, { MerchantCollection } from './Merchant'
import Order, { OrderCollection } from './Order'
import Parcel, { ParcelCollection } from './Parcel'
import PaymentMethod, { PaymentMethodCollection } from './PaymentMethod'
import PaymentGateway, { PaymentGatewayCollection } from './PaymentGateway'
import PaypalPayment, { PaypalPaymentCollection } from './PaypalPayment'
import Price, { PriceCollection } from './Price'
import PriceList, { PriceListCollection } from './PriceList'
import Shipment, { ShipmentCollection } from './Shipment'
import ShippingCategory, {
  ShippingCategoryCollection,
} from './ShippingCategory'
import ShippingMethod, { ShippingMethodCollection } from './ShippingMethod'
import ShippingZone, { ShippingZoneCollection } from './ShippingZone'
import SkuOption, { SkuOptionCollection } from './SkuOption'
import Sku, { SkuCollection, InventoryCollection } from './Sku'
import SkuList, { SkuListCollection } from './SkuList'
import SkuListItem, { SkuListItemCollection } from './SkuListItem'
import StockItem, { StockItemCollection } from './StockItem'
import StockLevel, { StockLevelCollection } from './StockLevel'
import StockLocation, { StockLocationCollection } from './StockLocation'
import Webhook, { WebhookCollection } from './Webhook'
import WireTransfer, { WireTransferCollection } from './WireTransfer'
import init, { Init } from './Initialize'
import Geocoder, { GeocoderCollection } from './Geocoder'
import PaymentSource, { PaymentSourceCollection } from './PaymentSource'
import Item, { ItemCollection } from './Item'
import Attachable, { AttachableCollection } from './Attachable'
import GiftCard, { GiftCardCollection } from './GiftCard'
import GiftCardRecipient, {
  GiftCardRecipientCollection,
} from './GiftCardRecipient'
import AdyenPayment, { AdyenPaymentCollection } from './AdyenPayment'
import BraintreePayment, {
  BraintreePaymentCollection,
} from './BraintreePayment'
import StripePayment, { StripePaymentCollection } from './StripePayment'
import Library, {
  Collection,
  CollectionResponse,
  BaseResource,
} from './@types/Library'
import ExternalPayment, { ExternalPaymentCollection } from './ExternalPayment'
import Package, { PackageCollection } from './Package'

export {
  AddressCollection,
  AdyenPaymentCollection,
  AttachableCollection,
  AttachmentCollection,
  BaseResource,
  BraintreePaymentCollection,
  Collection,
  CollectionResponse,
  CreditCardCollection,
  CustomerAddressCollection,
  CustomerCollection,
  CustomerGroupCollection,
  CustomerPasswordResetCollection,
  CustomerPaymentSourceCollection,
  CustomerSubscriptionCollection,
  DeliveryLeadTimeCollection,
  ExternalPaymentCollection,
  GeocoderCollection,
  GiftCardCollection,
  GiftCardRecipientCollection,
  ImportCollection,
  InStockSubscriptionCollection,
  InventoryCollection,
  InventoryModelCollection,
  Library,
  LineItemCollection,
  LineItemOptionCollection,
  MarketCollection,
  MerchantCollection,
  OrderCollection,
  PackageCollection,
  ParcelCollection,
  PaymentGatewayCollection,
  PaymentMethodCollection,
  PaymentSourceCollection,
  PaypalPaymentCollection,
  PriceCollection,
  PriceListCollection,
  ShipmentCollection,
  ShippingCategoryCollection,
  ShippingMethodCollection,
  ShippingZoneCollection,
  SkuCollection,
  SkuListCollection,
  SkuListItemCollection,
  SkuOptionCollection,
  StockItemCollection,
  StockLevelCollection,
  StockLocationCollection,
  StripePaymentCollection,
  WebhookCollection,
  WireTransferCollection,
}

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
