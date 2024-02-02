


"use client";

// import React, { useState } from 'react';
// import { Filters } from '@/interface';
// import Image from 'next/image';

// type FilterProps = {
//   data: Filters[];
// };

// const Filter: React.FC<FilterProps> = ({ data }) => {
//   const [selectedHeading, setSelectedHeading] = useState<number | null>(null);

//   return (

//     <>
//       <div className='max-w-[1200px] mx-auto mb-[40px]'>


//         <div className='py-[50px] max-w-[1200px] mx-auto'>
//           <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px]'>Technology we<span className='custom-gradient'> work with </span></h1>
//           <p className='text-white w-[793px] text-[20px] leading-[32px] font-[400] flex-col flex justify-center h-[62px]'>Collect your web snippets, Kindle highlights and important links – all in one place. Then quickly find them again from any device.</p>
//         </div>
//         <div className='flex'>
//           <div className='w-[30%] '>
//             {data.map((item) => (
//               <div key={item.id} className='mb-2 flex'>
//                 <div className='flex flex-col'>
//                   <button
//                     className={`w-[230px] h-[65px] p-2 text-start ml-4 text-[24px] font-[500] rounded ${selectedHeading === item.id ? 'custom-gradient  ' : 'bg-clack text-white'
//                       }`}
//                     onClick={()  => setSelectedHeading(item.id)}
//                   >
//                     {item.heading}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className=' w-full'>
//             {data.map((item) => (
//               selectedHeading === item.id && (
//                 <div key={item.id} className='mt-2 grid grid-cols-1 md:grid-cols-4 items-center  lg:grid-cols-5 gap-4 '>
//                   {item.subtitle.map((subItem) => (
//                     <div key={subItem.id} className='mb-2 w-[170px] h-[170px] items-center  border-2 border-solid border-[#1B1B1B] rounded-[10px] '>
//                       <Image
//                         src={subItem.img}
//                         alt=''
//                         className='w-[50px] h-[50px] ml-[55px] mt-10'
//                       />
//                       <p className='hover:text-pink-500 text-white  font-[500] text-[20px] mt-[20px] text-center'>{subItem.title}</p>
//                     </div>
//                   ))}
//                 </div>
//               )
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Filter;

import React, { useState, useEffect } from 'react';
import { Filters } from '@/interface';
import Image from 'next/image';

type FilterProps = {
  data: Filters[];
};

const Filter: React.FC<FilterProps> = ({ data }) => {
  const [selectedHeading, setSelectedHeading] = useState<number | null>(data.length > 0 ? data[0].id : null);

  return (
    <>
      <div className='max-w-[1200px] mx-auto mb-[40px]'>
        <div className='py-[50px] max-w-[1200px] mx-auto'>
          <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px]'>Technology we<span className='custom-gradient'> work with </span></h1>
          <p className='text-white w-[793px] text-[20px] leading-[32px] font-[400] flex-col flex justify-center h-[62px]'>Collect your web snippets, Kindle highlights and important links – all in one place. Then quickly find them again from any device.</p>
        </div>
        <div className='flex'>
          <div className='w-[30%] '>
            {data.map((item) => (
              <div key={item.id} className='mb-2 flex'>
                <div className='flex flex-col '>
                  <button
                    className={`w-[230px] h-[65px]  py-2 px-4 text-start  text-[24px] font-[500] rounded ${selectedHeading === item.id ? 'custom-gradient   border-l-2 border-solid ' : 'bg-black text-white' }`}
                    onClick={() => setSelectedHeading(item.id)}
                  >
                    {item.heading}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className=' w-full'>
            {data.map((item) => (
              selectedHeading === item.id && (
                <div key={item.id} className='mt-2 grid grid-cols-1 md:grid-cols-4 items-center  lg:grid-cols-5 gap-4 '>
                  {item.subtitle.map((subItem) => (
                    <div key={subItem.id} className='filter  mb-2 w-[170px] h-[170px] items-center   rounded-[10px] '>
                      <Image
                        src={subItem.img}
                        alt=''
                        className='w-[50px] h-[50px] ml-[55px] mt-10'
                      />
                      <p className='color-texts   font-[500] text-[20px] mt-[20px] text-center'>{subItem.title}</p>
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

export default Filter;




