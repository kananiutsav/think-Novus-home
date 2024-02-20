import React from 'react'
import { Creativestacks } from '@/interface';
import Image from 'next/image';
import Heading from '@/allHeading/Heading';
import { creativeStackHeading } from '@/utils/Constant';
type CreativestacksData = {
    data: Creativestacks[];
};
const Stack = ({ data }: CreativestacksData) => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto bg-[#1A1825] rounded-[10.34px] px-[38px] pb-[38px]'>
                <div>
                    <Heading data={creativeStackHeading} />
                </div>
                <div className='flex items-center gap-[17px] text-center'>
                    {
                        data && data.map((item) => (
                            <div key={item.id} className=' py-[27px] px-[19px] rounded-[7.35px] bg-[#05020D] '>
                                <div className='w-[134.54px] '>
                                    <Image
                                        src={item.img}
                                        alt=''
                                        className='w-[58px] h-[58px] ml-9  '
                                    />
                                    <h2 className='text-white pt-2'>{item.title}</h2>


                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </>
    )
}

export default Stack
