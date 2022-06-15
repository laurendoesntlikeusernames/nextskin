import Head from 'next/head'
import clientPromise from '../lib/mongodb'

export default function Home({ isConnected }) {
  return (
    <div >
      <Head>
        <title>Maps, Map, Map</title>
      </Head>
      <main>
      <section className="bg-white py-8 min-h-screen border-red-500">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full font-bold leading-tight text-center text-5xl">
          This is The Mother Forager 
        </h1>

        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6 border">
            Map
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6 border">
                <h2>Form</h2>
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