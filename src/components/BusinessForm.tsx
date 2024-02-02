// import React from 'react'
"use client"
import React from 'react'
import { BusinessDetails, BusinessServices, Awards, lastFooters } from "@/interface";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay } from 'swiper/modules'
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'



type BusinessDetailsData = {
  data: BusinessDetails[];
};

type BusinessServicesData = {
  item: BusinessServices[];
}

type AwardsData = {
  award: Awards[];
}

type lastFooterData = {
  footer: lastFooters[];
}

const BusinessForm: React.FC<BusinessDetailsData & BusinessServicesData & AwardsData & lastFooterData> = ({ data, item, award, footer }) => {
  return (
    <div className="text-white mx-auto my-[50px] w-[1200px] rounded-[10px] h-[726px] bg-[#1A1826] square">
      <div className='ml-[44px] '>
        <h1 className='text-white py-[14px] text-[48px] font-[500] leading-[64px]'>Let’s Talk <span className='custom-gradient'>Business!</span></h1>
        <p className='text-[#D2D0DD]   text-[18px] leading-[28px] font-[400] flex-col flex justify-center '>Have questions about your idea? in your details to discuss with our solution consultants. We look forward to hear from you.</p>
      </div>
      <div className='flex '>
        <div className='w-[40%] border-r my-[30px] border-solid border-[#2D2D2D]'>
          <div className="ml-[44px] mt-[14px] ">
            {data.map((detail) => (
              <div key={detail.id} className=" flex gap-x-[10px] pb-[28px]">

                <Image
                  src={detail.img}
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                <p className="text-[16px] text-[#D2D0DD]  font-[400]">{detail.title} </p>
                <p className="text-[16px] text-white font-[400] flex flex-col">{detail.description}</p>
              </div>
            ))}
          </div>
          <div className="flex ml-[44px] gap-x-[28px] items-center py-[50px]">
            <div className='text-[#969696] text-[20px] font-[500] leading-[110%] '>
              <h1>Follow us on</h1>
            </div>
            <div className='flex gap-x-[16px] cursor-pointer'>
              {
                footer && footer.map((item) => (
                  <div key={item.id}>
                    <Image
                      src={item.img}
                      alt=''
                      width={28}
                      height={28}
                    />
                  </div>
                ))
              }
            </div>
          </div>
          <div className='max-w-[530px] ml-[44px] '>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={2.9}
              // navigation={true}
              // pagination={{ dynamicBullets: true, clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={{ delay: 2000 }}
              loop
              speed={2000}
              effect="slide"
            >
              {award && award.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className='mt-[20px]'>
                    <div className='w-[152px] h-[139px]   flex flex-col justify-center items-center  border-2 border-solid border-gray-600 ' >
                      <Image
                        src={item.img}
                        alt=''
                        width={124}
                        height={109}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className='text-black w-[60%] mr-[44px]'>
          <form className="flex flex-col gap-4   mx-auto h-[543px] pt-[36px] pl-[41px] ">
            <div className="flex items-center gap-x-4">

              <input
                type='text'
                id="fullName"
                placeholder='Full Name*'
                className="text-white bg-transparent w-full border-b-2 border-[#4E4E4E] py-3"
              />
            </div>
            <div className='flex gap-x-5 w-full '>
              <div className="flex flex-col w-full ">
                <input
                  type='email'
                  id="email"
                  placeholder='Email*'
                  className="text-white bg-transparent  py-3 w-full border-b-2 border-[#4E4E4E]"
                />
              </div>
              <div className="flex flex-col w-full">
                <input
                  type='number'
                  id="phoneNumber"
                  placeholder='Phone Number'
                  className="text-white bg-transparent  py-3 w-full border-b-2 border-[#4E4E4E]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <input
                type='text'
                id="projectDescription"
                placeholder='Describe Your Project'
                className="text-white bg-transparent  py-3 w-full border-b-2 border-[#4E4E4E]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-[700] text-[16px] ">Services:</label>
              <div className="flex flex-wrap gap-3 mt-[16px]">
                {item.map((service) => (
                  <div key={service.id} className="py-[8px] px-[17px] bg-black rounded-full">
                    <div className="text-white text-[14px] ">
                      {service.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='inline-flex items-end justify-between'>
              <div className="flex flex-col mt-[30px]">
                <label htmlFor="file" className="text-[#999] font-[400] text-[14px]">
                  Upload: .jpg, .png, .pdf, .csv, .xlsx, .doc, .docx file as document.
                </label>
                <div className="flex items-center gap-y-4">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept=".jpg, .png, .pdf, .csv, .xlsx, .doc, .docx"
                    className="text-white bg-black w-[0] h-[0] opacity-0 overflow-hidden"
                  />
                  <label
                    htmlFor="file"
                    className="text-[#999] font-[500] text-[16px] mt-2 text-center cursor-pointer bg-black items-center py-[15px] px-5 rounded-[10px] w-[466px] h-[55px]"
                  >
                    + Attach File
                  </label>
                </div>
              </div>
              <button className='text-[16px] mr-4 rounded-[10px] border border-solid border-[#2D2D2D] text-white bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500 items-center py-[8px] px-[27px] w-[121px] h-[55px]'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BusinessForm;

