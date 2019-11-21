# Commerce Layer JS SDK

A JavaScript Library wrapper that makes it quick and easy to interact with the [Commerce Layer API](https://docs.commercelayer.io/api/).

### What is Commerce Layer?

[Commerce Layer](https://commercelayer.io/) is a headless platform that makes it easy to build enterprise-grade ecommerce into any website, by using the language, CMS, and tools you already master and love.

# Getting started

To get started with the Commerce Layer JS SDK you need to install it and then get the credentials that will allow you to perform your API calls.

- [Installation](##-installation)
- [Authentication](##-authentication)
- [Using ES6 import](##-using-es6-import)

## Installation

Commerce Layer JS SDK is available as an npm package:

```
// npm
npm install @commercelayer/js-sdk

// yarn
yarn add @commercelayer/js-sdk
```

## Authentication

All requests to Commerce Layer API must be authenticated with an OAuth bearer token. Hence, before starting to use this SDK you need to get a valid access token. Check [our documentation](https://docs.commercelayer.io/api/authentication) for more information about the available authorization flows.

> Feel free to use [Commerce Layer JS Auth](https://github.com/commercelayer/commercelayer-js-auth), a JavaScript library that helps you wrap our authentication API. 

## Using ES6 import

You can use either the ES6 default or named import with the SDK as follow:

```
import CLayer from '@commercelayer/js-sdk'

CLayer.init({
  accessToken: 'your-access-token',
  host: 'https://yourdomain.commercelayer.io'
})

// or

import { initCLayer, Sku, ShippingCategory } from '@commercelayer/js-sdk'

initCLayer({
  accessToken: 'your-access-token',
  host: 'https://yourdomain.commercelayer.io'
})
```

> In the following examples we will use the latter solution (named import) with reference to the functions associated with the specific resources we're going to access (SKUs and shipping categories). Check our [API reference](https://docs.commercelayer.io/api/) for the complete list of available resources and their attributes.

# Use cases

The following code snippets shows how to use the Commerce Layer JS SDK when performing the standard CRUD operations provided by our REST API on the SKU resource. 

- ### Create
  - [How to create a SKU](###-how-to-create-a-sku)
- ### Retrieve
  - [How to fetch a single SKU](###-how-to-fetch-a-single-sku)
  - [How to fetch a collection of SKUs](###-how-to-fetch-a-collection-of-skus)
  - [Pagination](###-pagination)
  - [Chained methods](###-chained-methods)
- ### Update
  - [How to update an existing SKU](###-how-to-update-an-existing-sku)
- ### Delete
  - [How to delete an existing SKU](###-how-to-delete-an-existing-sku)

## Create

### How to create a SKU

```
  const name = 'Black Men T-shirt with White Logo (XL)'
  const code = 'TSHIRTMM000000FFFFFFXL'

  const shippingCategory = await ShippingCategory.first() // gets the shipping category (it's a required relationship for the SKU resource)

  const attributes = {
    code,
    name,
    shippingCategory // assigns the relationship
  }

  const newSku = await Sku.create(attributes)
```

Check our API reference for more information on how to [create a SKU](https://docs.commercelayer.io/api/resources/skus/create_sku).

## Retrieve

### How to fetch a single SKU

```
  // Fetches the SKU by ID
  const sku = await Sku.find('xYZkjABcde')

  // Fetches the SKU by code
  const sku = await Sku.findBy({ code: 'TSHIRTMM000000FFFFFFXLXX'})

  // Fetches the first SKU of the list
  const sku = await Sku.first()

  // Fetches the last SKU of the list
  const sku = await Sku.last()
```

Check our API reference for more information on how to [retrieve a SKU](https://docs.commercelayer.io/api/resources/skus/retrieve_sku).

### How to fetch a collection of SKUs

```
  // Fetches all the SKUs
  const skus = await Sku.all()

  // Sort the results by creation date in ascending order (default)
  const skus = await Sku.order({ createdAt: 'asc' }).all()

  // Sort the results by creation date in descending order
  const skus = await Sku.order({ createdAt: 'desc' }).all()

  // Fetches the first 5 SKUs of the list
  const skus = await Sku.first(5)

  // Fetches the last 5 SKUs of the list
  const skus = await Sku.last(5)

  // Request the API to return only specific fields
  const skus = await Sku.select('name', 'metadata').all()
  
  // Includes prices an association (prices)
  const skus = await Sku.includes('prices').all()

  // Filters all the SKUs fetching only the ones whose code start with the string "TSHIRT"
  const skus = await Sku.where({ q: { code_start: 'TSHIRT'} }).all();
```

Check our API reference for more information on how to [list all SKUs](https://docs.commercelayer.io/api/resources/skus/list_skus), [sort the results](https://docs.commercelayer.io/api/sorting-results), use [sparse fieldsets](https://docs.commercelayer.io/api/sparse-fieldsets), [include associations](https://docs.commercelayer.io/api/including-associations),  and [filter data](https://docs.commercelayer.io/api/filtering-data).

### Pagination

When you fetch a collection of resources, you get paginated results:

```
// Fetches the SKUs, setting the page number to 3 and the page size to 5
const skus = await Sku.perPage(5).page(3).all()

// Checks next page
  if(skus.hasNextPage()) {
    const nextSkus = await skus.nextPage();
    // ...
  }

// Checks previous page
  if(skus.hasPrevPage()) {
    const prevSkus = await skus.prevPage();
    // ...
  }
```

> The default page number is **1**. The default page size is **10**. The maximum page size allowed is **25**.

Check our API reference for more information on how [pagination](https://docs.commercelayer.io/api/pagination) works.

### Chained methods

All these methods can be combined. That means that API request can be constructed through simple to use chained relation methods:

```
  // Request the API to return only specific fields of the first 15 SKUs of the list (5 per page)
  const skus = await Sku.select('name', 'metadata').perPage(5).first(15)

  // Fetches the last 20 SKUs whose code start with the string "TSHIRT" (5 per page), including an association (prices)
  const skus = await Sku.where({ q: { code_start: 'TSHIRT'} }).includes('prices').perPage(5).last(20)

```


## Update

### How to update an existing SKU

```
  const sku = await Sku.find('xYZkjABcde') // fetches the SKU by ID

  const attributes = {
    description: 'Updated description.'
  }
  
  sku.update(attributes) // updates the SKU on the server
```

Check our API reference for more information on how to [update a SKU](https://docs.commercelayer.io/api/resources/skus/update_sku).

## Delete

### How to delete an existing SKU

```
  const sku = await Sku.find('xYZkjABcde') // fetches the SKU by ID
  
  sku.destroy() // persisted delete
```

Check our API reference for more information on how to [delete a SKU](https://docs.commercelayer.io/api/resources/skus/delete_sku).

---

### License

This repository is published under the [MIT](LICENSE) license.