// import React from 'react'

// const Solution = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Solution
"use client"

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  WebSolutions } from "@/interface"
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y, Lazy } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Heading from '@/allHeading/Heading';
import { webSolutionHeading , mobileAppSolutionHeading} from '@/utils/Constant';

type WebSolutionsData = {
    data: WebSolutions[];
    isMobileApp?: boolean; 
}

const Solution = ({ data,isMobileApp }: WebSolutionsData) => {
    const headingData = isMobileApp ? mobileAppSolutionHeading  : webSolutionHeading ;
    const [activeIndex, setActiveIndex] = useState(1);
    const handleSlideChange = (swiper: any) => {

        setActiveIndex(swiper.activeIndex);
    };
    return (
        <div className='max-w-[1440px] mx-auto mt-[50px] '>


            <div className='pb-[50px] flex items-end max-w-[1200px] mx-auto'>
                <div>
                    <Heading data={headingData}/>
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
                            <div className= 'square p-[30px] w-[390px] h-[465px] gap-x-[20px] shrink-0 rounded-[13px]  flex flex-col  bg-[#1A1826]  '>
                                <div className='   text-white'>
                                    <div className='   justify-between items-center' >
                                    <h2 className='text-[24px] font-[500]'>{item.heading}</h2>
                                    <p className='text-[20px] font-[400] my-[20px]'>{item.subHeading}</p>     
                                    </div>
                                    <ul className='flex flex-col justify-start  items-start    min-h-[209px] '>
                                        {item.title.map((subItem, index) => (
                                            <li key={index} className='flex  items-start justify-start mb-[12px] text-[18px] font-[500] gap-x-3 '>
                                                <Image src={subItem.img1} width={24} height={24} alt='' />
                                                {subItem.detail}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='flex justify-end items-end '>
                                        <div className=''>
                                            <Image src={item.img2} alt='' width={48} height={48} />
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

export default Solution
