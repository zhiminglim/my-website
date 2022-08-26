import React from "react";
import Image from 'next/image';

function Intro() {
  return (
    <div className="flex flex-row my-32 mx-[15%] items-center">
      
      {/* Text Intro */}
      <div className="flex flex-col w-1/2">
        <div className="mr-[15%]">
          <p className="font-bold text-[54px] tracking-wider leading-none pb-[50px]">
            Hey there.
          </p>

          <p className="font-light text-[24px]">
            I&apos;m Zhiming,
            <br />
            a guy from Singapore who
            <br />
            loves planes, coffee and code.
          </p>
        </div>
      </div>

      {/* Profile Photo */}
      <div className="w-1/2">
        <div className='px-6'>
          <Image 
            className='shadow-lg rounded-full max-w-full h-auto 
            align-middle border-none'
            src="/max-01-square.jpg"
            layout="responsive"
            height="90%"
            width="90%"
            alt="Picture of Author"
          />
        </div>
      </div>
      
    </div>
  )
}

export default Intro