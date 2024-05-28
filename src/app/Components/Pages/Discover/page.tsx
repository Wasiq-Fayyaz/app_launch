'use client'
import main from '../../../Images/mockup_down.png'
import Image from 'next/image';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import {motion} from 'framer-motion'

export default function Discover(){
    return(
        <section className=' flex flex-wrap-reverse pt-10 justify-between pb-10  lg:flex-nowrap'>

            <div className='flex flex-col gap-5 ps-10 justify-start'>
                <h2 className='text-blue-800 opacity-80 pt-10 text-3xl font-regular tracking-tight md:text-5xl lg:pt-0 '>Discover our App</h2>
                <p className='text-base tracking-tight text-justify text-gray-500 font-regular w-4/5 md:text-lg md:w-11/12'>Medicure is your trusted companion for seamless access to healthcare services. Book appointments, order prescriptions, and monitor your health effortlessly. Our aim:</p>
                <div className='flex gap-2 '>
                    <CircleOutlinedIcon className='text-blue-500'/>
                    <p className='text-base text-gray-500 tracking-tight font-regular md:text-lg'>Promoting User Independence</p>
                </div>
                <div className='flex gap-2'>
                    <CircleOutlinedIcon className='text-blue-500 '/>
                    <p className='text-base text-gray-500 tracking-tight font-regular md:text-lg'>Medical Acessibility at Ease</p>
                </div>
                <div className='flex gap-2'>
                    <CircleOutlinedIcon className='text-blue-500 '/>
                    <p className='text-base text-gray-500 tracking-tight font-regular md:text-lg'>Instant Medical Advice</p>
                </div>
            </div>
            
            
                <motion.div className='flex justify-center w-full xl:flex xl:justify-end' initial= "hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    
                    transition: {
                    delay: .5,
                    transform: .3
                    }
                },
                }}>
                    <Image src={main} alt='404' width={500} height={200} className='ms-10'></Image>
                </motion.div>
            

        </section>
    )
}