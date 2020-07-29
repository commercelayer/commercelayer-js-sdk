import { useEffect } from 'react'
import { getTokenBlueBrand } from '../helpers'
import { initCLayer, Sku, Order } from '../dist'
import _ from 'lodash'

export default function Home(props) {
  useEffect(() => {
    Order.withCredentials(props.config)
      .includes('shippingAddress,paymentSource')
      .find('jwBXVhxvqG')
      .then((res) => {
        console.log('res.lineItems', res.lineItems().all)
        // res.shippingAddress.name
        debugger
      })
    return () => {}
  }, [])
  console.log('props', props)
  return <div className="container">Hello JS SDK!</div>
}

export async function getStaticProps() {
  const { ENDPOINT } = process.env
  const { accessToken } = await getTokenBlueBrand()
  const config = {
    accessToken: accessToken,
    endpoint: ENDPOINT,
  }
  return {
    props: { config },
  }
}
