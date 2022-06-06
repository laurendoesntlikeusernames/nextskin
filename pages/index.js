import Head from 'next/head'
import clientPromise from '../lib/mongodb'

export default function Home({ isConnected }) {
  return (
    <div >
      <Head>
        <title>Maps, Map, Map</title>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />

      </Head>
      <main className='h-screen'>
      
        <h1>The Map Thing</h1>
                  
      </main>

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