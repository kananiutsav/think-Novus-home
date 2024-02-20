import Heading from "@/allHeading/Heading";
import { ServiceEngagements } from "@/interface";
import {  serviceEngagementHeading } from "@/utils/Constant";
import Image from 'next/image';
import React from 'react';

type ServicesProps = {
  data: ServiceEngagements[];
 // New prop to determine if it's a mobile app component
};

const EngagementServices = ({ data, }: ServicesProps) => {
  

  return (
    <>
      <div className="max-w-[1200px] mx-auto py-[70px]">
        <Heading data={serviceEngagementHeading} />
        <div className="text-white flex flex-wrap justify-between gap-y-[20px] pt-[20px] ">
          {data.map((item) => (
            <div key={item.id} className="w-[387px] h-[422px] rounded-[14px] p-[20px] bg-[#1A1826] toolsborder ">
             
              <h3 className="text-[24px] font-[500] leading-[31.5px] pt-[23px]">{item.title}</h3>
              <p className="text-[20px] font-[400] leading-[28px] pt-[15px] tracking-[0.74px]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EngagementServices;