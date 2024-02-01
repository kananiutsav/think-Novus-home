




// import React from 'react';
// import { Developers } from '@/interface';
// import Image from 'next/image';
// import sideimg from "@/assets/image/sideimg.png"

// type DevelopersData = {
//     data: Developers[];
// };

// const DedicatedDeveloper = ({ data }: DevelopersData) => {
//     return (
//         <>
//             <div className='max-w-[1200px] mx-auto flex '>
//                 <div className='w-[70%] grid grid-cols-1 md:grid-cols- items-center lg:grid-cols-2 gap-4 '>
//                     {data &&
//                         data.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className={`text-white flex py-[27px] px-[45px] w-[${item.id === 3 ? 818 : 399}px] bg-[#1A1826] rounded-[10px] mb-10 text-center`}
//                             >
//                                 <div>
//                                     <div>
//                                         <h1>{item.heading}</h1>
//                                     </div>
//                                     <div className='flex items-center text-center '>
//                                         {item.detail.map((subItem, index) => (
//                                             <div
//                                                 key={index}
//                                                 className='w-[152px] h-[152px] text-center justify-center items-center'
//                                             >
//                                                 <div>
//                                                     <Image
//                                                         src={subItem.img}
//                                                         alt=''
//                                                         width={52}
//                                                         height={46}
//                                                         className='justify-self-center ml-12'
//                                                     />
//                                                 </div>
//                                                 <div>
//                                                     <h4>{subItem.title}</h4>
//                                                     <h4>{subItem.subtitle}</h4>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                 </div>
//                 <div className='text-white w-[362px] h-[520px] bg-[#1A1826] rounded-[10px] '>
//                     <div>
//                         <Image
//                             src={sideimg}
//                             alt=''
//                             className='w-[362px] h-[343px] '
//                         />
//                     </div>
//                     <div className='flex-col items-start gap-[16px] ml-[28px] mt-[28px]'>
//                         <div className='font-[600] text-[20px] '>
//                             <h4>Hire Dedicated Developers</h4>
//                             <h4> for your dream project</h4>
//                         </div>
//                         <button className='rounded-full mt-[16px] gap-[12px] py-[8px] px-[27px] text-center text-[16px] font-[500] border border-solid border-[#8920FE] '>Hire Now</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default DedicatedDeveloper;


// import React from 'react';
// import { Developers } from '@/interface';
// import Image from 'next/image';
// import sideimg from "@/assets/image/sideimg.png"

// type DevelopersData = {
//     data: Developers[];
// };

// const DedicatedDeveloper = ({ data }: DevelopersData) => {
//     return (
//         <>
//             <div className='max-w-[1200px] mx-auto flex '>
//                 <div className='w-[72%] grid grid-cols-1 md:grid-cols- items-center lg:grid-cols-2 gap-4 '>
//                     {data &&
//                         data.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className={`text-white flex py-[27px] px-[45px] ${item.id === 3 ? 'mx-auto' : ''} w-[${item.id === 3 ? 818 : 399}px] bg-[#1A1826] rounded-[10px]  text-center`}
//                             >
//                                 <div>
//                                     <div>
//                                         <h1>{item.heading}</h1>
//                                     </div>
//                                     <div className='flex items-center text-center '>
//                                         {item.detail.map((subItem, index) => (
//                                             <div
//                                                 key={index}
//                                                 className='w-[152px] h-[152px] text-center justify-center items-center'
//                                             >
//                                                 <div>
//                                                     <Image
//                                                         src={subItem.img}
//                                                         alt=''
//                                                         width={52}
//                                                         height={46}
//                                                         className='justify-self-center ml-12'
//                                                     />
//                                                 </div>
//                                                 <div>
//                                                     <h4>{subItem.title}</h4>
//                                                     <h4>{subItem.subtitle}</h4>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                 </div>
//                 <div className='text-white w-[362px] h-[520px] bg-[#1A1826] rounded-[10px] '>
//                     <div>
//                         <Image
//                             src={sideimg}
//                             alt=''
//                             className='w-[362px] h-[343px] '
//                         />
//                     </div>
//                     <div className='flex-col items-start gap-[16px] ml-[28px] mt-[28px]'>
//                         <div className='font-[600] text-[20px] '>
//                             <h4>Hire Dedicated Developers</h4>
//                             <h4> for your dream project</h4>
//                         </div>
//                         <button className='rounded-full mt-[16px] gap-[12px] py-[8px] px-[27px] text-center text-[16px] font-[500] border border-solid border-[#8920FE] '>Hire Now</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default DedicatedDeveloper;

import React from 'react';
import { Developers } from '@/interface';
import Image from 'next/image';
import sideimg from "@/assets/image/sideimg.png"

type DevelopersData = {
    data: Developers[];
};

const DedicatedDeveloper = ({ data }: DevelopersData) => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='pb-[50px] pt-[20px] '>
                <h1 className='text-white py-[20px] text-[36px] font-[500] leading-[52px]'>Our Dedicated<span className='custom-gradient'> Developers </span></h1>
                <p className='text-white w-[793px] text-[20px] leading-[32px] font-[400] flex-col flex justify-center h-[62px]'>Collect your web snippets, Kindle highlights and important links – all in one place. Then quickly find them again from any device.</p>
            </div>
            <div className='flex mx-auto justify-center items-center'>
                <div className='w-[70%]  items-center flex flex-wrap gap-[16px] '>
                    {data &&
                        data.map((item) => (
                            <div
                                key={item.id}
                                className={`text-white flex py-[27px] px-[45px] ${item.id === 3 ? 'mx-auto' : ''} w-[${item.id === 3 ? 818 : 399}px] bg-[#1A1826] rounded-[10px]  text-center justify-center`}
                            >
                                <div>
                                    <div className='text-[20px] font-[600] leading-[30px] pb-[14px]'>
                                        <h1>{item.heading}</h1>
                                    </div>
                                    <div className='flex items-center text-center '>
                                        {item.detail.map((subItem, index) => (
                                            <div
                                                key={index}
                                                className='w-[152px] h-[152px] text-center justify-evenly items-center'
                                            >
                                                <div>
                                                    <Image
                                                        src={subItem.img}
                                                        alt=''
                                                        width={76}
                                                        height={76}
                                                        className=' ml-9'
                                                    />
                                                </div>
                                                <div className='text-[16px] font-[500] leading-[20px] text-center '>
                                                    <h4>{subItem.title}</h4>
                                                    <h4>{subItem.subtitle}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className='text-white w-[30%] h-[520px] bg-[#1A1826] rounded-[10px] '>
                    <div>
                        <Image
                            src={sideimg}
                            alt=''
                            className='w-[362px] h-[343px] '
                        />
                    </div>
                    <div className='flex-col items-start gap-[16px] ml-[28px] mt-[28px]'>
                        <div className='font-[600] text-[20px] '>
                            <h4>Hire Dedicated Developers</h4>
                            <h4> for your dream project</h4>
                        </div>
                        <button className='rounded-full mt-[16px] gap-[12px] py-[8px] px-[27px] text-center text-[16px] font-[500] border border-solid border-[#8920FE] '>Hire Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DedicatedDeveloper;






