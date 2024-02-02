"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Lazy } from 'swiper/modules'
import { Featured } from '@/interface'
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

type FeatureData = {
    data: Featured[]
}

const Features = ({ data }: FeatureData) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
    };
    return (
        <>
            <div className='max-w-[1440px] mx-auto'>
                <div className='py-[50px] flex items-end max-w-[1200px] mx-auto'>
                    <div className='w-[70%]'>
                        <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px]'>Our Key  <span className='custom-gradient'>Features</span></h1>
                        <p className='text-white w-[775px] text-[20px] leading-[32px] font-[400] flex-col flex justify-center h-[62px]'>Services That We Deliver Makes Us Dignified As One of The Top App Development Companies.</p>
                    </div>
                    <div className='flex text-white justify-end w-[30%]'>
                    <div className="swiper-btn-prev">
                        <div className="py-3 px-3 text-white round mr-5">
                            <FiArrowLeft fontSize={20} />
                        </div>
                    </div>
                    <div className="swiper-btn-next">
                        <div className="py-3 px-3 text-white round mr-5 relative group">
                            <FiArrowRight fontSize={20} className="cursor-pointer hover:text-custom-gradient" />

                        </div>
                    </div>

                </div> 
                </div>
            

                <div className='justify-end ml-[120px]  '>


                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4.5}
                        // navigation={true}
                        pagination={{ dynamicBullets: true, clickable: true }}
                        scrollbar={{ draggable: true }}
                        loop
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
                                <div className='mt-[40px]  '>
                                    <div className='bg-[#1A1826] flex w-[72px] h-[72px] p-[13.5px] justify-center items-center shrink-0  rounded-[55.125px] z-10 absolute top-0 left-[22px] round2' >
                                        <Image
                                            src={item.img}
                                            alt=''
                                            width={44}
                                            height={44}

                                        />
                                    </div>
                                    <div className=' w-[285px] justify-center   h-[347px] shrink-0 rounded-[14px] item-center   flex flex-col bg-[#1A1826]  relative square'>
                                        <div className='w-[241px] mx-auto '>
                                            <h1 className='text-[24px] font-[500] leading-[32px] text-white '> {item.title}</h1>
                                            <h1 className='text-[24px] font-[500] leading-[32px] text-white'> {item.subtitle}</h1>
                                            <p className='text-[#D2D0DD] text-[18px] pt-[8px] font-[400] leading-[26.5px] tracking-tighter '>  {item.detail}</p>
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

export default Features
