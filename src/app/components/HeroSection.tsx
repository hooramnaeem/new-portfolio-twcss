"use client";
import React from 'react'
import Image from 'next/image';
import portfolioimagedit from "../../../public/images/portfolioimagedit.jpg"
import{TypeAnimation} from "react-type-animation";


export default function HeroSection() {
    return (
      <section>
        <div className='grid grid-cols-1 sm:grid-cols-12 mt-20'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className='text-orange-400 mb-4 lg:text-6xl  sm:text-5xl text-4xl font-extrabold '>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello,I am <br/>Asma Nazeer{""}</span>
          <br/>
          <TypeAnimation
sequence={[
"A Developer",
1000,
" Desingner",
1000,
" Programmer",
1000,
" Teacher",
1000,
]}
wrapper='span'
speed={20}
style={{fontSize:'1em',display:'inline-block'}}
repeat={Infinity}/></h1>
        <p className='text-violet-800 text-base sm:text-lg mb-6 lg:text-xl'>Front-End Developer, Designer, and Teacher dedicated to crafting beautiful, user-friendly web experiences and inspiring others in tech.</p>
        <div className=''> 
           
           
           <a href='https://new-hackathone1-2.vercel.app/' target='blank'>
            <button className="px-1 py-1 w-full  sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-indigo-500 text-white  mt-3 "><span className='block bg-slate-950 hover:bg-orange-500 rounded-full px-5 py-2'>My CV</span></button>?</a>
        </div>
      


        </div>
        
        <div className='col-span-5  rounded-full place-self-center  mt-4 lg:mt-0'>
        <div className=' bg-[#181818]  rounded-full shadow-blue-800 shadow-2xl w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image 
            src={portfolioimagedit}
            alt='portfolio image'
            className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={250}
            height={250}
            />
</div>
        </div>
        </div>
        
        
        
      </section>
    );
  }
