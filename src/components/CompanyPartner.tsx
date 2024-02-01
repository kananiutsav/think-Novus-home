"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay } from 'swiper/modules'
import { CompanyPartner } from '@/interface'
import Button from './Button';
import { FiArrowRight } from "react-icons/fi";
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'




type SwiperData = {
  data: CompanyPartner[]
}
const CompanyPartner = ({ data }: SwiperData) => {

  return (
    <>
      <div className=''>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          navigation={true}
          // pagination={{ dynamicBullets: true, clickable: true }}
          scrollbar={{ draggable: true }}
          loop
          speed={4000}
          effect="slide"
        >
          {data && data.map((item) => (
            <SwiperSlide key={item.id} >
              <div className='bg-[#05020D] flex text-white justify-center items-center container  mx-auto'>
                <div className='items-center justify-center '>
                  <div className='pb-5'>
                    <h1 className='text-[52px] font-bold '>{item.title}{item.id === 3 ? <span className='custom-gradient '> {item.innertitle}</span> : <span className='block custom-gradient '>{item.innertitle}</span>}</h1>
                  </div>
                  <div className=' shrink-0 w-[692px] h-[90px] flex-col flex justify-center pb-5'>
                    <p className='flex text-2xl font-medium'>{item.subtitle}</p>
                  </div>
                  <div className='inline-flex h-[47px] gap-[20px] flex-shrink-0 py-[8px]  pt-10 '>
                    <div className='flex'>

                      <Button
                        label={item.btn1}
                        className='px-[14px] md:text-base text-sm py-[10px]  font-semibold text-primary '

                      />

                    </div>
                    <div className='flex px-[14px] md:text-base cursor-pointer text-sm  justify-center font-semibold text-primary border-custom border  w-[188px] h-[47px] border-spacing-11 rounded-[53px] text-white'>
                      <button className='flex items-center gap-3 '>
                        {item.btn2}
                        <FiArrowRight fontSize="1.25rem" />
                      </button>
                    </div>
                  </div>
                </div>
                <div  >
                  <Image
                    src={item.companypartnerimg}
                    alt=''

                    width={550}
                    className=' slide-in-elliptic-left-fwd'
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

export default CompanyPartner
