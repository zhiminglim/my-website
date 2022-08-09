import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeaderItem from './HeaderItem'
import { HomeIcon, BriefcaseIcon, PhotographIcon, UserCircleIcon } from '@heroicons/react/outline'
import githubIcon from '../public/icons8-github.svg'
import linkedinIcon from '../public/icons8-linkedin.svg'
import initialsLogo from '../public/zl-logo-0.svg'

function Header() {
  
  const GITHUB_URL = "https://github.com/zhiminglim"
  const LINKEDIN_URL = "https://www.linkedin.com/in/zhiminglim9/"

  return (
    <header className="grid grid-cols-3 mt-[35px] h-auto px-4">

      <div className='flex justify-start ml-8'>
        <Image 
          src={initialsLogo}
          width={50}
          height={50}
          alt="personal-logo"
        />
      </div>

      <div />

      <div className='flex justify-end items-center mr-8 space-x-2'>
        <div className='flex hover:cursor-pointer'>
          <Link href={GITHUB_URL} passHref>
            <a target="_blank">
              <Image
                src={githubIcon}
                alt="github-icon"
              />
            </a>
          </Link>
        </div>
        <div className='flex hover:cursor-pointer'>
          <Link href={LINKEDIN_URL} passHref>
            <a target="_blank">
              <Image 
              src={linkedinIcon}
              alt="linkedin-icon"
            />
            </a>
          </Link>
        </div>
      </div>
      
    </header>
  )
}

export default Header