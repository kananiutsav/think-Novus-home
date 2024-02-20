import React from 'react'
import { RaisingAndroidApps } from "@/interface"
import Image from 'next/image';

type RaisingAndroidAppsData = {
    data: RaisingAndroidApps[];
}
const RaisingAndroidApp = ({ data }: RaisingAndroidAppsData) => {
    return (
        <>
            <div className='bg-[#1A1826] mt-[50px]'>
                <div className='max-w-[1200px] mx-auto py-[85px]'>
                    <div className='text-center max-w-[1200px] mx-auto'>
                        <h1 className='text-[36px] text-white font-[500] text-center leading-[50px]'>Raising The Bar For <span className='custom-gradient font-[700]'>Android Expertise</span></h1>
                        <p className='pt-[10px] text-[#D2D0DD] text-[20px] leading-[28.5px] font-[400] w-[937px] mx-auto '>The Healthcare Industry has undergone through the most imperative transitions recently. Drive in more patients’ engagement with customer-centric apps with indomitable features to simplify their lives and become their personal health instructor.</p>
                    </div>

                    <div className='flex justify-between pt-[66px]'>
                        {data && data.map((item) => (
                            <div key={item.id}>
                                <div className='justify-center w-[250px] items-center'>
                                    <Image
                                        src={item.img}
                                        alt=''
                                        className='w-[62px] h-[62px] items-center ml-[95px]'
                                    />
                               
                                    <h2 className='custom-gradient text-[30px] font-[700] leading-[83.64px] text-center'>{item.heading}</h2>
                                    <p className='text-white text-[20px] font-[400] leading-[28.25px] text-center'>{item.detail}</p>
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

export default RaisingAndroidApp
