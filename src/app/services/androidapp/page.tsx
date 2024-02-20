import Address from '@/components/Address'
import AndroidAppWhyChoose from '@/components/AndroidAppWhyChoose'
import AskQuestion from '@/components/AskQuestion'
import Blogs from '@/components/Blogs'
import BusinessForm from '@/components/BusinessForm'
import CompanyPartner from '@/components/CompanyPartner'
import Footer from '@/components/Footer'
import LookingCompany from '@/components/LookingCompany'
import Navbar from '@/components/Navbar'
import OtherServices from '@/components/OtherServices'
import RaisingAndroidApp from '@/components/RaisingAndroidApp'
import Services from '@/components/Services'
import { AndroidMainPageHeading, androidAppService, askQuestionAndroidApp, askQuestionCreativeDesign, awards, blogs, businessService, bussinessdetail, companyAddress, footer, lastFooter, lookingAndroidApp, lookingCtreativeDesign, mobileAppService, otherService, raisingAndroidApp, whyChooseAndroisApp, } from '@/utils/Constant'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='mx-auto'>
                <div className='h-screen'>
                    <Navbar />
                    <CompanyPartner data={AndroidMainPageHeading} />

                </div>
                <AndroidAppWhyChoose data={whyChooseAndroisApp} />
                <Services data={androidAppService} isAndroidApp={true} />
                <RaisingAndroidApp data={raisingAndroidApp} />
                <LookingCompany data={lookingAndroidApp} />
                <AskQuestion data={askQuestionAndroidApp} />
                <OtherServices data={otherService} />
                <Blogs data={blogs} />
                <BusinessForm data={bussinessdetail} item={businessService} award={awards} footer={lastFooter} />
                <Address data={companyAddress} />
                <Footer data={footer} />
            </div>
        </>
    )
}

export default page
