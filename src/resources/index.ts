import Address from './Address'
import Attachment from './Attachment'
import CreditCard from './CreditCard'
import CustomerAddress from './CustomerAddress'
import CustomerGroup from './CustomerGroup'
import CustomerPasswordReset from './CustomerPasswordReset'
import CustomerPaymentSource from './CustomerPaymentSource'
import CustomerSubscription from './CustomerSubscription'
import Customer from './Customer'
import DeliveryLeadTime from './DeliveryLeadTime'
import Import from './Import'
import InventoryModel from './InventoryModel'
import LineItemOption from './LineItemOption'
import LineItem from './LineItem'
import Market from './Market'
import Merchant from './Merchant'
import Order from './Order'
import Parcel from './Parcel'
import PaymentMethod from './PaymentMethod'
import PaypalPayment from './PaypalPayment'
import PriceList from './PriceList'
import Price from './Price'
import Shipment from './Shipment'
import ShippingCategory from './ShippingCategory'
import ShippingMethod from './ShippingMethod'
import ShippingZone from './ShippingZone'
import SkuOption from './SkuOption'
import Sku from './Sku'
import StockItem from './StockItem'
import StockLevel from './StockLevel'
import StockLocation from './StockLocation'
import Webhook from './Webhook'
import WireTransfer from './WireTransfer'
import init from './Initialize'
import Geocoder from './Geocoder'
import PaymentSource from './PaymentSource'
import Item from './Item'
import Attachable from './Attachable'

const CLayer: any = {
  init,
  Address,
  Attachment,
  Attachable,
  CreditCard,
  CustomerAddress,
  CustomerGroup,
  CustomerPasswordReset,
  CustomerPaymentSource,
  CustomerSubscription,
  Customer,
  DeliveryLeadTime,
  Geocoder,
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
  Webhook,
  WireTransfer
}

const initCLayer = init

export {
  initCLayer,
  Address,
  Attachment,
  Attachable,
  CreditCard,
  CustomerAddress,
  CustomerGroup,
  CustomerPasswordReset,
  CustomerPaymentSource,
  CustomerSubscription,
  Customer,
  DeliveryLeadTime,
  Geocoder,
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
  Webhook,
  WireTransfer
}

export default CLayer
