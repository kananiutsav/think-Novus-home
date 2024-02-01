"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay } from 'swiper/modules'
import { Awards } from '@/interface'
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

type AwardsData = {
    data: Awards[]
}

const Award = ({data}: AwardsData) => {
  return (
    <>
<div>
    <h1 className='text-[36px] font-[600] leading-[60px] mt-[80px] text-white text-center '>Awards & <span className='custom-gradient'>Recognitions</span></h1>
</div>
<div className='max-w-[1440px] mx-auto'>


        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={4.6}
                    // navigation={true}
                    // pagination={{ dynamicBullets: true, clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={true}
                    loop
                    speed={2000}
                    effect="slide"
                >

                    {data && data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='mt-[20px]'>
                                <div className='w-[327px] h-[218px]  flex flex-col justify-center items-center gap-[10px] border-2 border-solid border-gray-600 ' >
                                    <Image
                                        src={item.img}
                                        alt=''
                                        width={213}
                                        height={142}
                                    />
                                </div>  
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
    </>
  )
}

export default Award


// Import the necessary modules
// "use client";
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// import { Awards } from '@/interface';
// import Image from 'next/image';

// SwiperCore.use([Autoplay, Pagination, Navigation]);

// type AwardsData = {
//   data: Awards[];
// };

// const Award = ({ data }: AwardsData) => {
//   return (
//     <>
//       <div>
//         <h1 className='text-[36px] font-[600] leading-[60px] mt-[80px] text-white text-center '>Awards & <span className='custom-gradient'>Recognitions</span></h1>
//       </div>
//       <div className='max-w-[1440px] mx-auto'>
//         <Swiper
//           spaceBetween={50}
//           slidesPerView={4.6}
//           pagination={{ dynamicBullets: true, clickable: true }}
//           navigation  // Add this line if you want to use navigation
//           loop
//           autoplay={{ delay: 3000 }}
//         >
//           {data && data.map((item) => (
//             <SwiperSlide key={item.id}>
//               <div className='mt-[20px]'>
//                 <div className='w-[327px] h-[218px]  flex flex-col justify-center items-center gap-[10px] border-2 border-solid border-gray-600 ' >
//                   <Image
//                     src={item.img}
//                     alt=''
//                     width={213}
//                     height={142}
//                   />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </>
//   );
// };

// export default Award;


