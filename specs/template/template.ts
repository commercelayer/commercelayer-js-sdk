export default [
  {
    testName: 'Skus',
    belongsToClass: 'ShippingCategory',
    className: 'Sku',
    associations: [
      'prices',
      'stockItems',
      'deliveryLeadTimes',
      'skuOptions',
      'shippingCategory',
    ],
    tests: [
      {
        type: 'toArray',
      },
      {
        type: 'size',
      },
      {
        type: 'associations',
      },
      {
        type: 'create',
        relationship: 'shippingCategory',
        data: {
          name: 'Black Men T-shirt with White Logo (UNIT-TEST)',
          code: 'TSHIRTMM000000FFFFFFXLUNITTEST',
        },
      },
      {
        type: 'update',
        data: {
          description: 'Unit test',
        },
      },
      {
        type: 'delete',
      },
    ],
  },
  {
    testName: 'Orders',
    belongsToClass: 'Market',
    className: 'Order',
    associations: [
      'market',
      'customer',
      'shippingAddress',
      'billingAddress',
      'paymentSource',
      'availablePaymentMethods',
      'lineItems',
      'shipments',
    ],
    tests: [
      {
        type: 'toArray',
      },
      {
        type: 'size',
      },
      {
        type: 'associations',
      },
      {
        type: 'create',
        relationship: 'market',
        data: {
          shipping_country_code_lock: 'US',
          language_code: 'en',
        },
      },
      {
        type: 'update',
        data: {
          reference: 'UnitTest',
        },
      },
      {
        type: 'delete',
      },
    ],
  },
  {
    testName: 'Credit Cards',
    belongsToClass: 'Order',
    className: 'CreditCard',
    associations: ['order'],
    tests: [
      {
        type: 'toArray',
      },
      {
        type: 'size',
      },
      {
        type: 'associations',
      },
      {
        type: 'create',
        relationship: 'order',
        data: {
          first_name: 'John',
          last_name: 'Smith',
          number: '4111111111111111',
          month: '10',
          year: '2023',
          verification_value: '123',
        },
      },
      {
        type: 'update',
        data: {
          first_name: 'Alessandro',
        },
      },
    ],
  },
  {
    testName: 'Customer Address',
    belongsToClass: ['Customer', 'Address'],
    className: 'CustomerAddress',
    associations: ['customer', 'address'],
    tests: [
      {
        type: 'toArray',
      },
      {
        type: 'size',
      },
      {
        type: 'associations',
      },
      {
        type: 'create',
        relationship: ['customer', 'address'],
        data: {},
      },
      {
        type: 'update',
        data: {
          reference: 'UNIT TEST REFERENCE',
        },
      },
      {
        type: 'delete',
      },
    ],
  },
  {
    testName: 'Delivery lead time',
    belongsToClass: ['StockLocation', 'ShippingMethod'],
    className: 'DeliveryLeadTime',
    associations: ['stockLocation', 'shippingMethod'],
    tests: [
      {
        type: 'toArray',
      },
      {
        type: 'size',
      },
      {
        type: 'associations',
      },
    ],
  },
  {
    testName: 'Inventory Models',
    belongsToClass: 'StockLevel',
    className: 'InventoryModel',
    associations: ['stockLevels'],
    tests: [
      {
        type: 'toArray',
      },
      {
        type: 'size',
      },
      {
        type: 'associations',
      },
    ],
  },
  {
    testName: 'Line Items',
    belongsToClass: 'Order',
    className: 'LineItem',
    associations: ['order'],
    tests: [
      {
        type: 'toArray',
      },
      {
        type: 'size',
      },
      {
        type: 'associations',
      },
      {
        type: 'create',
        relationship: ['order'],
        data: {
          quantity: '1',
          sku_code: 'TSHIRTMM000000FFFFFFXLXX',
        },
      },
      {
        type: 'update',
        data: {
          sku_code: 'HATBSBMU000000E63E74XXXX',
        },
      },
      {
        type: 'delete',
      },
    ],
  },
  {
    testName: 'Market',
    belongsToClass: ['Merchant', 'PriceList', 'InventoryModel'],
    className: 'Market',
    associations: ['merchant', 'priceList', 'inventoryModel'],
    tests: [
      {
        type: 'toArray',
      },
      {
        type: 'size',
      },
      {
        type: 'associations',
      },
      {
        type: 'create',
        relationship: ['merchant', 'priceList', 'inventoryModel'],
        data: {
          name: 'Market UNIT TEST',
        },
      },
      {
        type: 'update',
        data: {
          reference: 'UNIT TEST REFERENCE',
        },
      },
      {
        type: 'delete',
      },
    ],
  },
  // {
  //   testName: 'SkuList',
  //   className: 'SkuList',
  //   tests: [
  //     {
  //       type: 'toArray',
  //     },
  //     {
  //       type: 'size',
  //     },
  //     {
  //       type: 'create',
  //       data: {
  //         name: 'Unit test list',
  //         skuCodeRegex: '^(A|B).*$',
  //       },
  //     },
  //     {
  //       type: 'update',
  //       data: {
  //         description: 'UNIT TEST REFERENCE',
  //       },
  //     },
  //     {
  //       type: 'delete',
  //     },
  //   ],
  // },
  // {
  //   testName: 'GiftCard',
  //   belongsToClass: '',
  //   className: 'GiftCard',
  //   associations: ['market', 'giftCardRecepients'],
  //   tests: [
  //     {
  //       type: 'toArray'
  //     },
  //     {
  //       type: 'size'
  //     },
  //     {
  //       type: 'create',
  //       data: {
  //         currencyCode: 'USD',
  //         balanceCents: 15000
  //       }
  //     },
  //     {
  //       type: 'update',
  //       data: {
  //         balanceCents: 20000
  //       }
  //     },
  //     {
  //       type: 'delete'
  //     }
  //   ]
  // },
  // {
  //   testName: 'GiftCardRecepient',
  //   // belongsToClass: '',
  //   className: 'GiftCardRecipient',
  //   // associations: '',
  //   tests: [
  //     {
  //       type: 'toArray'
  //     },
  //     {
  //       type: 'create',
  //       data: {
  //         email: 'alessandro@commercelayer.io'
  //       }
  //     },
  //     {
  //       type: 'update',
  //       data: {
  //         email: 'acasazza@commercelayer.io'
  //       }
  //     },
  //     {
  //       type: 'delete'
  //     }
  //   ]
  // }
]
