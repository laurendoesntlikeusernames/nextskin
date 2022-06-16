import Head from 'next/head'
import '../styles/globals.css'
import Nav from '../components/nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Spaghetti INK</title>
        <meta name='description' content='The Urban Forrage Project'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
