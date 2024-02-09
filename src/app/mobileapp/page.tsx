import Address from '@/components/Address'
import Blogs from '@/components/Blogs'
import BusinessForm from '@/components/BusinessForm'
import CompanyPartner from '@/components/CompanyPartner'
import EngagementModel from '@/components/EngagementModel'
import Experience from '@/components/Experience'
import Expertise from '@/components/Expertise'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import Frames from '@/components/Frames'
import Navbar from '@/components/Navbar'
import OtherServices from '@/components/OtherServices'
import Services from '@/components/Services'
import Solution from '@/components/Solution'
import ToosAndTechnology from '@/components/ToosAndTechnology'
import WebResult from '@/components/WebResult'
import WhyChooseUs from '@/components/WhyChooseUs'
import { Frame, awards, blogs, businessService, bussinessdetail, choosePhoto, companyAddress, footer, lastFooter, mobileAppExpertise, mobileAppService, mobileAppresult, mobileHeading, mobileToolsAndTechnology, otherService, qaWeb, webEngagementModel, webExpertise, webHeading, webSolution, whyChooseUS, whyChooseUsHeadingWeb } from '@/utils/Constant'
import React from 'react'

const page = () => {
  return (
    <>
      <div>
        <div className='h-screen'>
          <Navbar />
          <CompanyPartner data={mobileHeading} />
        </div>
        <Frames data={Frame} />
        <WebResult data={mobileAppresult}/>
        <Services data={mobileAppService} isMobileApp={true}/>
        <Expertise data={mobileAppExpertise} ans={qaWeb} />
        <WhyChooseUs data={whyChooseUS} photo={choosePhoto} isMobileApp={true} />
        <Solution data={webSolution} isMobileApp={true}/>
        <EngagementModel data={webEngagementModel} isMobileApp={true}/>
        <ToosAndTechnology data={mobileToolsAndTechnology} isMobileApp={true}/>
        <OtherServices data={otherService}/>
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
