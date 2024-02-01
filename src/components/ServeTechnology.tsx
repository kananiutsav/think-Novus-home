"use client"

import React, { useState }  from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ServeData } from "@/interface"
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y, Lazy } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

type SwiperData = {
    data: ServeData[]
}

const ServeTechnology = ({ data }: SwiperData) => {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleSlideChange = (swiper: any) => {
        
        setActiveIndex(swiper.activeIndex);
    };
    return (
        <div className='max-w-[1440px] mx-auto mt-[50px] '>


            <div className='pb-[50px] flex items-end max-w-[1200px] mx-auto'>
                <div className='w-[70%]'>
                    <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px]'>Industries  <span className='custom-gradient'>We Serve</span></h1>
                    <p className='text-white w-[793px] text-[20px] leading-[32px] font-[400] flex-col flex justify-center h-[62px]'>We are Top-notch Web & Mobile app development company and we think out of the box to build client visions or ideas to world-class digital products.</p>
                </div>
                <div className='flex text-white justify-end w-[30%]'>
                    <div className="swiper-btn-prev">
                        <div className="py-3 px-3 text-white border-white border-4  rounded-[28px] mr-5">
                            <FiArrowLeft fontSize={20} />
                        </div>
                    </div>
                    <div className="swiper-btn-next">
                        <div className="py-3 px-3 text-white border-white border-4 rounded-[28px] mr-5 relative group">
                            <FiArrowRight fontSize={20} className="cursor-pointer hover:text-custom-gradient" />

                        </div>
                    </div>

                </div>
            </div>
            <div className='ml-[120px]'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3.2}
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
                            <div className='p-[30px] w-[390px] h-[450px] shrink-0 rounded-[13px]  flex flex-col border-custom bg-[#1A1826] hover:border-[#FF0BE5] border-2 border-solid '>


                                <div className='   text-white'>
                                    <div className='text-[24px] font-[500]  gap-4 flex justify-between items-center' >

                                        {item.mainHeading.title}
                                        <Image
                                            src={item.mainHeading.img}
                                            alt=''
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <ul className='flex flex-col justify-center  items-start   pt-5  min-h-[309px]'>
                                        {item.subHeading.map((subItem, index) => (
                                            <li key={index} className='flex  items-center mb-5 text-[18px] font-[500] gap-x-3 '>
                                                <Image src={subItem.img} width={24} height={24} alt='' />
                                                {subItem.title}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className='flex justify-end items-end '>

                                        <div className=''>
                                            <Image src={item.img} alt='' width={48} height={48} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ServeTechnology
