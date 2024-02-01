import React from 'react'
import { Blog } from "@/interface";
import Image from 'next/image';

type BlogData = {
    data: Blog[]
}
const Blogs = ({ data }: BlogData) => {
    return (
        <>

            <div className='max-w-[1200px] mx-auto'>
                <div className='mt-[50px]'>
                    <h1 className='text-center text-[36px] font-[700] text-white'>Our <span className='custom-gradient'>Blog</span></h1>
                </div>
                <div className='flex  gap-[20px] mt-[32px]'>
                    {data &&
                        data.map((item) => (
                            <div key={item.id} className=" ABC w-[386px] h-[360px]    ">

                                <div className='flex flex-col items-center py-[12px]  justify-center border-1 border-solid border-black   '>


                                    <div>
                                        <Image
                                            src={item.img}
                                            alt=''
                                            // width={387}
                                            className=" w-[360px] h-[267px] shrink-0 items-center  "
                                        />
                                    </div>

                                    <div className='flex items-center pt-[12px] gap-x-1'>
                                        <h1 className=" text-[18px] w-[309px] h-[56px] justify-center flex-col text-white   font-[400] tracking-tighter">{item.description}</h1>
                                        <Image
                                            src={item.btn}
                                            alt=''
                                            className='w-[36px] h-[36px] cursor-pointer'
                                        />
                                    </div>

                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Blogs
