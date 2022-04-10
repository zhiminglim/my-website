import Head from 'next/head'
import Header from './../components/Header';
import Image from 'next/image';

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

      <div className='flex container mx-auto w-64 h-64 items-center m-20'>
        <Image 
          className=''
          src="/max-01.jpg"
          width={853}
          height={1280}
          alt="Picture of Author"
        />
      </div>

      <div className='flex text-center text-6xl justify-center p-6'>
        <p className=''>
          Zhiming Lim
        </p>
      </div>
      

      <div className='font-mono flex text-center justify-evenly'>
        <p className='hover:animate-pulse'>
          Software Engineer
        </p>
      </div>

    </div>
  )
}
