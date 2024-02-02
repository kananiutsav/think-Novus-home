import React from 'react'
import { Methodologies } from "@/interface";
import Image from 'next/image';

type MethodologyData = {
    data: Methodologies[]
}
const Methodology = ({ data }: MethodologyData) => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto mt-[40px]'>
               
                    <div className=' mx-auto justify-center '>
                        <h1 className='text-white py-[10px] text-[36px] font-[500] leading-[52px]  justify-center mx-auto text-center'>
                        Methodologies  <span className=' custom-gradient'>We Use</span>
                        </h1>
                        {/* <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px] mx-auto flex-row'>Industries <span className='custom-gradient'>We Serve</span></h1>   */}
                        <p className='text-white w-[631px] text-[20px] leading-[32px] font-[400] h-[66px] flex   text-center mx-auto  '>
                        We use these methodologies to ensure optimal software  development tailored to your requirements

                        </p>
                    </div>
               

                <div className='flex  gap-[20px] mt-[30px]'>
                    {data &&
                        data.map((item) => (
                            <div key={item.id} className="  bg-[#1A1826] w-[285px] h-[328px] flex items-start gap-[10px] square py-[28px] px-[22px] rounded-[20px]  ">

                                <div className='flex flex-col items-start  gap-[18px]'>


                                    <Image
                                        src={item.img}
                                        alt=''
                                        // width={387}
                                        className=" w-[52px] h-[52px]"
                                    />

                                    <h1 className="text-[24px] w-[55px] flex text-white  text-center font-[500] ">{item.title}</h1>
                                    <p className="text-[18px] text-[#D2D0DD] w-[241px] font-[400]  leading-[26.5px]  tracking-tighter ">{item.detail}</p>

                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Methodology
