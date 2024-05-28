import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image';
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button';



export default function Footer(){
  
    return(
        
        <footer className="flex flex-wrap flex-col bg-gradient-to-l from-blue-800 to-indigo-500 py-5">
        <div className='flex flex-wrap md:flex-nowrap px-5 gap-4 pt-5  items-center justify-center'>

        <div className='flex flex-col gap-2 md:gap-4 items-center md:items-start w-full md:w-1/4 '>
            <div className='flex text-white gap-2'>
                <FmdGoodOutlinedIcon />
                <p className='font-semibold text-xs lg:text-sm tracking-wide'>14 Bakers St, Washington, NY 11215 USA</p>
            </div>

            <div className='flex text-white gap-2'>
                <MarkunreadOutlinedIcon/>
                <p className='font-semibold text-xs lg:text-sm tracking-wide'>support@medicure.com</p>
               
            </div>
        </div>

        <div className='flex flex-col w-full md:w-1/2  items-center justify-center gap-2 '>
            <div className='flex flex-col gap items-center'>
                <small className='text-white font-semibold tracking-wide'>COPYRIGHT © 2023. ALL RIGHTS RESERVED.</small>
                <small className='text-white font-semibold tracking-wide'>TEMPLATE DESIGNED BY <span className='font-custom text-lg'>Ghost</span></small>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm w-full md:w-1/2  ">
                <div className='text-white '>Press</div>
                <div className='text-white'>|</div>
                <div className='text-white'>Terms</div>
                <div className='text-white'>|</div>
                <div className='text-white'>Conditions</div>
            </div>
            </div>

            <div className='flex gap-3 text-white justify-center md:justify-end w-full md:w-1/4 '>
          
                <FacebookIcon style={{ fontSize: '2.5rem' }}/>
                <InstagramIcon style={{ fontSize: '2.5rem' }}/>
                <TwitterIcon style={{ fontSize: '2.5rem' }}/>
               
            </div>
        </div>

       
















      
       

        </footer>
    )
}