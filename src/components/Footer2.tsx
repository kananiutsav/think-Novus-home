
import Link from 'next/link'
import React from 'react'

import ThinkFooterLogo from "@/assets/image/ThinkFooterLogo.png"
import Image from 'next/image'
import { lastFooters } from "@/interface";


type LastFooterData = {
    data: lastFooters[];
};



const Footer2 = ({ data }: LastFooterData) => {
    return (
        <>

            <div className='max-w-[1200px] mx-auto flex gap-x-[250px] justify-center  items-center border-t-2 py-[42px] border-[#969696]'>


                <div className=' flex justify-between items-center gap-x-[28px]'>
                    <div>
                        <Image
                            src={ThinkFooterLogo}
                            alt=''
                            width={240}
                            height={41} />
                    </div>
                    <div className='text-[#969696] text-[20px] font-[500] leading-[110%] '>
                        <h1>Follow us on</h1>
                    </div>
                    <div className='flex gap-x-[16px] cursor-pointer'>
                        {
                            data && data.map((item) => (
                                <div key={item.id}>
                                    <Image
                                        src={item.img}
                                        alt=''
                                        width={28}
                                        height={28}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h1 className='text-[#969696]  text-[18px] font-[500] leading-[100%] '>
                    © Copyright 2023 by thinkNovus.com
                    </h1>

                </div>
            </div>
        </>
    )
}
export default Footer2
