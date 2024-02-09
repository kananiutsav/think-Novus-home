import React from 'react'
import { WebEngagementModels } from '@/interface';
import Image from 'next/image';
import Heading from '@/allHeading/Heading';
import { webEngagementModelHeading,mobileAppEngagementModelHeading } from '@/utils/Constant';

type WebEngagementModelsData = {
    data: WebEngagementModels[];
    isMobileApp?: boolean; 
};
const EngagementModel = ({ data, isMobileApp }: WebEngagementModelsData) => {
    const headingData = isMobileApp ?  mobileAppEngagementModelHeading : webEngagementModelHeading;
    return (
        <>
            <div>
                <div className="max-w-[1200px] mx-auto ">
                    <div>
                        <Heading data={headingData} />
                    </div>

                    <div className="text-white flex flex-wrap justify-between gap-y-[20px] pt-[30px] ">
                        {
                            data && data.map((item) => (
                                <div key={item.id} className="w-[387px] h-[427px] rounded-[14px] p-[20px] bg-[#1A1826] toolsborder ">
                                    <Image
                                        src={item.img1}
                                        alt=""
                                        className="w-[72px] h-[72px]"
                                    />
                                    <h4 className="text-[24px] font-[500] leading-[31.5px] pt-[30px]">{item.title}</h4>
                                    <div>
                                        <ul className='flex flex-col justify-center  items-start pt-[20px]'>
                                            {item.detail.map((subItem, index) => (
                                                <li key={index} className='flex  items-center mb-[12px] text-[20px] leading-[32.76px] font-[500] gap-x-3 '>
                                                    <Image src={subItem.img2} width={24} height={24} alt='' />
                                                    {subItem.work}
                                                </li>
                                            ))}
                                        </ul>
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

export default EngagementModel
