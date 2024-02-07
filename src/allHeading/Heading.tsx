import React from 'react'
import { WebDevServicesHeadings } from "@/interface";
type WebDevServicesHeadingsData = {
  data: WebDevServicesHeadings[];
};
const Heading = ({ data }: WebDevServicesHeadingsData) => {
  return (
    <>
      <div>
        {
          data && data.map((item) => (
            <div key={item.id} className='pb-[50px] pt-[20px] '>
              <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px]'>{item.heading}<span className='custom-gradient'> {item.innHeading}</span></h1>
              <p className='text-white w-[793px] text-[20px] tracking-[-0.2px] leading-[32px] font-[400]  justify-center '>{item.subtitle}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Heading

