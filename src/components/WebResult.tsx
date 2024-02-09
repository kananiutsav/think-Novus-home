// import React from 'react'
// import { WebResults } from '@/interface';

// type WebResultData = {
//     data: WebResults[];
// };
// const WebResult = ({ data }: WebResultData) => {
//     return (
//         <>
//             <div className='max-w-[1200px] mx-auto mt-[100px] flex justify-between'>
//                 <div className='w-[65%]'>
//                     {
//                         data && data.map((item) => (
//                             <div key={item.id}>
//                                 <div className=''>
//                                     <h1 className='text-white font-[600] text-[36px] leading-[53.25px]  '> <span className='custom-gradient pr-3'>{item.title}</span>{item.subtitle}</h1>
//                                 </div>
//                                 <div className='text-white text-[20px] font-[500] leading-[26.67px] py-[46px] '>
//                                     <p className='pb-[30px]'>{item.para1}</p>
//                                     <p>{item.para2}</p>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//                 <div className='box w-[30%] bg-[#1A1826] rounded-[10px] h-[580px]  pt-[23px] items-center '>
//                     <h1 className='text-white text-[20px] font-[500] leading-[26.67px] pl-5'>GET QUOTE</h1>
//                     <form className='   flex flex-col gap-4   items-center  mx-auto pt-6'>
//                         <div className=" flex flex-col items-center gap-[12px] ">
//                             <input
//                                 type='text'
//                                 id="firstName"
//                                 placeholder='First Name*'
//                                 className="text-white bg-black px-4 w-[317px] h-[63px] rounded-[7px]  border-2 border-[#4E4E4E] py-3"
//                             />
//                             <input
//                                 type='text'
//                                 id="lastName"
//                                 placeholder='Last Name*'
//                                 className="text-white bg-black px-4 w-[317px] h-[63px] rounded-[7px]  border-2 border-[#4E4E4E] py-3"
//                             />
//                             <input
//                                 type='email'
//                                 id="email"
//                                 placeholder='Email*'
//                                 className="text-white bg-black px-4 w-[317px] h-[63px] rounded-[7px]  border-2 border-[#4E4E4E] py-3"
//                             />
//                             <input
//                                 type='number'
//                                 id="number"
//                                 placeholder='Phone Number*'
//                                 className="text-white bg-black px-4 w-[317px] h-[63px] rounded-[7px]  border-2 border-[#4E4E4E] py-3"
//                             />
//                             <input
//                                 type='text'
//                                 id="description"
//                                 placeholder='Project Description'
//                                 className="text-white bg-black px-4 w-[317px] h-[78px] rounded-[7px]  border-2 border-[#4E4E4E] py-3"
//                             />
//                         </div>
//                     </form>
//                     <p className='text-white text-[14px] font-[500] pt-[12px] pl-[22px]'>100% confidential and secure</p>
//                     <div className='btn rounded-full mx-5 text-center mt-[30px]' >
//                         <button className='text-white bg-transparent text-[16px] font-[500] py-[8px] px-[27px]  '>Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default WebResult

import React from 'react'
import { Results } from '@/interface';

type ResultsData = {
    data: Results[];
};
const WebResult = ({ data }: ResultsData) => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto mt-[100px] flex justify-between'>
                <div className='w-[65%]'>
                    {
                        data && data.map((item) => (
                            <div key={item.id}>
                                <div className=''>
                                    <h1 className='text-white font-[600] text-[36px] leading-[53.25px]  '> <span className='custom-gradient pr-3'>{item.title}</span>{item.subtitle}</h1>
                                </div>
                                <div className='pt-[46px]'>
                                   
                                      {item.detail.map((tech, index) => (
                                                <div key={index} className=' text-white text-[20px] font-[500] leading-[26.67px] ' >
                                                  <p className="pb-[30px]">
                                                  {tech.para}
                                                  </p>
                                                </div>
                                            ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='box w-[30%] bg-[#1A1826] rounded-[10px] h-[580px]  pt-[23px] items-center '>
                    <h1 className='text-white text-[20px] font-[500] leading-[26.67px] pl-5'>GET QUOTE</h1>
                    <form className='   flex flex-col gap-4   items-center  mx-auto pt-6'>
                        <div className=" flex flex-col items-center gap-[12px] ">
                            <input
                                type='text'
                                id="firstName"
                                placeholder='First Name*'
                                className="text-white bg-black px-4 w-[317px] h-[63px] rounded-[7px]  border-2 border-[#4E4E4E] py-3"
                            />
                            <input
                                type='text'
                                id="lastName"
                                placeholder='Last Name*'
                                className="text-white bg-black px-4 w-[317px] h-[63px] rounded-[7px]  border-2 border-[#4E4E4E] py-3"
                            />
                            <input
                                type='email'
                                id="email"
                                placeholder='Email*'
                                className="text-white bg-black px-4 w-[317px] h-[63px] rounded-[7px]  border-2 border-[#4E4E4E] py-3"
                            />
                            <input
                                type='number'
                                id="number"
                                placeholder='Phone Number*'
                                className="text-white bg-black px-4 w-[317px] h-[63px] rounded-[7px]  border-2 border-[#4E4E4E] py-3"
                            />
                            <input
                                type='text'
                                id="description"
                                placeholder='Project Description'
                                className="text-white bg-black px-4 w-[317px] h-[78px] rounded-[7px]  border-2 border-[#4E4E4E] py-3"
                            />
                        </div>
                    </form>
                    <p className='text-white text-[14px] font-[500] pt-[12px] pl-[22px]'>100% confidential and secure</p>
                    <div className='btn rounded-full mx-5 text-center mt-[30px]' >
                        <button className='text-white bg-transparent text-[16px] font-[500] py-[8px] px-[27px]  '>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WebResult

