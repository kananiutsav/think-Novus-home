"use client"

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { WhyChooseAndroisApps } from "@/interface"
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y, Lazy } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Heading from '@/allHeading/Heading';
import {  whyChooseAndroisAppHeading } from '@/utils/Constant';
type WhyChooseAndroisAppsData = {
    data: WhyChooseAndroisApps[];
   
}
const AndroidAppWhyChoose = ({ data}: WhyChooseAndroisAppsData) => {

    const [activeIndex, setActiveIndex] = useState(1);
    const handleSlideChange = (swiper: any) => {

        setActiveIndex(swiper.activeIndex);
    };
    return (
        <>
            <div className='max-w-[1440px] mx-auto mt-[50px] '>
                <div className='pb-[30px] flex items-center max-w-[1200px] mx-auto'>
                    <div>
                        <Heading data={whyChooseAndroisAppHeading} />
                    </div>
                    <div className='flex text-white justify-end w-[30%]'>
                        <div className="swiper-btn-prev">
                            <div className="py-3 px-3 round rounded-[28px] mr-5 hover:text-blue-700">
                                <FiArrowLeft fontSize={20} />
                            </div>
                        </div>
                        <div className="swiper-btn-next">
                            <div className="py-3 px-3 round rounded-[28px] mr-5 relative group hover:text-blue-700">
                                <FiArrowRight fontSize={20} className="cursor-pointer hover:text-custom-gradient " />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ml-[120px] '>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={3.20}
                        // navigation={true}
                        navigation={{
                            nextEl: '.swiper-btn-next',
                            prevEl: '.swiper-btn-prev',
                        }}
                        pagination={{ dynamicBullets: true, clickable: true }}
                        scrollbar={{ draggable: true }}
                        loop
                        modules={[Navigation]}
                        initialSlide={0}
                        onSlideChange={handleSlideChange}
                        speed={1000}
                    >
                        {data && data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className='square p-[30px] w-[390px] h-[465px] gap-x-[20px] shrink-0 rounded-[13px]  flex flex-col  bg-[#1A1826]  '>
                                    <Image
                                    src={item.img}
                                    alt=''
                                    className='w-[61px] h-[61px]'
                                    />
                                    <div className='   text-white pt-4'>
                                        <div className='   justify-between items-center' >
                                            <h2 className='text-[24px] font-[500]'>{item.title}</h2>
                                            <p className='text-[20px] font-[400] my-[20px]'>{item.detail}</p>
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

export default AndroidAppWhyChoose
