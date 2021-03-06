### Select All Orders
```ts
const orders = await Order.all()

// Select fields and filter by first 5 results
const orders = await Order.select('name', 'id').first(5)
```

### Create an Order

```ts

const { data: { access_token: token } } = await getToken()

// Init commercelayer
init(token, host)

// Get Market collection (required)
const market = await Market.first()
// or
// const market = await Market.all()
// or by id
// const market = await Market.find('QWERtyUpBa')


// Create Order collection
const newOrder = Order.build({
  shipping_country_code_lock: 'US',
  language_code: 'en',
  market // assigning releationship
})

// Save the new order
newOrder.save()
// or if you want to check the result
// newOrder.save(() => {
//   if (newOrder.valid()) {
//     newOrder.persisted() // save on the server
//   } else {
//     newOrder.errors().empty()
//   }
// })
```

### Update Order

```ts
  // Get Order by ID
  const order = await Order.find('eqkykhKKwO')

	const attributes = {
		description: 'Test description'
  }
  
	//  Update your order on the server and locally
	order.update(attributes)
  // or
	// order.update(attributes, () => {
	// 	console.log('order updated')
  // })
```

### Delete Order

```ts
  // Get specific Order
  const order = await Order.find('eqkykhKKwO')

	//  Delete your order on the server and locally
	order.destroy()
	// or
	// order.destroy(attributes, () => {
	// 	console.log('order updated')
  // })
```