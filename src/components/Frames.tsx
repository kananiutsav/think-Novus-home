
// import Image from 'next/image';
// import { FrameImage } from '@/interface'
// import React from 'react'


// type FrameData = {
//   data: FrameImage[]
// }
// const Frames = ({ data }: FrameData) => {
//   return (
//     <>


// <div className='max-w-[1440px] mx-auto'>


//       <div className="marquee pt-[20px] container h-[162px] ">
//         {data && data.map((item) => (
//           <div key={item.id} className="marquee-item">
//             <Image
//               src={item.frameimg}
//               alt=''
//               height={100}
//               width={150}
//               className=' object-cover'
//             />
//           </div>
//         ))}
//       </div>
//       </div>
//     </>
//   )
// }

// export default Frames


"use client"

import { FrameImage } from '@/interface'


import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay,  } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'
// import 'swiper/css/speed'


// ... (existing imports)

type FrameData = {
  data: FrameImage[];
};

const Frames = ({ data }: FrameData) => {
  return (
    <>
      <div className=' relative max-w-[1400px] mx-auto'>
        {/* Add the shadow elements */}
        {/* <div className="absolute inset-y-0 left-0 w-[200px] bg-gradient-to-r from-gray-900 via-gray-800 to-transparent"></div> */}
        {/* <div className="absolute inset-y-0 right-0 w-[200px] bg-gradient-to-l from-gray-900 via-gray-800 to-transparent"></div> */}
        {/* <div className="absolute inset-y-0 right-0 w-[200px] bg-gradient-to-l from-black via-gray-800 to-gray-500"></div> */}

        <div className="absolute top-0 left-0 h-full w-[100px] bg-gradient-to-r from-black via-gray-900 to-gray-800"></div>
        <div className="absolute top-0 right-0 h-full w-[100px] bg-gradient-to-l from-black via-gray-gray-900 to-gray-800"></div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={5}
          autoplay={{ delay: 0 }}
          scrollbar={{ draggable: true }}
          loop
          speed={8000}
          effect="slide"
        >
          {data &&
            data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className=''>
                  <div className='flex justify-center items-center gap-[10px] '>
                    <Image
                      src={item.frameimg}
                      alt=''
                      className='w-[150px] h-[100px] object-cover'
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default Frames;



// type FrameData = {
//   data: FrameImage[]
// }
// const Frames = ({ data }: FrameData) => {
//   return (
//     <>


  

//         <div className='max-w-[1440px] mx-auto'>


//           <Swiper
//           modules={[Navigation,Pagination,Autoplay, ]}
//             spaceBetween={0}
//             slidesPerView={5.5}
//             // navigation={true}
//             // speed={300}
//             autoplay={{delay:0}}
//             // autoplay={{ delay: 0, disableOnInteraction: false }}  
//             // pagination={{ dynamicBullets: true, clickable: true }}
//             scrollbar={{ draggable: true }}
//             loop
//             speed={5000}  
//              effect="slide"
//           >

//             {data && data.map((item) => (
//               <SwiperSlide key={item.id}>
//                 <div className=''>
//                   <div className='   flex  justify-center items-center gap-[10px] border-2 border-solid border-gray-600 ' >
//                     <Image
//                       src={item.frameimg}
//                       alt=''
                   
//                       className='w-[150px] h-[100px] object-cover'
//                     />
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
      
//       {/* </div> */}
    
//     </>
//   )
// }

// export default Frames




  