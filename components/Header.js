import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import { HomeIcon, BriefcaseIcon, PhotographIcon, UserCircleIcon } from '@heroicons/react/outline'
import githubIcon from '../public/icons8-github.svg'
import linkedinIcon from '../public/icons8-linkedin.svg'
import initialsLogo from '../public/zl-logo-0.svg'

function Header() {
  return (
    <header className="grid grid-cols-3 mt-[35px] h-auto px-4">
      
      {/* <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="PORTFOLIO" Icon={BriefcaseIcon} />
        <HeaderItem title="PHOTOGRAPHY" Icon={PhotographIcon} />
        <HeaderItem title="ABOUT" Icon={UserCircleIcon} />
      </div> */}

      <div />

      <div className='flex justify-center'>
        <Image 
          src={initialsLogo}
          width={50}
          height={50}
          alt="personal-logo"
        />
      </div>

      <div className='flex justify-end'>
        <Image 
          src={githubIcon}
          alt="github-icon"
        />
        <Image 
          src={linkedinIcon}
          alt="linkedin-icon"
        />
      </div>
      
    </header>
  )
}

export default Header