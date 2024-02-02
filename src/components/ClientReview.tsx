"use client"
import React, { useState } from 'react'
import { clientSays } from "@/interface";
import Image from 'next/image';
import Video from "next-video"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y, Lazy } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
type clientSay = {
    data: clientSays[];
};
const ClientReview = ({ data }: clientSay) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
    };
    return (
        <>
            <div>
                <h1 className='text-white mb-5 mt-14 pt-[20px] text-[36px] font-[600] leading-[52px]  justify-center mx-auto text-center'>
                    What Our <span className=' custom-gradient'> Client Say</span>
                </h1>
            </div>


            <div className=' '>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    // navigation={true}
                    // pagination={{ dynamicBullets: true, clickable: true }}
                    // scrollbar={{ draggable: true }}
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


                            <div className='flex justify-between px-[73px] py-[80px] max-w-[1200px] mx-auto items-center  mt-10 h-[501px] bg-[#1A1826] rounded-[10px]'>

                                <div className='     text-white justify-between'>
                                    <div className='flex flex-col mx-auto justify-center pb-[30px] items-center gap-[24px] max-w-[421px]  ' >
                                        <h1 className='text-white  text-[24px] font-[600] leading-[31px] '>  {item.title}</h1>
                                        <p className='text-[#D2D0DD] text-[18px] font-[400] leading-[26.5px] w-[421px] h-[133px]'>{item.description}</p>
                                    </div>
                                    <div className='flex    items-center gap-x-[50px] '>
                                        <div className='flex gap-x-[12px]'>
                                            <div className='w-[54px] h-[54px] '>
                                                <Image
                                                    src={item.img}
                                                    alt=''
                                                />
                                            </div>
                                            <div className='items-start flex-col  gap-y-[5px] flex'>
                                                <h4 className='text-[20px] font-[700] '>{item.clientName}</h4>
                                                <p className='text-[16px] font-[600]'>{item.profession}</p>
                                            </div>
                                        </div>
                                        <div className='flex text-white justify-center font-[800]  '>
                                            <div className="swiper-btn-prev">
                                                <div className=" py-[12px] px-[12px] text-white round mr-5 hover:text-blue-700">
                                                    <LuChevronLeft fontSize={23} fontStyle={700} />
                                                </div>
                                            </div>
                                            <div className="swiper-btn-next">
                                                <div className="py-[12px] px-[12px] round mr-5 relative group hover:text-blue-700">
                                                    <LuChevronRight fontSize={23} className="cursor-pointer hover:text-custom-gradient" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' shrink-0 justify-center  flex w-[500px] h-[345px] '>
                                    <Video
                                        src={item.video}

                                        className=' justify-center rounded-2xl'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </>
    )
}

export default ClientReview
