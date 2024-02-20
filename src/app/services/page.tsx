import Address from '@/components/Address'
import AskQuestion from '@/components/AskQuestion'
import Blogs from '@/components/Blogs'
import BusinessForm from '@/components/BusinessForm'
import CompanyPartner from '@/components/CompanyPartner'
import EngagementServices from '@/components/EngagementServices'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import FrameWork from '@/components/FrameWork'
import LookingCompany from '@/components/LookingCompany'
import Navbar from '@/components/Navbar'
import ServiceDesign from '@/components/ServiceDesign'
import Services from '@/components/Services'
import { askQuestionServices, awards, blogs, businessService, bussinessdetail, companyAddress, designs, footer, framework, lastFooter, lookingServices, serviceEngagement, servicePageHeading } from '@/utils/Constant'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='mx-auto'>
                <div className='h-screen'>
                    <Navbar />
                    <CompanyPartner data={servicePageHeading} />
                </div>
                <ServiceDesign data={designs} />
                <FrameWork data={framework} />
                <LookingCompany data={lookingServices} />
                <EngagementServices data={serviceEngagement} />
                <AskQuestion data={askQuestionServices} isService={true}/>
                <Blogs data={blogs} />
                <BusinessForm data={bussinessdetail} item={businessService} award={awards} footer={lastFooter} />
                <Address data={companyAddress} />
                <Footer data={footer} />
                <Footer2 data={lastFooter} />
            </div>
        </>
    )
}

export default page
