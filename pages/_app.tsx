import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import {ReactElement, ReactNode} from "react"
import { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  /*one way of adding layout is simply wrapping here around but dynamic way different
  <Layout>
      <Component {...pageProps} />
      </Layout>
      */

      const getLayout = Component.getLayout ?? ((page) => page)
  return  getLayout(<Component {...pageProps} />)
}

export default MyApp
