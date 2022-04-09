import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import { HomeIcon, BriefcaseIcon, PhotographIcon, UserCircleIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 
    justify-between items-center h-auto">
      
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="PORTFOLIO" Icon={BriefcaseIcon} />
        <HeaderItem title="PHOTOGRAPHY" Icon={PhotographIcon} />
        <HeaderItem title="ABOUT" Icon={UserCircleIcon} />
      </div>
      
      <Image 
        className='object-contain'
        src="/z-logo.jpeg"
        width={100}
        height={100}
        alt="personal logo"
      />
    </header>
  )
}

export default Header