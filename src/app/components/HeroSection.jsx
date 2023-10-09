"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-t from-purple-400 to-pink-600">
                        Hello, I am
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            'Arsh Kumar', 
                            1000,
                            'Software Developer',
                            1000,
                            'Frontend Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                Turning Lines of Code into Seamless Solutions, One Algorithm at a Time.
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                        Hire Me
                    </button>
                    <Link href={"https://drive.google.com/file/d/1a28IfFjGKS0B1wDVa1up34fOC5aRDn6I/view?usp=sharing"}>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt=0">
                <Image 
                    className="rounded-full"
                    src="/images/photo1.jpg" 
                    width={300}
                    height={300}
                    alt="hero image" 
                />
            </div>
      </div>
    </section>
  )
}

export default HeroSection
