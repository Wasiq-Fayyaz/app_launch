'use client'
import React from 'react';
import Typewriter from "typewriter-effect";
import splash from '../../../Images/splash.png'

import Image from 'next/image';

export default function Home(){

    return(
        <section id='home' className="flex flex-col justify-center bg-gradient-to-l from-blue-800 to-indigo-500 pt-10 ">
            <h1 className="flex text-7xl font-bold justify-center text-white tracking-normal">Medicure</h1>
            <h4 className="flex text-xl font-semibold justify-center text-white mt-2">Home Healthcare Service App</h4>
            <p className="flex font-semibold justify-center text-white pt-5 pb-5 font-custom tracking-wide text-2xl text-center lg:text-4xl">
            Promoting User Independence
            </p>
           <div className='flex justify-center pt-8'>
           <Image src={splash} alt='404' width={300} height={300} className='splash'></Image>
           </div>
        </section>
    )
}