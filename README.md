# Commerce Layer JS SDK

A JavaScript Library wrapper that helps you to use the [Commerce Layer API](https://docs.commercelayer.io/api/)

### What is Commerce Layer?

[Commerce Layer](https://commercelayer.io/) is a headless platform that makes it easy to build enterprise-grade ecommerce into any website, by using the language, CMS, and tools you already master and love.

## Installation

Commerce Layer JS SDK is available as an npm package.

```cli
// npm
npm install @commercelayer/js-sdk

// yarn
yarn add @commercelayer/js-sdk
```

## Getting started

```ts
import CLayer, { Sku, ShippingCategory } from '@commercelayer/js-sdk'


CLayer.init('AUTHORIZATION_CODE', 'https://your-brand.commercelayer.io')

// or

import { init, Order, Market } from '@commercelayer/js-sdk'

init('AUTHORIZATION_CODE', 'https://your-brand.commercelayer.io')
```

## Use cases
  - ### SKUs
    > #### How to fetch a collection of skus:

    ```ts
    // All skus
    const skus = await Sku.all()

    // Select fields and filter by first 5 results
    const skus = await Sku.select('name', 'id').first(5)
    
    // Include prices relationship and filter by first 5 results
    const skus = await Sku.select('name', 'id').includes('prices').first(5)

    // Filtering by code
    const skus = await Sku.where({
		  code: 'TOTEXXAUFFFFFFE63E74XXXX'
	  })
		.includes('prices')
		.first(5)
    ```

    > #### How to fetch a specific sku:

    ```ts
    // Select by id
    const sku = await Sku.find('VWGDMSlYJB')
    ```
    
    > #### How to create a sku:

    ```ts
    const name = 'Black Men T-shirt with White Logo (XL)'
    const code = 'TSHIRTMM000000FFFFFFXL'

    // Get Shipping Category collection (because it's required in Skus relationship)
    const shippingCategory = await ShippingCategory.first()

    const attributes = {
      code,
      name,
      shippingCategory // Assigning relationship
    }

    const newSku = await Sku.create(attributes)
    ```

    > #### How to update an existing sku:

    ```ts
    // Get by ID
    const sku = await Sku.find('VWGDMSlYJB')

    const attributes = {
      description: 'Test description'
    }
    
    //  Update your Sku on the server
    sku.update(attributes)
    ```

    > #### How to delete an existing sku:

    ```ts
    // Get by ID
    const sku = await Sku.find('VWGDMSlYJB')

    // Persisted delete
    sku.destroy()
    ```

  - ### Orders
    > #### How to fetch a collection of orders:
    ```ts
    const orders = await Order.all()

    // Select fields and filter by first 5 results
    const orders = await Order.select('name', 'id').first(5)
    ```
    
    > #### How to create an order:

    ```ts
    // Get Market collection
    const market = await Market.first()

    const attributes = {
      shipping_country_code_lock: 'US',
      language_code: 'en',
      market // assigning releationship
    }

    const newOrder = await Order.create(attributes)
    ```

    > #### How to update an existing order:

    ```ts
    // Get by ID
    const order = await Order.find('eqkykhKKwO')

    const attributes = {
      description: 'My description'
    }
    
    //  Update your Order on the server
    order.update(attributes)
    ```

    > #### How to delete an existing order:

    ```ts
    // Get by ID
    const order = await Order.find('eqkykhKKwO')

    // Persisted delete
    order.destroy()
    ```
  - ### Credit Cards
    > #### How to fetch a collection of credit cards:
    ```ts
    const creditCards = await CreditCard.all()

    // Or select fields and filter by first 5 results
    const creditCards = await CreditCard.select('first_name', 'last_name', 'id').first(5)
    ```
    
    > #### How to create an credit card:

    ```ts
    // Get Market collection
    const order = await Order.find('QWERtyUpBa')

    const attributes = {
      first_name: 'John',
      last_name: 'Smith',
      number: '4111111111111111',
      month: '10',
      year: '2023',
      verification_value: '123',
      order
    }

    const newCreditCard = CreditCard.create(attributes)
    ```

    > #### How to update an existing credit card:

    ```ts
    // Get by ID
    const creditCard = await CreditCard.find('LMOaQFNLoV')

    const attributes = {
      first_name: 'Alessandro'
    }
  
    //  Update your Credit Card on the server and locally
    creditCard.update(attributes)
    ```

    > #### How to delete an existing credit card:

    ```ts
    // Get by ID
    const creditCard = await CreditCard.find('LMOaQFNLoV')

    // Persisted delete
    creditCard.destroy()
    ```

## License

This repository is published under the [MIT](LICENSE) license.
