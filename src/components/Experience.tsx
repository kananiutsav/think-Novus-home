import Image from 'next/image'
import React from 'react'
import bgbgbg from "@/assets/image/bgbgbg.png"
import { experienced } from "@/interface";


type Experiences = {
    data: experienced[];
};
const Experience = ({ data }: Experiences) => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto mt-[63px]  relative'>


                <div className='flex  gap-4 mt-[63px]  '>
                    <div className=''>
                        <Image
                            src={bgbgbg}
                            alt=''
                            width={387}
                            height={387}
                        />
                    </div>
                    <div className='  shrink-0 mt-[25px]'>

                        <h1 className='text-white   text-[36px] font-[600] leading-[30px]  '>
                            Why Choose <span className=' custom-gradient'> Us </span>
                        </h1>
                        <h1><span className=" text-black GFG text-center text-[75px] font-[600] ">8+ Years </span><span className='custom-gradient text-[24px]  font-[600] leading=[9.19px]  text-center'>Experience</span></h1>
                    </div>

                </div>
                <div className='flex gap-[21px] justify-end absolute left-[14.5%] bottom-[30px] z-10'>
                    {data &&
                        data.map((item) => (
                            <div key={item.id} className="  bg-[#1A1826] w-[213px] h-[178px] flex flex-col items-center py-[28px] px-[23px] rounded-[14px] ">
                                <div className=" items-center text-white flex flex-col gap-[12px]">
                                    <div>
                                        <Image
                                            src={item.img}
                                            alt=''
                                            // width={387}
                                            className=" w-[50px] h-[50px]"
                                        />
                                    </div>
                                    <div className='w-[164px] h-[60px] items-center gap-[4px] flex flex-col'>
                                        <h1 className="text-[24px] custom-gradient text-center font-[700] ">{item.record}</h1>
                                        <p className="text-[18px] font-[500] text-center leading-[4.8px]   ">{item.detail}</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    <div className='flex w-[321px] h-[178px] justify-center items-center py-[41px] px-[34px] bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500 rounded-[14px]  '>
                        <div className='flex flex-col w-[251px] h-[40px]  justify-center shrink-0'>
                            <h1 className='text-white text-center text-[20px] w-[251px] h-[40px] font-[500] '>
                                What to start a project?
                            </h1>
                            <button className='text-white mt-3 text-center text-[14px] font-[500] py-[8px] px-[27px] border border-white border-solid rounded-3xl'>Get Cost Estimation for Free</button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
