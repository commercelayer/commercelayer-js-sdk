import Address, { AddressCollection } from './Address'
import Attachment, { AttachmentCollection } from './Attachment'
import CreditCard, { CreditCardCollection } from './CreditCard'
import CustomerAddress, { CustomerAddressCollection } from './CustomerAddress'
import CustomerGroup, { CustomerGroupCollection } from './CustomerGroup'
import CustomerPasswordReset, {
  CustomerPasswordResetCollection
} from './CustomerPasswordReset'
import CustomerPaymentSource, {
  CustomerPaymentSourceCollection
} from './CustomerPaymentSource'
import CustomerSubscription, {
  CustomerSubscriptionCollection
} from './CustomerSubscription'
import Customer, { CustomerCollection } from './Customer'
import DeliveryLeadTime, {
  DeliveryLeadTimeCollection
} from './DeliveryLeadTime'
import Import, { ImportCollection } from './Import'
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
  ShippingCategoryCollection
} from './ShippingCategory'
import ShippingMethod, { ShippingMethodCollection } from './ShippingMethod'
import ShippingZone, { ShippingZoneCollection } from './ShippingZone'
import SkuOption, { SkuOptionCollection } from './SkuOption'
import Sku, { SkuCollection, InventoryCollection } from './Sku'
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
  GiftCardRecipientCollection
} from './GiftCardRecipient'
import AdyenPayment, { AdyenPaymentCollection } from './AdyenPayment'
import BraintreePayment, {
  BraintreePaymentCollection
} from './BraintreePayment'
import StripePayment, { StripePaymentCollection } from './StripePayment'
import Library, {
  Collection,
  CollectionResponse,
  BaseResource
} from './@types/Library'

export {
  Library,
  Collection,
  CollectionResponse,
  BaseResource,
  AddressCollection,
  AdyenPaymentCollection,
  AttachableCollection,
  AttachmentCollection,
  BraintreePaymentCollection,
  CreditCardCollection,
  CustomerAddressCollection,
  CustomerGroupCollection,
  CustomerPasswordResetCollection,
  CustomerPaymentSourceCollection,
  CustomerSubscriptionCollection,
  CustomerCollection,
  DeliveryLeadTimeCollection,
  GeocoderCollection,
  GiftCardCollection,
  GiftCardRecipientCollection,
  ImportCollection,
  InventoryModelCollection,
  LineItemCollection,
  LineItemOptionCollection,
  MarketCollection,
  MerchantCollection,
  OrderCollection,
  ParcelCollection,
  PaymentMethodCollection,
  PaymentGatewayCollection,
  PaymentSourceCollection,
  PaypalPaymentCollection,
  PriceCollection,
  PriceListCollection,
  ShipmentCollection,
  ShippingCategoryCollection,
  ShippingMethodCollection,
  ShippingZoneCollection,
  SkuCollection,
  InventoryCollection,
  SkuOptionCollection,
  StockItemCollection,
  StockLevelCollection,
  StockLocationCollection,
  StripePaymentCollection,
  WebhookCollection,
  WireTransferCollection
}

export interface CLayer {
  init: Init
  Address: BaseResource<AddressCollection>
  AdyenPayment: BaseResource<AdyenPaymentCollection>
  Attachment: BaseResource<AttachmentCollection>
  Attachable: BaseResource<AttachableCollection>
  BraintreePayment: BaseResource<BraintreePaymentCollection>
  CreditCard: BaseResource<CreditCardCollection>
  CustomerAddress: BaseResource<CustomerAddressCollection>
  CustomerGroup: BaseResource<CustomerGroupCollection>
  CustomerPasswordReset: BaseResource<CustomerPasswordResetCollection>
  CustomerPaymentSource: BaseResource<CustomerPaymentSourceCollection>
  CustomerSubscription: BaseResource<CustomerSubscriptionCollection>
  Customer: BaseResource<CustomerCollection>
  DeliveryLeadTime: BaseResource<DeliveryLeadTimeCollection>
  Geocoder: BaseResource<GeocoderCollection>
  GiftCard: BaseResource<GiftCardCollection>
  GiftCardRecipient: BaseResource<GiftCardRecipientCollection>
  Import: BaseResource<ImportCollection>
  InventoryModel: BaseResource<InventoryModelCollection>
  Item: BaseResource<ItemCollection>
  LineItemOption: BaseResource<LineItemOptionCollection>
  LineItem: BaseResource<LineItemCollection>
  Market: BaseResource<MarketCollection>
  Merchant: BaseResource<MerchantCollection>
  Order: BaseResource<OrderCollection>
  Parcel: BaseResource<ParcelCollection>
  PaymentMethod: BaseResource<PaymentMethodCollection>
  PaymentGateway: BaseResource<PaymentGatewayCollection>
  PaypalPayment: BaseResource<PaypalPaymentCollection>
  PaymentSource: BaseResource<PaymentSourceCollection>
  PriceList: BaseResource<PriceListCollection>
  Price: BaseResource<PriceCollection>
  Shipment: BaseResource<ShipmentCollection>
  ShippingCategory: BaseResource<ShippingCategoryCollection>
  ShippingMethod: BaseResource<ShippingMethodCollection>
  ShippingZone: BaseResource<ShippingZoneCollection>
  SkuOption: BaseResource<SkuOptionCollection>
  Sku: BaseResource<SkuCollection>
  StockItem: BaseResource<StockItemCollection>
  StockLevel: BaseResource<StockLevelCollection>
  StockLocation: BaseResource<StockLocationCollection>
  StripePayment: BaseResource<StripePaymentCollection>
  Webhook: BaseResource<WebhookCollection>
  WireTransfer: BaseResource<WireTransferCollection>
}
const CLayer: CLayer = {
  init,
  Address,
  AdyenPayment,
  Attachment,
  Attachable,
  BraintreePayment,
  CreditCard,
  CustomerAddress,
  CustomerGroup,
  CustomerPasswordReset,
  CustomerPaymentSource,
  CustomerSubscription,
  Customer,
  DeliveryLeadTime,
  Geocoder,
  GiftCard,
  GiftCardRecipient,
  Import,
  InventoryModel,
  Item,
  LineItemOption,
  LineItem,
  Market,
  Merchant,
  Order,
  Parcel,
  PaymentMethod,
  PaymentGateway,
  PaypalPayment,
  PaymentSource,
  PriceList,
  Price,
  Shipment,
  ShippingCategory,
  ShippingMethod,
  ShippingZone,
  SkuOption,
  Sku,
  StockItem,
  StockLevel,
  StockLocation,
  StripePayment,
  Webhook,
  WireTransfer
}

const initCLayer = init

export {
  initCLayer,
  Address,
  AdyenPayment,
  Attachment,
  Attachable,
  BraintreePayment,
  CreditCard,
  CustomerAddress,
  CustomerGroup,
  CustomerPasswordReset,
  CustomerPaymentSource,
  CustomerSubscription,
  Customer,
  DeliveryLeadTime,
  Geocoder,
  GiftCard,
  GiftCardRecipient,
  Import,
  InventoryModel,
  Item,
  LineItemOption,
  LineItem,
  Market,
  Merchant,
  Order,
  Parcel,
  PaymentMethod,
  PaymentGateway,
  PaypalPayment,
  PaymentSource,
  PriceList,
  Price,
  Shipment,
  ShippingCategory,
  ShippingMethod,
  ShippingZone,
  SkuOption,
  Sku,
  StockItem,
  StockLevel,
  StockLocation,
  StripePayment,
  Webhook,
  WireTransfer
}

export default CLayer
