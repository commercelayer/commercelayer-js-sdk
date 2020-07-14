import { useEffect } from 'react'
import { getTokenBlueBrand } from '../helpers'
import { initCLayer, Sku } from '../dist'
import _ from 'lodash'

export default function Home(props) {
  useEffect(() => {
    return () => {}
  }, [])
  console.log('props', props)
  return <div className="container">ciao</div>
}

export async function getStaticProps() {
  const { ENDPOINT } = process.env
  const { accessToken } = await getTokenBlueBrand()
  const config = {
    accessToken: accessToken,
    endpoint: ENDPOINT,
  }
  initCLayer(config)
  const sku = await Sku.find('wBeDdSgYQW')
  console.log('update', Sku)
  debugger
  return {
    props: {},
  }
}
