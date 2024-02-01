import React from 'react';
import { Benefits } from "@/interface";
import Image from 'next/image';
import Button from './Button';


type BenefitData = {
    data: Benefits[];
};
const Benefit = ({ data }: BenefitData) => {
    return (
        <div className='max-w-[1200px] mx-auto relative'>



            <div className="  h-[246px] bg-[#1A1825] rounded-[20px] mx-auto px-[50px] pt-[61px]  z-0">
                <div>
                    <h1 className='text-white text-[24px] font-[500] leading-[24px]'>Benefits</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-[18px] items-center justify-center'>
                    {data &&
                        data.map((item) => (
                            <div key={item.id} className="">

                                <ul className=' items-center list-outside text-gray-200  '>
                                    <li className="text-white py-[8px] text-[20px] font-[600] leading-[24px] flex flex-col justify-center  ">{item.title}</li>
                                </ul>
                            </div>
                        ))}
                </div>
            </div>

            <div className=' justify-center items-center absolute left-[35%]  z-10 mx-auto text-center  top-[90%] '>
                <button className='  bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500 py-[8px] rounded-full gap-[10px] text-center text-[16px] text-white leading-[24px] px-[27px]  h-[47px] '>Schedule a Developer Interview</button>
            </div>
        </div>
    )
}

export default Benefit






