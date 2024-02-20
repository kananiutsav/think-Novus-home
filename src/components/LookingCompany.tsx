import React from 'react'
import { LookingWebCompany } from '@/interface';
import Image from 'next/image';

type LookingWebCompanyData = {
  data: LookingWebCompany[];
};

const LookingCompany = ({ data }: LookingWebCompanyData) => {
  return (
    <>
      <div className='max-w-[1200px] mx-auto mt-[100px] mb-[50px]'>
        <div className=' py-[52px] px-[65px] text-white  rounded-[15px] lookingborder'>
          {data && data.map((item) => (
            <div key={item.id} className=' w-[999px] mx-auto text-center px-[54px]'>
              <h1 className='text-[34px] font-[700] leading-[64px] mb-[20px] '>{item.title}</h1>
              <p className='text-[20px] leading-[28px] font-[400]'>{item.subtitle}</p>
              <button className='text-white text-[16px] h-[47px] tracking-[-0.14px] mt-[25px] items-center font-[500] bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500 rounded-full py-[8px] px-[27px]  '>{item.btn}</button>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default LookingCompany
