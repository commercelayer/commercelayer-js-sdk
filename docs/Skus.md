### Select All Skus
```ts
const skus = await CLayer.Sku.all()

// Select fields and filter by first 5 results
const skus = await CLayer.Sku.select('name', 'id').first(5)
```

### Create Sku

```ts

const { data: { access_token: token } } = await getToken()

// Init commercelayer
CLayer.init(token, host)

const name = 'Black Men T-shirt with White Logo (CRUD)'
const code = 'TSHIRTMM000000FFFFFFXLCRUD'

// Get Shipping Category collection (because it's required) about the relationship
const shippingCategory = await CLayer.ShippingCategory.first()

const attributes = {
	code,
	name,
	shippingCategory // About assigning
}

// Create Sku collection
// you can create on the server immediately (return new Sku collection)
const newSku = await CLayer.Sku.create(attributes)
// or only locally
const newSku = CLayer.Sku.build(attributes)

// Save the new sku if you used the build method
newSku.save()
// or if you want to check the result
// newSku.save(() => {
//   if (newSku.valid()) {
//     newSku.persisted() // save on the server
//   } else {
//     newSku.errors().empty()
//   }
// })
```

### Update Sku

```ts
	// Get by ID
	const sku = await CLayer.Sku.find('VWGDMSlYJB')

	const attributes = {
		description: 'Test description'
  }
  
	//  Update your Sku on the server and local
	sku.update(attributes)
  // or
	// sku.update(attributes, () => {
	// 	console.log('sku updated')
  // })
```

### Delete Sku

```ts
  // Get by ID
  const sku = await CLayer.Sku.find('VWGDMSlYJB')

	//  Delete your Sku on the server and local
	sku.destroy()
	// or
	// sku.destroy(attributes, () => {
	// 	console.log('sku updated')
  // })

```