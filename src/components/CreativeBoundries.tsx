"use client"

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { CreativeBoundriess } from "@/interface"
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y, Lazy } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Heading from '@/allHeading/Heading';
import { creativeBoundriesHeading } from '@/utils/Constant';


type CreativeBoundriessData = {
    data: CreativeBoundriess[]
}
const CreativeBoundries = ({ data }: CreativeBoundriessData) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
    };
    return (
        <>
            <div className='max-w-[1200px] mt-[100px]  mx-auto bg-[#1A1825] pb-[50px] pl-[50px]'>
                <div className=' flex items-center  '>
                    <div className='w-[70%]'>
                        <Heading data={creativeBoundriesHeading} />
                    </div>
                    <div className='flex text-white justify-end w-[25%]'>

                        <div className="swiper-btn-prev ">
                            <div className="round py-3 px-3 text-white hover:text-blue-700  border-white border-2 hover:border-2  rounded-[28px] mr-5">
                                <FiArrowLeft fontSize={20} className='' />
                            </div>
                        </div>
                        <div className="swiper-btn-next">
                            <div className="round py-3 px-3 text-white border-white border-2 hover:border-2 rounded-[28px] mr-5 relative group hover:text-blue-700">
                                <FiArrowRight fontSize={20} className=" cursor-pointer " />
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' '>
                    <Swiper
                        slidesPerView={4.20}
                        spaceBetween={36}
                        navigation={{
                            nextEl: '.swiper-btn-next',
                            prevEl: '.swiper-btn-prev',
                        }}
                        modules={[Navigation]}
                        initialSlide={0}
                        onSlideChange={handleSlideChange}
                        speed={1000}
                    >
                        {data && data.map((item) => (
                            <SwiperSlide key={item.id}>

                                <div className='text-white    '>
                                    <div className='text-[22px] font-[500]  w-[231px]  '>
                                        <div className=''>
                                            <Image
                                                src={item.img}
                                                alt=''
                                                width={48}
                                                height={48}
                                                className='w-[48px] h-[48px] '
                                            />
                                        </div>
                                        <div className='       '>
                                            <h2 className=' text-white text-[24px] tracking-[0.74px] pt-[20px] font-[500]   leading-[31.5px] '>
                                                {item.title}
                                            </h2>
                                            <p className='text-white text-[20px] tracking-[0.74px] leading-[25px] font-[400] pt-2'>
                                                {item.detail}
                                            </p>
                                        </div>
                                        <div className=' flex  pt-[20px] '>
                                            <button className='text-white btn rounded-full flex gap-x-2 items-center py-[8px] px-[27px] text-[16px] font-[500] leading-[20px] tracking-[-0.14px]'>{item.btn}   <FiArrowRight fontSize={24} /></button>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default CreativeBoundries
