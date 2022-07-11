import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import { HomeIcon, BriefcaseIcon, PhotographIcon, UserCircleIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <header className="flex flex-col sm:flex-row mt-5 
    justify-between items-center h-auto">
      
      {/* <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="PORTFOLIO" Icon={BriefcaseIcon} />
        <HeaderItem title="PHOTOGRAPHY" Icon={PhotographIcon} />
        <HeaderItem title="ABOUT" Icon={UserCircleIcon} />
      </div> */}

      <div className='flex flex-grow justify-evenly'>
        <Image 
          className='object-contain'
          src="/zl-logo-0.svg"
          width={100}
          height={100}
          alt="personal logo"
        />
      </div>
      
    </header>
  )
}

export default Header