import Head from 'next/head'
import Header from './../components/Header';
import Intro from '../components/Intro';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zhiming Lim | Singapore</title>
        <meta name="description" content="Welcome to my website." />
        <link rel="icon" href="/zl-logo-0.svg" />
      </Head>

      {/* Body */}
      <div className=''>

        <Header />
        <Intro />

        <div className='flex items-center px-[15%] py-[10%]'>
          <div className='flex-grow h-1 bg-black'></div>
        </div>
      </div>

    </div>
  )
}
