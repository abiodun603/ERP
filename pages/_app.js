import Layout from '../components/shared/layout/layout'
import '../styles/globals.css'
import "../styles/button.style.css"
import "../components/shared/badge/badge.css"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  ) 
}

export default MyApp

