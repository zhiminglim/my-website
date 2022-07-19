import Head from 'next/head'
import Header from './../components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zhiming Lim | Singapore</title>
        <meta name="description" content="Welcome to my website." />
        <link rel="icon" href="/zl-logo-0.svg" />
      </Head>

      {/*Header*/}
      <Header />

      <div className='font-sans flex flex-col text-center justify-center my-16'>
        <p className='font-light text-[54px] tracking-wider leading-none py-2'>
          ZHIMING LIM
        </p>
        <p className='font-light text-[16px] tracking-widest leading-none'>
          Software Engineer
        </p>
      </div>

      <div className='flex flex-wrap justify-center'>
        <div className='w-6/12 sm:w-4/12 px-4'>
          <Image 
            className='shadow-lg rounded-full max-w-full h-auto 
            align-middle border-none'
            src="/max-01-square.jpg"
            width={852}
            height={852}
            alt="Picture of Author"
          />
        </div>
      </div>

    </div>
  )
}
