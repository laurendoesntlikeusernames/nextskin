import Head from 'next/head'
import clientPromise from '../lib/mongodb'

export default function Home({ isConnected }) {
  return (
    <div >
      <Head>
        <title>Maps, Map, Map</title>
      </Head>
      <main className='flex grid container mx-auto px-4' style={{border: "solid 1px pink"}}>
        
        <div className='grid grid-rows-1'> <header className='' style={{border: "solid 1px blue"}}>The Map Thing</header></div>

        <div className='flex flex-rows-2 px-8 mx-auto' style={{border: "solid 1px purple"}}>
          <div className='' id='map'style={{border: "solid 1px green"}} ></div>
          <div className='' id='mapForm'style={{border: "solid 1px orange"}} ></div>
        </div>
                  
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