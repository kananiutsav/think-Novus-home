import Heading from '@/allHeading/Heading'
import { toolsTechHeading, toolsTechHeadingmobileApp } from '@/utils/Constant'
import React from 'react'
import { WebToolsAndTechnologies } from "@/interface";
import Image from 'next/image';

type WebToolsAndTechnologiesData = {
    data: WebToolsAndTechnologies[];
    isMobileApp?: boolean; 
}
const ToosAndTechnology = ({ data, isMobileApp }: WebToolsAndTechnologiesData) => {
    const headingData = isMobileApp ? toolsTechHeadingmobileApp : toolsTechHeading;
    return (
        <>
            <div className='max-w-[1200px] mx-auto pt-[80px]'>
                <div>
                    <Heading data={headingData} />
                </div>
                <div>
                    <div className='gap-[24px] '>
                        <div>
                            <h2 className='text-[#999999] text-[30px]  font-[700] mb-6 ml-2' >Programming Languages</h2>
                        </div>
                        {
                            data && data.map((item) => (
                                <div key={item.id} className='text-white flex bg-[#1A1825] py-[34px] px-[32px] gap-[39px] rounded-[10px] toolsborder mb-5'>
                                    <div className='w-[25%] justify-center items-center my-auto '>
                                        <h3 className='text-[24px]   font-[500] leading-[68.09px]'>{item.title}</h3>
                                    </div>
                                    <div className='w-[798px] '>
                                        <div className='flex flex-wrap     gap-[21.28px]  '>
                                            {item.detail.map((tech, index) => (
                                                <div key={index} className=' font-[500] bg-[#05020D] py-[8.51px] px-[18.09px] gap-[10.64px] rounded-[47.87px] text-[20px] leading-[21.81px] items-center'>
                                                    {tech.subtitle}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='bg-[#1A1825] gap-x-[430px] py-[30px] px-[32px] rounded-[10.64px] h-[106.38px]  items-center mt-[39px] flex toolsborder'>
                        <h3 className='text-white font-[400] text-[24px] justify-center'>Want to start a Web development project?</h3>
                        <button className='text-white text-[16px] tracking-[-0.15px] items-center font-[500] bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500 rounded-full py-[8px] px-[27px] border-[1.06px] '>Let’s Discuss</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToosAndTechnology


