<style jsx>{`
:global(body) {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
    Helvetica, sans-serif;
}
nav {
  text-align: center;
}
ul {
  display: flex;
  justify-content: space-between;
}
nav > ul {
  padding: 4px 16px;
}
li {
  display: flex;
  padding: 6px 8px;
}
a {
  color: #067df7;
  text-decoration: none;
  font-size: 13px;
}
`}</style>



import Head from 'next/head'
import Nav from '../components/nav'
import clientPromise from '../lib/mongodb'

export default function Home({ isConnected }) {
  return (
    <div className="container">
      <Head>
        <title>Maps, Map, Map</title>
      </Head>

      <main>
        <div className="container mx-auto px-8">
          <Nav />
            <div className="flex text-center">
               <h1>The Map Thing</h1>
            </div>
        </div>
      </main>

      <footer>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/spaghetti-ink.png" alt="Vercel Logo" className="logo" style={{width:"25px"}}/> <h6> Spaghetti INK</h6>
        </a>
      </footer>
      {isConnected ? (
         
         console.log('you are connected')
    
      ) : (

        console.log('you are not connected')

      )}
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}