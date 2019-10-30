### Select All Credit Cards
```ts
const { data: { access_token: token } } = await getToken()

// Init commercelayer
init(token, host)

const creditCards = await CreditCard.all()

// Or select fields and filter by first 5 results
const creditCards = await CreditCard.select('first_name', 'last_name', 'id').first(5)
```

### Create a Credit Card

```ts

const fields = {
  first_name: 'John',
  last_name: 'Smith',
  number: '4111111111111111',
  month: '10',
  year: '2023',
  verification_value: '123'
}

// Get Order
const order = await Order.find('QWERtyUpBa')

// Create new Credit Card collection
const newCreditCard = CreditCard.build({
  order, // assigning releationship
  ...fields
})

// Save the new order
newCreditCard.save()
// or if you want to check the result
// newCreditCard.save(() => {
//   if (newCreditCard.valid()) {
//     newCreditCard.persisted() // save on the server
//   } else {
//     newCreditCard.errors().empty()
//   }
// })
```
### Update Credit Card

```ts
  // Get Credit Card by ID
  const creditCard = await CreditCard.find('LMOaQFNLoV')

	const attributes = {
		first_name: 'Alessandro'
  }
  
	//  Update your Credit Card on the server and locally
	creditCard.update(attributes)
  // or
	// creditCard.update(attributes, () => {
	// 	console.log('creditCard updated')
  // })
```