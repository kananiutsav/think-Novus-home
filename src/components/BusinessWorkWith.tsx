"use client"
// import React from 'react'
// import React, { useState } from 'react';
// import { BusinessWorks } from '@/interface';
// import Image from 'next/image';

// type BusinessWorkData = {
//     data: BusinessWorks[];
// };
// const BusinessWorkWith: React.FC<BusinessWorkData> = ({ data }) => {
//     const [selectedHeading, setSelectedHeading] = useState<number | null>(null);

//     return (

//         <>
//             <div className='max-w-[1200px] mx-auto'>


//                 <div className='py-[50px] max-w-[1200px] mx-auto'>
//                     <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px]'>Who We <span className='custom-gradient'>Work With </span></h1>
//                     <p className='text-white w-[793px] text-[20px] leading-[32px] font-[400] flex-col flex justify-center h-[62px]'>Our expertise spans across businesses of all sizes. We tailor our services to meet the unique needs of each client.</p>
//                 </div>
//                 <div className='flex pt-[30px] border-t-2 border-solid border-[#232323]'>
//                     <div className='w-[30%] '>
//                         {data.map((item) => (
//                             <div key={item.id} className='mb-2 flex '>
//                                 <div className='flex flex-col'>
//                                     <button
//                                         className={`mt-[20px] p-2 text-start ml-4 text-[24px] font-[500] rounded  ${selectedHeading === item.id ? 'custom-gradient border-l-2 border-white  ' : 'bg-clack text-white'
//                                             }`}
//                                         onClick={() => setSelectedHeading(item.id)}
//                                     >
//                                         <div className='flex flex-col'>
//                                             <h1>
//                                                 {item.heading}
//                                             </h1>
//                                             <h2>
//                                                 {item.subHeading}
//                                             </h2>
//                                         </div>
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className=' w-[70%]'>
//                         {data.map((item) => (
//                             selectedHeading === item.id && (
//                                 <div key={item.id} className='mt-2 '>
//                                     {item.detail.map((subItem) => (
//                                         <div key={subItem.id} className='mb-2  items-center   '>
//                                             <h1 className=' text-white  font-[500] text-[32px] mt-[20px] text-start'>{subItem.title}</h1>
//                                             <p className=' text-white  font-[500] text-[20px] mt-[16px] text-start'>{subItem.subtitle}</p>
//                                             <Image
//                                                 src={subItem.img}
//                                                 alt=''
//                                                 className='w-[839px] h-[338px] justify-end mt-10'
//                                             />

//                                         </div>
//                                     ))}
//                                 </div>
//                             )
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default BusinessWorkWith


import React, { useState, useEffect } from 'react';
import { BusinessWorks } from '@/interface';
import Image from 'next/image';

type BusinessWorkData = {
    data: BusinessWorks[];
};

const BusinessWorkWith: React.FC<BusinessWorkData> = ({ data }) => {
    const [selectedHeading, setSelectedHeading] = useState<number | null>(data.length > 0 ? data[0].id : null);

    return (
        <>
            <div className='max-w-[1200px] mx-auto'>
                <div className='py-[50px] max-w-[1200px] mx-auto'>
                    <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px]'>Who We <span className='custom-gradient'>Work With </span></h1>
                    <p className='text-white w-[793px] text-[20px] leading-[32px] font-[400] flex-col flex justify-center h-[62px]'>Our expertise spans across businesses of all sizes. We tailor our services to meet the unique needs of each client.</p>
                </div>
                <div className='flex pt-[30px] border-t-2 border-solid border-[#232323]'>
                    <div className='w-[30%] '>
                        {data.map((item) => (
                            <div key={item.id} className='mb-2 flex '>
                                <div className='flex flex-col'>
                                    <button
                                        className={`mt-[20px] p-2 text-start ml-4 text-[24px] font-[500] rounded  ${selectedHeading === item.id ? 'custom-gradient border-l-2 border-white' : 'bg-clack text-white'
                                            }`}
                                        onClick={() => setSelectedHeading(item.id)}
                                    >
                                        <div className='flex flex-col'>
                                            <h1>
                                                {item.heading}
                                            </h1>
                                            <h2>
                                                {item.subHeading}
                                            </h2>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=' w-[70%]'>
                        {data.map((item) => (
                            selectedHeading === item.id && (
                                <div key={item.id} className='mt-2 '>
                                    {item.detail.map((subItem) => (
                                        <div key={subItem.id} className='mb-2  items-center   '>
                                            <h1 className=' text-white  font-[500] text-[32px] mt-[20px] text-start'>{subItem.title}</h1>
                                            <p className=' text-white  font-[500] text-[20px] mt-[16px] text-start'>{subItem.subtitle}</p>
                                            <Image
                                                src={subItem.img}
                                                alt=''
                                                className='w-[839px] h-[338px] justify-end mt-10'
                                            />
                                        </div>
                                    ))}
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusinessWorkWith;

