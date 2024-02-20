"use client"

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { CreativeUiUxDesigns } from "@/interface";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y, Lazy } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Heading from '@/allHeading/Heading';
import { creativeUiUxDesignHeading,  creativeGraphicDesignHeading} from '@/utils/Constant';

type CreativeUiUxDesignsData = {
    data: CreativeUiUxDesigns[];
    isCreativeDesign?: boolean;
}
const CreativeDesigns = ({ data, isCreativeDesign }: CreativeUiUxDesignsData) => {
  const  headingData = isCreativeDesign ? creativeGraphicDesignHeading  :creativeUiUxDesignHeading ;
    const [activeIndex, setActiveIndex] = useState(1);

    const handleSlideChange = (swiper: any) => {
      setActiveIndex(swiper.activeIndex);
    };
    return (
        <>
            <div className='max-w-[1200px] mx-auto mb-[100px]'>
            <div className=' flex items-center '>
          <div className='w-[65%]'>
            <Heading data={headingData} />
          </div>
          <div className='flex text-white justify-end w-[35%] items-end mt-[100px]'>
        
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
                <div className='flex gap-[20px] pb-[40px]'>
                    {
                        data && data.map((item) => (
                            <div key={item.id}>
                                <div className='flex py-[12px] px-[24px] rounded-full btn'>
                                    <button className='text-white text-[20px] font-[500] leading-[20.5px]'>{item.btn}</button>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className='bg-[#1A1825] py-[76px] pl-[76px] rounded-[10px]'>
                <Swiper
            slidesPerView={2.26}
            spaceBetween={20}
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

                <div >
                
                    <div className=''>
                      <Image
                        src={item.img}
                        alt=''
                        width={484}
                        height={428}
                        className='w-[484px] h-[428px] rounded-[9px]'
                      />
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

export default CreativeDesigns
