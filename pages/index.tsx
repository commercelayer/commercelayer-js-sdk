import { useEffect, useState } from 'react'
import _ from 'lodash'
import { Sku } from '../src'
import { getTokenBlueBrandWeb } from '../helpers/getToken'

export default function Home(props) {
  const [token, setToken] = useState(null)
  // const [lineItems, setLineItems] = useState<LineItemCollection[]>([])
  useEffect(() => {
    if (!token) {
      getTokenBlueBrandWeb('salesChannel', props).then((token) => {
        setToken({
          accessToken: token.accessToken,
          endpoint: props.endpoint,
        })
      })

      // Sku.withCredentials(config)
      //   .select('code', 'reference', 'referenceOrigin')
      //   .all()
      //   .then((skus) => {
      //     console.log('skus', skus)
      //   })
      // Order.withCredentials(config)
      //   .includes('lineItems')
      //   .find('NrnYhAdeKk')
      //   .then((o) => {
      //     setOrder(o)
      //   })
      //   .catch((e) => {
      //     console.log('Order error', e)
      //   })
    }
    if (token) {
      Sku.withCredentials(token)
        .select('code', 'reference', 'referenceOrigin')
        .all()
        .then((skus) => {
          console.log('skus', skus)
        })
    }
    return () => {}
  }, [token])
  // const handleDelete = async (id) => {
  //   const t0 = performance.now()
  //   const lineItem = await LineItem.withCredentials(config).find(id)
  //   await lineItem.withCredentials(config).destroy()
  //   getOrder()
  //   const t1 = performance.now()
  //   console.log(`LineItems deleted time: ${t1 - t0} ms.`)
  // }
  return (
    <div className="container">
      Hello JS SDK!
      <br />
      {/* {lineItems.map((lineItem, k) => {
        return (
          <div key={k}>
            <p>
              {lineItem.skuCode} - quantity: {lineItem.quantity}
            </p>
            <button onClick={() => handleDelete(lineItem.id)}>
              Remove line item
            </button>
          </div>
        )
      })} */}
    </div>
  )
}

export async function getStaticProps() {
  const { ENDPOINT, SALES_CHANNEL_ID, SCOPE } = process.env
  return {
    props: { endpoint: ENDPOINT, clientId: SALES_CHANNEL_ID, scope: SCOPE },
  }
}
