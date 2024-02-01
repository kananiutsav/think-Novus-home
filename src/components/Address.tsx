import React from 'react'
import { CompanyAddresses } from "@/interface";
import Image from 'next/image';

type CompanyAddressData = {
    data: CompanyAddresses[];
};
const Address = ({ data }: CompanyAddressData) => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto flex justify-between my-[42px]  py-[74px] px-[78px] rounded-[30px] border-[1.17px] border-solid border-[#353535] ' >
                {
                    data && data.map((item) => (
                        <div key={item.id} className='text-white flex'>
                            <div className='inline-flex  justify-center items-center gap-[28px]'>
                                <div>
                                    <Image
                                        src={item.img}
                                        alt=''
                                       className='w-[70px] h-[70px]'
                                    />
                                </div>
                                <div className='text-white text-[20px] h-[93px] my-auto '>
                                    <h1 className='font-[500]'>{item.title}</h1>
                                    <h2 className='font-[400]'>{item.subtitle}</h2>
                                    <h2 className='font-[400]'>{item.inntitle}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Address
