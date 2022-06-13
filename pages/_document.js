import { Html, Head, Main, NextScript } from 'next/document'
import Nav from '../components/nav'

export default function Document() {
  return (
    <Html>
      <Head>  
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <body className=''>
         <Nav />
         <div className='pt-24 pl-35'>
          <Main />
         </div>
        <NextScript />
        <footer className="">
            <div className="grid justify-items-center">
                <a href="#" target="_blank" rel="noopener noreferrer" style={{display: "flex",}} >
                    <p className='text-sm' style={{fontWeight: 'bold'}} >Powered by&nbsp;</p>
                    <img src="/spaghetti-ink.png" alt="Vercel Logo" className="logo"  style={{width:"23px",}}/>
                    <p className='text-sm' style={{fontWeight: 'bold'}}>&nbsp;Spaghetti INK</p> 
                </a>
            </div>
        </footer>
      </body>
    </Html>
  )
}