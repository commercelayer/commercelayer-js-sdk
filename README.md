# Commerce Layer JS SDK

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

import { init } from '@commercelayer/js-sdk'

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
    
    //  Update your Sku on the server and local
    sku.update(attributes)
    ```

    > #### How to delete an existing sku:

    ```ts
    // Get by ID
    const sku = await Sku.find('VWGDMSlYJB')

    // Persisted delete
    sku.destroy()
    ```

    [more info](./docs/Skus.md)

## License

This repository is published under the [MIT](LICENSE) license.
