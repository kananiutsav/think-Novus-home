import React from 'react'
import { CreativeDesignRanges } from "@/interface";


type CreativeDesignRangesData = {
    data: CreativeDesignRanges[]
}
const CreativeDesignRange = ({data}: CreativeDesignRangesData) => {
  return (
    <>
      <div className='max-w-[1200px] mx-auto'>
        <div>
            {data && data.map((item)=>(
                <div key={item.id}>
                    <div>
                        <h2 className='text-white font-[700] text-[36px] leading-[42.19px]'>{item.heading}<span className='custom-gradient'>{item.innHeading}</span>{item.lastHeading}</h2>
                        <h2 className='text-white font-[700] text-[36px] leading-[42.19px]'>{item.subHeading}</h2>
                    </div>
                    <div >
                        <p className='text-[20px] py-[20px] text-[#D2D0DD] font-[400] leading-[28.79px]'>{item.para1}</p>
                        <p className='text-[20px] text-[#D2D0DD] font-[400] leading-[28.79px]'>{item.para2}</p>
                    </div>
                    <div className='flex  gap-x-[20px] py-[36px]'>
                    {item.detail.map((tech, index) => (
                                                <div key={index} className='py-[45px] bg-[#1A1825] w-[285px] h-[187px]  px-[35px] rounded-[8px] text-white text-[20px] font-[500] leading-[26.67px] ' >
                                                  <h1 className="text-[46px] font-[700] leading-[64px] text-center"> {tech.title} </h1>
                                                  <p className="text-[20px] font-[500] leading-[64px] text-center">{tech.description}</p>
                                                </div>
                                            ))}
                    </div>
                </div>
            ))}
        </div>

      </div>
    </>
  )
}

export default CreativeDesignRange
