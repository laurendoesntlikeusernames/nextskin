import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import {loremIpsum} from  '../text.js'

export default function Home({ isConnected }) {
  return (
    <div >
      <Head>
        <title>Maps, Map, Map</title>
      </Head>
      <main>
      <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full text-5xl font-bold leading-tight text-center border border-red-900">
          This is The Mother Forager 
        </h1>

        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6 border">

          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6 border">
            <div className="align-middle">
                <h2>Hello 2</h2>
            </div>
          </div>
        </div>
      </div>
    </section>

                  
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