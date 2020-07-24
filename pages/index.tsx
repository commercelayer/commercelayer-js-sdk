import { useEffect } from 'react'
import { getTokenBlueBrand } from '../helpers'
import { initCLayer, Sku, Order } from '../src'
import _ from 'lodash'

export default function Home(props) {
  useEffect(() => {
    Order.withCredentials(props.config)
      .includes('paymentSource')
      .select('id', 'status')
      .where({ status: 'placed', paymentStatus: 'authorized' })
      .order({ updatedAt: 'asc' })
      .all()
      .then((res) => {
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
