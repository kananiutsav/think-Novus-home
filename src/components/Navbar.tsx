
import Link from 'next/link'
import React from 'react'
import Button from './Button';
import { IoMdArrowDropdown } from "react-icons/io";
import { NavbarLogo } from '../assets/icons'
function Logo() {

    return (
        <Link href={'/'} className='flex justify-center  gap-x-2'>
            <NavbarLogo />
        </Link>
    )
}

const Navbar = () => {
    return (
        <>
            <div className='flex items-center  justify-evenly relative py-6 px-6 md:px-2 container md:mx-auto '>
                <div className='flex justify-center items-center gap-x-12 lg:gap-x-[112px]'>
                    <div>
                        <Logo />
                    </div>
                    <div className="hidden md:flex items-center justify-center gap-x-4  text-white">
                        <Link href='/' className='flex items-center'><p className='text-base font-semibold  '>Company </p><IoMdArrowDropdown fontSize="1.25rem" /></Link>
                        <Link href='/' className='flex items-center'><p className='text-base font-semibold'>Solution</p><IoMdArrowDropdown fontSize="1.25rem" /></Link>
                        <Link href='/' className='flex items-center'><p className='text-base font-semibold'>Services</p><IoMdArrowDropdown fontSize="1.25rem" /></Link>
                        <Link href='/' className='flex items-center'><p className='text-base font-semibold'>Hire Developers</p><IoMdArrowDropdown fontSize="1.25rem" /></Link>
                        <Link href='/' className='flex items-center'><p className='text-base font-semibold'>Industries</p><IoMdArrowDropdown fontSize="1.25rem" /></Link>
                        <Link href='/' className='flex items-center'><p className='text-base font-semibold'>Resources</p><IoMdArrowDropdown fontSize="1.25rem" /></Link>
                    </div>
                </div>
                <div className='hidden md:flex justify-center items-center gap-x-4'>
                    <Button
                        label='Get A Free Quote'
                        className='px-[14px] md:text-base text-sm py-[10px] font-semibold text-primary'
                    />
                </div>
            </div>
        </>
    )
}

export default Navbar
