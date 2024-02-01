

// import React from 'react';
// import { recentlyData } from "@/interface";
// import Image from 'next/image';

// type RecentnewData = {
//     data: recentlyData[];
// };

// const RecentData = ({ data }: RecentnewData) => {
//     return (
//         <div>

//             <div>
//                 <h1 className='text-white mb-5 py-[20px] text-[36px] font-[500] leading-[52px]  justify-center mx-auto text-center'>
//                 Our Recent <span className=' custom-gradient'> Work</span>
//                     </h1>
                  
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4  max-w-[1230px] mx-auto">
//                 {data &&
//                     data.map((item) => (
//                         <div key={item.id} className="h-[290px] bg-gradient-custom  relative ">
//                             <div className=" ">
//                                 <Image
//                                     src={item.img}
//                                     alt=''
//                                     // width={387}

//                                     className="rounded-md w-[387px] h-[290px]"
//                                 />
//                             </div>
//                             <div className=' absolute flex w-[387px] h-[131px]  items-center bg-gradient-custom  bottom-0 justify-end shrink-0'>
//                                 <div className='items-center  '>
//                                     <h1 className="text-white text-[20px] font-[600] leading-[32px] flex flex-col justify-center shrink-0 w-[322px] h-[30px] ">{item.title}</h1>
//                                     <p className=" leading-[22px] font-[400] text-[16px] w-[297px] h-[66px] justify-center flex flex-col shrink-0 text-[#D2D0DD]">{item.description}</p>
//                                 </div>
//                                 <div className=" items-center">
//                                     <Image
//                                         src={item.fulldata}
//                                         alt=''
                                       
//                                         className="rounded-full w-[48px] h-[48px] shrink-0"
//                                     />
//                                 </div>


//                             </div>
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default RecentData;


import React from 'react';
import { recentlyData } from "@/interface";
import Image from 'next/image';

type RecentnewData = {
    data: recentlyData[];
};

const RecentData = ({ data }: RecentnewData) => {
    return (
        <div>
            <div>
                <h1 className='text-white mb-5 py-[20px] text-[36px] font-[500] leading-[52px] justify-center mx-auto text-center'>
                    Our Recent <span className=' custom-gradient'> Work</span>
                </h1>
            </div>

            <div className="flex flex-wrap gap-[20px] max-w-[1230px] mx-auto">
                {data &&
                    data.map((item) => (
                        <div key={item.id} className={`rounded-[10px] relative w-[${item.id === 4 ? 793 : 387}px] h-[290px] ${item.id === 4 ? 'bg-[#00001a]' : 'bg-gradient-custom'}`}>
                            <div className="">
                                <Image
                                    src={item.img}
                                    alt=''
                                    className="rounded-md w-[387px] h-[290px]"
                                />
                            </div>
                            <div className={`absolute flex w-[${item.id === 4 ? 793 : 387}px] items-center ${item.id === 4 ? 'h-[290px]' : 'h-[131px]'} bottom-0 justify-end shrink-0`}>
                                <div className='items-center'>
                                    <h1 className="text-white text-[20px] font-[600] leading-[32px] flex flex-col justify-center shrink-0 w-[322px]  ">{item.title}</h1>
                                    <p className="leading-[22px] font-[400] text-[16px] w-[297px]  justify-center flex flex-col shrink-0 text-[#D2D0DD]">{item.description}</p>
                                </div>
                                <div className="items-center">
                                    <Image
                                        src={item.fulldata}
                                        alt=''
                                        className="rounded-full w-[48px] h-[48px] shrink-0"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default RecentData;







