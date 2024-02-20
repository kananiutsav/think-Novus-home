import React from 'react'
import { FrameWorks } from "@/interface";
import Image from 'next/image';
import Heading from '@/allHeading/Heading';
import { frameworkHeading } from '@/utils/Constant';
type FrameWorksData = {
    data: FrameWorks[];
};
const FrameWork = ({ data }: FrameWorksData) => {
    return (
        <>
        <div className='max-w-[1200px] mx-auto pt-10'>
        <Heading data={frameworkHeading}/>
        </div>
            <div className='max-w-[1200px] mx-auto flex flex-wrap justify-between gap-[20px] '>
                
                {
                    data && data.map((item) => (
                        <div key={item.id} className='border-2 border-solid lookingborder  w-[386px] h-[251px] rounded-[25.53px] justify-center  items-center mx-auto'>
                            <div className='justify-center items-center pl-[160px] pt-[50px]'>
                                <Image
                                    src={item.img}
                                    alt=''
                                    className='w-[62px] h-[62px] justify-center items-center '
                                />
                            </div>
                            <div className='text-[24px] text-white font-[500] text-center'>
                                <p className='leading-[34.04px]'>{item.title}</p>
                                <p className='leading-[34.04px]'>{item.innTitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default FrameWork
