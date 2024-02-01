import { Footers } from "@/interface";
import Image from 'next/image';
import React from 'react'

type FooterData = {
  data: Footers[];
}
const Footer = ({ data }: FooterData) => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto flex  justify-between pb-[42px] ">
        {data && data.map((item) => (
          <div key={item.id}>
            <div className="text-[#969696] text-[20px] font-[500] pb-[28px] ">
              {item.heading}
            </div>
            <ul className='flex flex-col justify-center   gap-y-[28px]'>
              {item.subHeading.map((subItem, index) => (
                <li key={index} className='flex   leading-[110%]  text-[18px] font-[500] gap-x-4  text-white'>
                  <Image src={subItem.img} width={24} height={24} alt='' />
                  {subItem.title}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </>
  )
}

export default Footer
