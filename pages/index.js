import Head from 'next/head'
import Header from './../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zhiming Lim | Singapore</title>
        <meta name="description" content="Welcome to my website." />
        <link rel="icon" href="/z-logo.jpeg" />
      </Head>

      {/*Header*/}
      <Header />

      <div className='font-sans hover:font-mono flex justify-evenly 
      text-center text-6xl
      p-6'>
        <p>
          Zhiming Lim
        </p>
      </div>

      <div className='font-mono flex justify-evenly text-center'>
        <p>
          Software Engineer
        </p>
      </div>

    </div>
  )
}
