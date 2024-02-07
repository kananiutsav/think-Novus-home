"use client"

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { OtherServices } from "@/interface"
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y, Lazy } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Heading from '@/allHeading/Heading';
import { otherServiceHeading } from '@/utils/Constant';

type OtherServicesData = {
  data: OtherServices[]
}
const OtherServices = ({ data }: OtherServicesData) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <>
      <div className='max-w-[100vw]  mx-auto mt-[100px]'>
        <div className=' flex items-center max-w-[1200px] ml-[11%] '>
          <div className='w-[65%]'>
            <Heading data={otherServiceHeading} />
          </div>
          <div className='flex text-white justify-end w-[35%]'>
          <div className=' rounded-full bg-black  btn mr-10'>
            <button className=' text-white py-[8px] px-[27px]  text-[16px] font-[500] leading-[25.53px] tracking-[-0.15px] items-center '>Explore All Services</button>
            </div>
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
        <div className='ml-[11%] '>
          <Swiper
            slidesPerView={3.30}
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

                <div className='text-white   relative   '>
                  <div className='text-[22px] font-[500]    '>
                    <div className='z-0'>
                      <Image
                        src={item.img}
                        alt=''
                        width={387}
                        height={305}
                        className='w-[400px] h-[305px] rounded-[9px]'
                      />
                    </div>
                    <div className='bg-[#000000]  z-10 absolute top-[236px]  bg-opacity-[67%] w-full h-[69px] items-center justify-center '>
                      <h2 className=' text-white text-[20px] font-[500] px-[22px] items-center justify-center leading-[59.5px] '>
                        {item.title}
                      </h2>
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

export default OtherServices


// const Technology = ({ data }: SwiperData) => {
//   const [activeIndex, setActiveIndex] = useState(1);

//   const handleSlideChange = (swiper: any) => {
//       setActiveIndex(swiper.activeIndex);
//   };

//   return (
//       <div className='max-w-[100vw]  mx-auto'>
//           <div className='py-[50px] flex items-end max-w-[1200px] ml-[11%]'>
//               <div className='w-[70%]'>
//                   <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px]'>Our Technology <span className='custom-gradient'>Expertise</span></h1>
//                   <p className='text-white w-[793px] text-[20px] leading-[32px] font-[400] flex-col flex justify-center h-[62px]'>We are a top-notch Web & Mobile app development company, and we think out of the box to build client visions or ideas into world-class digital products.</p>
//               </div>
//               <div className='flex text-white justify-end w-[30%]'>
//                   <div className="swiper-btn-prev ">
//                       <div className="round py-3 px-3 text-white hover:text-blue-700  border-white border-2 hover:border-2  rounded-[28px] mr-5">
//                           <FiArrowLeft fontSize={20} className='' />
//                       </div>
//                   </div>
//                   <div className="swiper-btn-next">
//                       <div className="round py-3 px-3 text-white border-white border-2 hover:border-2 rounded-[28px] mr-5 relative group hover:text-blue-700">
//                           <FiArrowRight fontSize={20} className=" cursor-pointer " />
//                       </div>
//                   </div>
//               </div>
//           </div>
//           <div className='ml-[9%] our-prouct-slider '>
//               <Swiper
//                   slidesPerView={3.35}
//                   spaceBetween={20}
//                   navigation={{
//                       nextEl: '.swiper-btn-next',
//                       prevEl: '.swiper-btn-prev',
//                   }}
//                   modules={[Navigation]}
//                   initialSlide={0}
//                   onSlideChange={handleSlideChange}
//                   speed={1000}
//               >
//                   {data && data.map((item) => (
//                       <SwiperSlide key={item.id}>
//                           <div className= 'square p-[28px] w-[400px] rounded-2xl  hover:border-2 border-2  border-solid  bg-[#1A1826] ml-[20px]  '>
//                               <div className='text-white w-[351px] flex flex-col items-start shrink-0'>
//                                   <div className='text-[22px] font-[500] leading-[32.755px] mb-5 gap-4 flex items-center'>
//                                       <Image
//                                           src={item.heading.img}
//                                           alt=''
//                                           width={44}
//                                           height={44}
//                                           className='hover:rotate-45 hover:transition-[3.5s]'
//                                       />
//                                       {item.heading.title}
//                                   </div>
//                                   <ul className='flex flex-col justify-center shrink-0 items-start '>
//                                       {item.subHeading.map((subItem, index) => (
//                                           <li key={index} className='flex  items-center mb-5 text-[18px] font-[500] gap-x-[28px] '>
//                                               <Image src={subItem.img} width={30} height={30} alt='' />
//                                               {subItem.title}
//                                           </li>
//                                       ))}
//                                   </ul>
//                                   <div className='flex justify-between gap-x-[135px] '>
//                                       <div className='flex items-center justify-center cursor-pointer'>
//                                           <Image src={item.link.img} alt='' width={30} height={30} />
//                                           {item.link.label}
//                                       </div>
//                                       <div className='hover:rotate-45 hover:transition-[3.5s]'>
//                                           <Image src={item.img} alt='' width={48} height={48} />
//                                       </div>
//                                   </div>
//                               </div>
//                           </div>
//                       </SwiperSlide>
//                   ))}
//               </Swiper>
//           </div>
//       </div>
//   );
// };

// export default Technology;
