"use client"
import React from 'react';
import { ServiceDesigns } from "@/interface";
import { FiArrowRight } from "react-icons/fi";
import Image from 'next/image';
import {useRouter} from 'next/navigation'
type ServiceDesignsData = {
    data: ServiceDesigns[];
}

const ServiceDesign = ({ data }: ServiceDesignsData) => {
    const router=useRouter();
    return (
        <>
            <div className='max-w-[1200px] mx-auto '>
                {data && data.map((item) => (
                    <div key={item.id} className={`flex mb-[60px] bg-[#1A1826] rounded-[25.06px] ${item.id % 2 === 1 ? 'A' : 'B'}`}>
                        {item.id % 2 === 1 ? (
                            <>
                                <div className='w-[50%]'>
                                    <div className='pl-[80px] pt-[53px] '>
                                        <div>
                                            <h2 className='text-[36px] font-[700] leading-[47.23px] text-white'>{item.heading} <span className='custom-gradient'>{item.innHeading}</span></h2>
                                        </div>
                                        <div className='flex  text-center text-white py-[25px] w-[411px]  gap-x-[15px] items-center  '>
                                            {item.detail.map((subItem, index) => (
                                                <div key={index} className='text-[18px] font-[500] '>
                                                    <Image src={subItem.img} alt='' className='w-[60px] h-[60px] items-center ' />
                                                    <p className='pt-[7px] text-[18px] leading-[18.77px] font-[400]'>{subItem.title}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <p className='text-[20px] font-robotto text-white w-[455px] leading-[28.79px] font-[400] '>{item.description}</p>
                                        </div>
                                        <div className='pt-[30px] flex gap-x-4'>
                                            <button onClick={()=>router.push("/services/creativedesign")} className='text-[#F4F0FF] text-[16px] leading-[26.67px] font-[500] py-[8px] px-[27px] rounded-full border-white border-2 flex items-center border-solid gap-x-2'>{item.btn1} <FiArrowRight fontSize={25} /></button>
                                            <button onClick={()=>router.push("/services/androidapp")}  className='text-[#F4F0FF] text-[16px] leading-[26.67px] font-[500] py-[8px] px-[27px] rounded-full bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500'>{item.btn2}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[50%] rounded-r-[25.09px]'>
                                    <Image
                                        src={item.mainimg}
                                        alt=''
                                        height={556}
                                        width={596}
                                        className='rounded-r-[25.09px]' />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='w-[50%] '>
                                    <Image
                                        src={item.mainimg}
                                        alt=''
                                        height={556}
                                        width={596}
                                        className='rounded-l-[25.09px]' />
                                </div>
                                <div className='w-[50%]'>
                                    <div className='pl-[80px] pt-[53px] '>
                                        <div>
                                            <h2 className='text-[36px] font-[700] leading-[47.23px] text-white'>{item.heading} <span className='custom-gradient'>{item.innHeading}</span></h2>
                                        </div>
                                        <div className='flex  text-center text-white py-[25px] w-[411px]  gap-x-[15px] items-center  '>
                                            {item.detail.map((subItem, index) => (
                                                <div key={index} className='text-[18px] font-[500] '>
                                                    <Image src={subItem.img} alt='' className='w-[60px] h-[60px] items-center ' />
                                                    <p className='pt-[7px] text-[18px] leading-[18.77px] font-[400]'>{subItem.title}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <p className='text-[20px] font-robotto text-white w-[455px] leading-[28.79px] font-[400] '>{item.description}</p>
                                        </div>
                                        <div className='pt-[30px] flex gap-x-4'>
                                            <button className='text-[#F4F0FF] text-[16px] leading-[26.67px] font-[500] py-[8px] px-[27px] rounded-full border-white border-2 flex items-center border-solid gap-x-2'>{item.btn1} <FiArrowRight fontSize={25} /></button>
                                            <button className='text-[#F4F0FF] text-[16px] leading-[26.67px] font-[500] py-[8px] px-[27px] rounded-full bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500'>{item.btn2}</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default ServiceDesign;
