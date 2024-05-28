'use client'
import React,{useRef} from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { useSwiper } from 'swiper/react';
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import ss_1 from '../../../Images/Gallery/splash.jpg'
import ss_2 from '../../../Images/Gallery/main.jpg'
import ss_3 from '../../../Images/Gallery/signup.jpg'
import ss_4 from '../../../Images/Gallery/login.jpg'
import ss_5 from '../../../Images/Gallery/video_call.jpg'
import 'swiper/css';
import 'swiper/css/effect-flip'
import { EffectFade } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';
import { EffectCube } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import { Button } from "@/components/ui/button"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';




import Image from 'next/image';

export default function Gallery(){


    SwiperCore.use([Pagination,Autoplay]);
    return(
        <section id='gallery' className="bg-blue-50 pt-5 pb-20">
            <p className="leading-7 text-xs font-semibold tracking-wider text-indigo-500 text-center">
                    Gallery
            </p>
            <h3 className="scroll-m-20 text-3xl font-regular tracking-tight text-blue-800 text-center opacity-80">
                    Application Screenshots
            </h3>


            <Swiper
                style={{ width: '250px', height: '500px', marginTop:"30px",}}
                className='w- h-full'
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                    delay:1500
                }}
                pagination={{
                    type:'bullets',
                    clickable:true,
                    dynamicBullets:true,
                    bulletClass:'swiper-pagination swiper-pagination-bullet'
                }}
    
                modules={[EffectCards]} effect="cards"
                >
                <SwiperSlide >
                    <Image src={ss_1} alt='404' className='rounded-md'></Image>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={ss_2} alt='404' className='rounded-md'></Image>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={ss_3} alt='404' className='rounded-md'></Image>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={ss_4} alt='404' className='rounded-md'></Image>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={ss_5} alt='404' className='rounded-sm'></Image>
                </SwiperSlide>
            
                </Swiper>
     

        </section>
    )
}