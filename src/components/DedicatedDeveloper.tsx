

import React from 'react';
import { Developers } from '@/interface';
import Image from 'next/image';
import sideimg from "@/assets/image/sideimg.png"

type DevelopersData = {
    data: Developers[];
};

const DedicatedDeveloper = ({ data }: DevelopersData) => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='pb-[50px] pt-[20px] '>
                <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px]'>Our Dedicated<span className='custom-gradient'> Developers </span></h1>
                <p className='text-white w-[793px] text-[20px] leading-[32px] font-[400] flex-col flex justify-center h-[62px]'>Collect your web snippets, Kindle highlights and important links – all in one place. Then quickly find them again from any device.</p>
            </div>
            <div className='flex mx-auto justify-center items-center'>
                <div className='w-[70%]  items-center flex flex-wrap gap-[16px] '>
                    {data &&
                        data.map((item) => (
                            <div
                                key={item.id}
                                className={`text-white gap-x-[20px] flex  ${item.id === 3 ? 'px-[172px]' : 'px-[45px]'} py-[27px]  ${item.id === 3 ? '' : ''} w-[${item.id === 3 ? 818 : 399}px] bg-[#1A1826] rounded-[10px]  text-center justify-center`}
                            >
                                <div>
                                    <div className='text-[20px] font-[600] leading-[30px] pb-[14px]'>
                                        <h1>{item.heading}</h1>
                                    </div>
                                    <div className='flex items-center text-center gap-x-[107px]'>
                                        {item.detail.map((subItem, index) => (
                                            <div
                                                key={index}
                                                className=' h-[152px] text-center justify-center gap-x-[50px] items-center'
                                            >
                                                <div>
                                                    <Image
                                                        src={subItem.img}
                                                        alt=''                                                      
                                                        className='ml-3  w-[76px] h-[76px]'
                                                    />
                                                </div>
                                                <div className='text-[16px] font-[500] leading-[20px] text-center '>
                                                    <h4>{subItem.title}</h4>
                                                    <h4>{subItem.subtitle}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className='text-white w-[30%] h-[520px] bg-[#1A1826] rounded-[10px] '>
                    <div>
                        <Image
                            src={sideimg}
                            alt=''
                            className='w-[362px] h-[343px] '
                        />
                    </div>
                    <div className='flex-col items-start gap-[16px] ml-[28px] mt-[28px]'>
                        <div className='font-[600] text-[20px] '>
                            <h4>Hire Dedicated Developers</h4>
                            <h4> for your dream project</h4>
                        </div>
                       <div className=' mt-[16px]'>
                       <button className=' adc py-[8px] px-[27px] gap-[12px]  text-center text-[16px] font-[500]  '>Hire Now</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DedicatedDeveloper;






