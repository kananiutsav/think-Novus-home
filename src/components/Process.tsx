
import React from 'react';
import Path from './Path';
import { ProcessUsed } from '@/interface';
import Image from 'next/image';
import sideart from "../assets/image/sideart.png"

type ProcessData = {
    data: ProcessUsed[];
};

const Process = ({ data }: ProcessData) => {
    return (
        <>
            <div className='my-[100px]'>


                <div className=' mx-auto justify-center '>
                    <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px]  justify-center mx-auto text-center'>
                        Process We <span className=' custom-gradient'> Follow</span>
                    </h1>
                    {/* <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px] mx-auto flex-row'>Industries <span className='custom-gradient'>We Serve</span></h1>   */}
                    <p className='text-white w-[793px] text-[20px] leading-[32px] font-[400] flex   text-center mx-auto h-[62px] '>
                        Collect your web snippets, Kindle highlights and important links – all in one place.Then quickly find them again from any device.

                    </p>
                </div>
                <div className='bg-[#1A1826]  pt-6 mt-9  text-white flex justify-between max-w-[1230px] mx-auto items-center h-[692px]'>
                    <div className='flex justify-between  items-center px-[36px]'>

                        <div className='flex-1 mx-4 items-center justify-center '>
                            {data &&
                                data.map((item) => (
                                    item.id <= 4 && (
                                        <div key={item.id} className="bg-[#05020D]  text-white rounded-[8px]  cursor-pointer hover:bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500 w-[287px] h-[125px] px-5 my-5  flex flex-col   ">
                                            <h1 className="text-[42px] leading-[81.6px] font-[700]  ">{item.num}</h1>
                                            <p className="text-[20px] leading-[32.755px] font-[600] ">{item.detail}</p>
                                        </div>
                                    )
                                ))}
                        </div>

                        {/* Second column for items with id greater than 4 */}
                        <div className='flex-1 '>
                            {data &&
                                data.map((item) => (
                                    item.id > 4 && (
                                        <div key={item.id} className="bg-[#05020D]  text-white rounded-[8px] w-[287px] h-[125px]  cursor-pointer hover:bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500 px-5 my-5  flex flex-col   ">
                                            <h1 className="text-[42px] leading-[81.6px] font-[700]  ">{item.num}</h1>
                                            <p className="text-[20px] leading-[32.755px] font-[600] ">{item.detail}</p>
                                        </div>
                                    )
                                ))}
                        </div>
                    </div>
                    <div className='px-[36px]'>
                        <Image
                            src={sideart}
                            alt=''
                            width={455}
                            height={420}
                        />


                    </div>
                </div>
            </div>
        </>
    );
};

export default Process;

