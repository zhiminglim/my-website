import Head from 'next/head'
import Header from './../components/Header';
import Intro from '../components/Intro';
import About from '../components/About';

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
        <About />

      </div>

    </div>
  )
}
