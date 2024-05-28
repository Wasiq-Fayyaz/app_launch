'use client'
import Image from 'next/image'
import medicure from '../Images/medicure_logo.png'
import Link from 'next/link'
import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header(){

 

    let [showIcons,setShowIcons] = React.useState(false);

    function ToggleNav(){
        setShowIcons(prevState => !prevState);
        document.body.classList.toggle('no-scroll', !showIcons);
    }

    function handleResize(){

      window.innerWidth <= 640 ? setShowIcons(true) : setShowIcons(false);

    }

    React.useEffect(() => {
      handleResize();

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    

    return (
        <header className='p-6 w-full bg-gradient-to-l from-blue-800 to-indigo-500 flex items-center justify-center  sm:flex items-center md:flex justify-center lg: flex justify-center gap-48'>
            
    
            
               <div className='flex flex-col justify-center items-center sm: flex justify-start'>
                <Image src={medicure} width={40} height={40}></Image>
                <h2 className="text-lg text-white font-semibold tracking-wide ">
                    MediCure
                </h2>
               </div>
          


                <ul className={`${showIcons? "mobile--header--categories" : 'hidden'}`} id='#gallery'>
            
                    <Link href='/' className='text-black' > 
                        <li>
                         HOME
                        </li>
                    </Link>
            

                <li>
                    <Link href='/pages/features' className='text-black'> 
                        <p className="leading-7 text-xs font-regular tracking-wider">
                        FEATURES
                        </p>
                    </Link>
                </li>

                 <li>
                    <Link href={''} className='text-black'> 
                        <p className="leading-7 text-xs font-regular tracking-wider">
                       SIGNUP
                        </p>
                    </Link>
                </li>

                <li>
                    <Link href={''} className='text-black'> 
                        <p className="leading-7 text-xs font-regular tracking-wider">
                       GALLERY
                        </p>
                    </Link>
                </li>

                <li>
                    <Link href={''} className='text-black'> 
                        <p className="leading-7 text-xs font-regular tracking-wider">
                       CONTACT
                        </p>
                    </Link>
                </li>
            </ul>


            <ul className="hidden md:flex gap-5 text-white">
                <li>
                    <Link href='/'> 
                        <p className="leading-7 text-xs font-semibold tracking-wider">
                            HOME
                        </p>
                    </Link>
                </li>

                <li>
                <Link href='/features'>
                    <p className="leading-7 text-xs font-semibold tracking-wider">
                        FEATURES
                    </p>
                </Link>
                </li>

                 <li>
                    <Link href={''}> 
                        <p className="leading-7 text-xs font-semibold tracking-wider">
                       SIGNUP
                        </p>
                    </Link>
                </li>

                <li>
                    <Link href={''}> 
                        <p className="leading-7 text-xs font-semibold tracking-wider">
                       GALLERY
                        </p>
                    </Link>
                </li>

                <li>
                    <Link href={''}> 
                        <p className="leading-7 text-xs font-semibold tracking-wider">
                       CONTACT
                        </p>
                    </Link>
                </li>
            </ul>

        
            <div className='flex justify-end w-full  md:hidden ' onClick={ToggleNav}>

            {showIcons ?  <CloseOutlinedIcon className='fontSize: 60px text-white'/>:<MenuOutlinedIcon className='fontSize: 60px text-white'/> }

            </div>
            

        </header>
    )
}