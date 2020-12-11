import type { AppProps } from 'next/app'

export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
