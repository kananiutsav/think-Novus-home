import Address from '@/components/Address'
import AskQuestion from '@/components/AskQuestion'
import Blogs from '@/components/Blogs'
import BusinessForm from '@/components/BusinessForm'
import CompanyPartner from '@/components/CompanyPartner'
import CreativeBoundries from '@/components/CreativeBoundries'
import CreativeDesignRange from '@/components/CreativeDesignRange'
import CreativeDesigns from '@/components/CreativeDesigns'
import EngagementServices from '@/components/EngagementServices'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import FrameWork from '@/components/FrameWork'
import LookingCompany from '@/components/LookingCompany'
import Navbar from '@/components/Navbar'
import OtherServices from '@/components/OtherServices'
import ServiceDesign from '@/components/ServiceDesign'
import Stack from '@/components/Stack'
import ToosAndTechnology from '@/components/ToosAndTechnology'
import { askQuestionCreativeDesign, awards, blogs, businessService, bussinessdetail, companyAddress, creativeBoundries, creativeDesignPageHeading, creativeDesignRange, creativeDesignpowerProject, creativeGraphicDesign, creativeUiUxDesign, creativestack, designs, footer, framework, lastFooter, lookingCtreativeDesign, otherService, serviceEngagement, } from '@/utils/Constant'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='mx-auto'>
        <div className='h-screen'>
          <Navbar />
          <CompanyPartner data={creativeDesignPageHeading} />
        </div>
        <CreativeDesignRange data={creativeDesignRange} />
        <CreativeBoundries data={creativeBoundries}/>
        {/* <ServiceDesign data={designs} /> */}
        {/* <FrameWork data={framework} /> */}
        <LookingCompany data={lookingCtreativeDesign} />
        <EngagementServices data={serviceEngagement} />
        <CreativeDesigns data={creativeUiUxDesign} />
        <CreativeDesigns data={creativeGraphicDesign} isCreativeDesign={true} />
        <Stack data={creativestack} />
        <ToosAndTechnology data={creativeDesignpowerProject} ispowerProjectHeading={true} />
        <AskQuestion data={askQuestionCreativeDesign} isCreativeDesign={true} />
        <OtherServices data={otherService} />
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
