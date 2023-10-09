"use client"
import React, { useState } from 'react'
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedIn.svg";
import TwitterIcon from "../../../public/twitter.svg";
import LeetcodeIcon from "../../../public/leetcode.svg";
import Link from 'next/link';
import Image from 'next/image';


const EmailSection = () => {
  
  return (
    <section id='contact'>
      <h1 className="text-center text-4xl font-bold text-white pt-24 mt-4 mb-10 md:mb-12">
        Contact Me
      </h1>
      <div className="grid md:grid-cols-2 my-12 md:my-12 py-2 gap-4 relative">
      
      <div className="z-10">
        <h5 className="text-xl font-bold text-bold text-white my-2">Let us Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
        
          I am currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I will try my best 
          to get back to you!
        </p>
        <div className='socials flex flex-row gap-2 '>
          <Link
            className="pr-1" 
            href ="https://github.com/arsh0007">
            <Image 
              src={GithubIcon}
              alt='Github Icon'
              width={30}
              height={30}
            />
          </Link>

          <Link
            className="pr-1"
            href ="https://www.linkedin.com/in/arsh-kumar-383475210/">
            <Image 
              src={LinkedinIcon}
              alt='Linkedin Icon'
              width={30}
              height={30}
            />
          </Link>

          <Link
            className="" 
            href ="https://twitter.com/maybeArsh">
            <Image 
              src={TwitterIcon}
              alt='Twitter Icon'
              width={30}
              height={30}
            />
          </Link>
        
          <Link
            className="pr-1" 
            href ="https://leetcode.com/Maybe_arsh/">
            <Image 
              src={LeetcodeIcon}
              alt='Leetcode Icon'
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
      <div>

        <h5 className="text-xl font-bold text-bold text-white my-2">
          Contact Infomation.  
        </h5>  

        <p className="text-[#ADB7BE] mb-4 max-w-md">
          <b className='text-white'>
            Email-
          </b> <br />
            arsh.kumar.cse.2020@miet.ac.in
            arshkumar213@gmail.com  <br />

          <b className='text-white'>
            Phone no-  
          </b> <br />
          (+91) 8755600186
        </p>

      </div>
      </div>
    </section>
  )
}

export default EmailSection
