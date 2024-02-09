import React from 'react'
import { chooseimage } from '@/assets/image'
import { WhyChooseUSWeb, ChooseWebPhotos } from "@/interface";
import Image from 'next/image';
import Heading from '@/allHeading/Heading';
import { whyChooseUsHeadingWeb, whyChooseUsHeadingmobileApp } from '@/utils/Constant';
type WhyCooseUSWebData = {
    data: WhyChooseUSWeb[];
    isMobileApp?: boolean; 
};
type ChooseWebPhotosData = {
    photo: ChooseWebPhotos[];
};

const WhyChooseUs: React.FC<WhyCooseUSWebData & ChooseWebPhotosData> = ({ data, photo ,isMobileApp}) => {
    const headingData = isMobileApp ? whyChooseUsHeadingmobileApp  :whyChooseUsHeadingWeb ;
    return (

        <>
            <div className='my-[100px] max-w-[1200px] mx-auto'>
                <Heading data={headingData}/>
                <div className='    text-white flex  max-w-[1200px] mx-auto gap-[20px] items-center '>
                    <div className=''>
                        <Image
                            src={chooseimage}
                            alt=''
                            className='w-[434px] h-[489px]'
                        />
                    </div>
                    <div className='flex justify-between  items-center gap-[20px]'>
                        <div className='flex-1   items-center justify-center '>
                            {data &&
                                data.map((item) => (
                                    item.id <= 3 && (
                                        <div key={item.id} className="bg-[#1A1826] justify-center  text-white rounded-[14px] w-[364px] h-[151px]  cursor-pointer hover:bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500  my-5  flex flex-col   ">
                                        <div className='flex gap-[30px] pl-[36px] '>
                                            <Image
                                                src={item.img}
                                                alt=''
                                                className='w-[73px] h-[73px] mt-2'
                                            />
                                            <div>
                                                <h1 className="text-[46px] leading-[66.24px] font-[600]   tracking-[-0.47px]">{item.title}</h1>
                                                <p className="text-[20px] leading-[4.59px] font-[400] mt-[4px]">{item.subtitle}</p>
                                            </div>
                                        </div>

                                    </div>
                                    )
                                ))}
                        </div>

                        {/* Second column for items with id greater than 4 */}
                        <div className='flex-1 '>
                            {data &&
                                data.map((item) => (
                                    item.id > 3 && (
                                        <div key={item.id} className="bg-[#1A1826] justify-center  text-white rounded-[14px] w-[364px] h-[151px]  cursor-pointer hover:bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500  my-5  flex flex-col   ">
                                            <div className='flex gap-[30px] pl-[36px] '>
                                                <Image
                                                    src={item.img}
                                                    alt=''
                                                    className='w-[73px] h-[73px] mt-2'
                                                />
                                                <div>
                                                    <h1 className="text-[46px] leading-[66.24px] font-[600]   tracking-[-0.47px]">{item.title}</h1>
                                                    <p className="text-[20px] leading-[4.59px] font-[400] mt-[4px]">{item.subtitle}</p>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                ))}
                        </div>
                    </div>

                </div>
                <div className='flex  gap-x-[20px] pt-[60px] '>
                    {photo && photo.map((picture)=>(
                        <div key={picture.id} className='bg-[#1A1826] cursor-pointer text-white w-[285px] py-[36px] px-[45px] h-[192px]  rounded-[14px] '>
                         <div className=''>
                         <Image
                            src={picture.img}
                            alt=''
                            className='w-[80px] h-[80px]'
                            />
                            <p className='text-[30px] pt-[12px] font-[500] leading-[25.12px] tracking-[0.47px]'>{picture.title}</p>
                         </div>
                        </div>
                    ))

                    }
                </div>
            </div>
        </>

    )
}

export default WhyChooseUs

