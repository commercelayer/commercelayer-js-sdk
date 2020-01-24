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
import init from './Initialize'
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

// TODO: Export all collection
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

const CLayer: any = {
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
