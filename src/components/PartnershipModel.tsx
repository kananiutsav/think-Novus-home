"use client"

import React, { useState } from 'react';
import { PartnershipModels } from '@/interface';
import Image from 'next/image';
import Benefit from './Benefit';
import { benefit } from '@/utils/Constant';

type PartnershipModelData = {
    data: PartnershipModels[];
};

const PartnershipModel: React.FC<PartnershipModelData> = ({ data }) => {
    const [selectedHeading, setSelectedHeading] = useState<number | null>(null);

    // Set the default selection to the first item if null
    React.useEffect(() => {
        if (selectedHeading === null && data.length > 0) {
            setSelectedHeading(data[0].id);
        }
    }, [selectedHeading, data]);

    return (
        <>
            <div className='max-w-[1200px] mx-auto relative'>


                <div className='' >
                    <div className='pt-[60px] pb-[30px] max-w-[1200px] mx-auto text-center justify-center items-center'>
                        <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px]'>Partnership  <span className='custom-gradient'>Models </span></h1>
                        <p className='text-white w-[722px] mx-auto text-[20px] leading-[32px] font-[400] items-center text-center justify-center h-[69px]'>Collect your web snippets, Kindle highlights and important links – all in one place.
                            Then quickly find them again from any device.</p>
                    </div>
                    <div className='flex flex-col   justify-center  '>
                        <div className='flex items-center justify-center'>
                            {data.map((item) => (
                                <div key={item.id} className='mb-2 flex'>
                                    <div className='flex'>
                                        <button
                                            className={`mt-[20px] p-2  w-[206px] h-[131px] ml-4 text-[28px] text-center  font-[500] rounded-[20px]   ${selectedHeading === item.id ? 'bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500  text-white  ' : 'bg-[#1A1825] text-white'
                                                }`}
                                            onClick={() => setSelectedHeading(item.id)}
                                        >
                                            <div className='flex flex-col '>
                                                <h1 className=''>
                                                    {item.heading}
                                                </h1>
                                                <h2>
                                                    {item.innHeading}
                                                </h2>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className=' '>
                            {data.map((item) => (
                                selectedHeading === item.id && (
                                    <div key={item.id} className='mt-[30px] flex w-[945px] mx-auto h-[216px] items-start justify-evenly pt-[30px] pb-[55px] rounded-[14px] border-2 border-[#FF0BE5] border-solid bg-[#05020D]'>
                                        {item.detail.map((subItem) => (
                                            <div key={subItem.id} className='justify-center'>
                                                <div className=''>
                                                    <h1 className=' text-white  font-[500] text-[20px] mt-[20px] text-start'>{subItem.title}</h1>
                                                </div>
                                                <div className='text-start '>
                                                    <p className=' text-white  font-[500] text-[20px] mt-[20px] text-start ' >{subItem.subtitle}</p>
                                                    <p className=' text-white  font-[500] text-[20px]  text-start ' >{subItem.inntitle}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <Benefit data={benefit} />
                </div>
            </div>
        </>
    );
};

export default PartnershipModel;





