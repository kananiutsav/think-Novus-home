import Heading from "@/allHeading/Heading";
import { WebDevServices } from "@/interface";
import { webdevServicesHeading } from "@/utils/Constant";
import Image from 'next/image';
import React from 'react'


type WebDevServicesData = {
  data: WebDevServices[];
}

const Services = ({data}: WebDevServicesData) => {
  return (
    <>
    <div className="max-w-[1200px] mx-auto py-[98px]">
        <Heading  data={webdevServicesHeading}/>
        <div className="text-white flex flex-wrap justify-between gap-y-[20px] pt-[56px] ">
            {
                data&& data.map((item)=>(
                    <div key={item.id} className="w-[387px] h-[422px] rounded-[14px] p-[20px] bg-[#1A1826] toolsborder ">
                        <Image 
                        src={item.img}
                        alt=""
                        className="w-[61px] h-[61px]"
                        />
                        <h3 className="text-[24px] font-[500] leading-[31.5px] pt-[23px]">{item.title}</h3>
                        <p className="text-[20px] font-[400] leading-[28px] pt-[15px] tracking-[0.74px]">{item.detail}</p>

                    </div>
                ))
            }
        </div>
    </div>
      
    </>
  )
}

export default Services
