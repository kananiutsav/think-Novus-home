import React from 'react'
import { WebExpertises, WebQA } from "@/interface";
import Image from 'next/image';
type WebExpertisesData = {
    data: WebExpertises[];
};
type WebQAData = {
    ans: WebQA[];
};
const Expertise: React.FC<WebExpertisesData & WebQAData> = ({ data, ans }) => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto flex justify-between relative py-[50px]'>
                <div className='w-[438px]'>
                    {data && data.map((item) => (
                        <div key={item.id}>
                            <div className='text-[36px] '>
                                <h2 className='text-white leading-[52px] font-[500]'>{item.title}</h2>
                                <span className='custom-gradient leading-[52px] font-[500]'>{item.subtitle}</span>
                            </div>
                            <div className='text-[#D2D0DD] py-[22px] text-[20px] font-[400]'>
                                <p className='leading-[28px] tracking-[-0.2px] py-2'>{item.para1}</p>
                                <p className='leading-[28px] tracking-[-0.2px] py-2'>{item.para2}</p>
                            </div>
                            <div className='pt-[10px] text-white '>
                                <button className='bg-gradient-to-r w-[148px] h-[47px]  font-[500] from-purple-500 via-purple-700 to-blue-500 rounded-full py-[8px] px-[27px]'>{item.btn}</button>
                            </div>
                        </div>
                    ))
                    }
                </div>
                <div className='w-[712px] h-[403px] '>
                    <div className=' w-[712px] h-[295px] z-0 bg-[#1A1826] border-2 border-solid border-[#5B5B5B] rounded-[14px] '></div>
                    <div className=' w-[712px] h-[295px] z-1 bg-[#1A1826] border-2 border-solid border-[#5B5B5B] rounded-[14px] absolute top-[36px]'></div>
                    <div className=' w-[712px] h-[295px] z-2 bg-[#1A1826] border-2 border-solid border-[#5B5B5B] rounded-[14px] absolute top-[72px]'></div>
                    <div className=' w-[712px] h-[295px] z-3 bg-[#1A1826] border-2 border-solid border-[#5B5B5B] rounded-[14px] absolute top-[108px]'></div>
                    <div className='p-[32px] w-[712px]     h-[295px] z-4 bg-[#1A1826] border-2 border-solid border-[#5B5B5B] rounded-[14px] absolute top-[144px] '>
                        {ans && ans.map((item) => (
                            <div key={item.id} className=''>
                                <div>
                                    <h1 className='text-white text-[30px] font-[600] leading-[31.5px] tracking-[0.74px]'>{item.heading}</h1>
                                    <p className='text-[20px] text-[#D2D0DD] font-[400] leading-[28px] py-4 tracking-[0.74px]'>{item.innHeading}</p>
                                </div>

                                <div className='flex  text-white justify-start gap-x-[30px]  pt-5  min-h-[309px]'>
                                    {item.detail.map((subItem, index) => (
                                        <div key={index} className='flex flex-col  items-center mb-5 text-[18px] font-[500] gap-x-3 '>
                                            <Image src={subItem.img} width={48} height={49} alt='' />
                                            <h3 className='pt-2 text-[16px] font-[500] leading-[31.5px] tracking-[0.74px]'>{subItem.title}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        ))

                        }
                    </div>


                </div>
            </div>

        </>
    )
}

export default Expertise
