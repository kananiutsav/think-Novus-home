"use client"

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { TechExpertise } from "@/interface"
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y, Lazy } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

type SwiperData = {
    data: TechExpertise[]
}
const Technology = ({ data }: SwiperData) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
    };
    return (
        <div className=' '>


            <div className='py-[50px] flex items-end max-w-[1200px] mx-auto'>
                <div className='w-[70%]'>
                    <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px]'>Our Technology <span className='custom-gradient'>Expertise</span></h1>
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

            <div className='our-prouct-slider pl-[145px]'>
                <Swiper
                    slidesPerView={3.25}
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
                            <div className='p-[28px] w-[411px] rounded-2xl border-custom hover:border-[#FF0BE5] bg-[#1A1826] border-2 border-solid '>
                                <div className=' text-white w-[351px] flex flex-col items-start gap-[28px] shrink-0'>
                                    <div className='text-[22px] font-[500] leading-[32.755px] gap-4 flex  items-center' >
                                        <Image
                                            src={item.heading.img}
                                            alt=''
                                            width={44}
                                            height={44}
                                        />
                                        {item.heading.title}
                                    </div>
                                    <ul className='flex flex-col justify-center shrink-0 items-start '>
                                        {item.subHeading.map((subItem, index) => (
                                            <li key={index} className='flex  items-center mb-5 text-[18px] font-[500] gap-x-[28px] '>
                                                <Image src={subItem.img} width={30} height={30} alt='' />
                                                {subItem.title}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className='flex justify-between gap-x-[135px] '>
                                        <div className='flex items-center  justify-center  cursor-pointer'>
                                            <Image src={item.link.img} alt='' width={30} height={30} />
                                            {item.link.label}
                                        </div>
                                        <div className='hover:rotate-45 hover:transition-[3.5s]'>
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

export default Technology









// const Technology = ({ data }: SwiperData) => {
//     const [activeIndex, setActiveIndex] = useState(1);
//     const [nextButtonClicked, setNextButtonClicked] = useState(false);

//     const handleSlideChange = (swiper: any) => {
//         setActiveIndex(swiper.activeIndex);
//         setNextButtonClicked(false); // Reset the state when the slide changes
//     };

//     const handleNextButtonClick = () => {
//         setNextButtonClicked(true);
//     };

//     return (
//         <div className='pl-[140px] '>
//             <div className='py-[50px] flex items-end max-w-[1200px] mx-auto'>
//                 <div className='w-[70%]'>
//                     <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px]'>Our Technology <span className='custom-gradient'>Expertise</span></h1>
//                     <p className='text-white w-[793px] text-[20px] leading-[32px] font-[400] flex-col flex justify-center h-[62px]'>We are Top-notch Web & Mobile app development company and we think out of the box to build client visions or ideas to world-class digital products.</p>
//                 </div>
//                 <div className='flex text-white justify-end w-[30%]'>
//                     <div className="swiper-btn-prev">
//                         <div className="py-3 px-3 text-white border-white border-4  rounded-[28px] mr-5">
//                             <FiArrowLeft fontSize={20} />
//                         </div>
//                     </div>
//                     <div className="swiper-btn-next" onClick={handleNextButtonClick}>
//                         <div className={`py-3 px-3 text-white border-white border-4 rounded-[28px] mr-5 relative group ${nextButtonClicked ? 'border-gradient rounded-[28px] px-3 py-3' : ''}`}>
//                             <FiArrowRight fontSize={20} className="cursor-pointer " />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className='our-prouct-slider'>
//                 <Swiper
//                     slidesPerView={3.25}
//                     spaceBetween={20}
//                     navigation={{
//                         nextEl: '.swiper-btn-next',
//                         prevEl: '.swiper-btn-prev',
//                     }}
//                     modules={[Navigation]}
//                     initialSlide={0}
//                     onSlideChange={handleSlideChange}
//                 >
//                     {data && data.map((item) => (
//                         <SwiperSlide key={item.id}>
//                            <div className='p-[28px] w-[411px] rounded-2xl border-custom bg-[#1A1826] border-2 border-solid '>
//                           <div className=' text-white w-[351px] flex flex-col items-start gap-[28px] shrink-0'>
//                                <div className='text-[22px] font-[500] leading-[32.755px] gap-4 flex  items-center' >
//                                     <Image
//                                         src={item.heading.img}
//                                         alt=''
//                                         width={44}
//                                         height={44}
//                                     />
//                                     {item.heading.title}
//                                 </div>
//                                 <ul className='flex flex-col justify-center shrink-0 items-start '>
//                                     {item.subHeading.map((subItem, index) => (
//                                         <li key={index} className='flex  items-center mb-5 text-[18px] font-[500] gap-x-[28px] '>
//                                             <Image src={subItem.img} width={30} height={30} alt='' />
//                                             {subItem.title}
//                                         </li>
//                                     ))}
//                                 </ul>

//                                 <div className='flex justify-between gap-x-[135px] '>
//                                     <div className='flex items-center  justify-center  cursor-pointer'>
//                                         <Image src={item.link.img} alt='' width={30} height={30} />
//                                         {item.link.label}
//                                     </div>
//                                     <div className='hover:rotate-45 hover:transition-[3.5s]'>
//                                         <Image src={item.img} alt='' width={48} height={48} />
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// }

// export default Technology;









{/* <div className="absolute inset-0 bg-gradient-to-r from-[#21D4FD] via-transparent to-[#B721FF] rounded-[28px] opacity-0 group-hover:opacity-100"></div> */ }

{/* <div>
            <button className='text-white p-3 border-2 border-white border-solid text-[2xl] mr-[3px]'>Left</button>
            <button className='text-white p-3 border-2 border-white border-solid text-[2xl]'>Right</button>
        </div> */}