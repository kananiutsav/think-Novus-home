import React from 'react'
import Navbar from '@/components/Navbar'
import CompanyPartner from '@/components/CompanyPartner'
import { CompanyPartnerss, Frame, askQuestion, awards, businessService, bussinessdetail, choosePhoto, companyAddress, footer, lastFooter, lookingWebCom, webDevService, webEngagementModel, webResult, webSolution, webToolsAndTechnology, whyCooseUS } from '@/utils/Constant'
import Frames from '@/components/Frames'
import BusinessForm from '@/components/BusinessForm'
import Address from '@/components/Address'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import WebResult from '@/components/WebResult'
import Services from '@/components/Services'
import ToosAndTechnology from '@/components/ToosAndTechnology'
import LookingCompany from '@/components/LookingCompany'
import AskQuestion from '@/components/AskQuestion'
import EngagementModel from '@/components/EngagementModel'
import Solution from '@/components/Solution'
import WhyChooseUs from '@/components/WhyChooseUs'
const page = () => {
  return (
    <>
   <div className='h-screen'>
   <Navbar />
    <CompanyPartner data={CompanyPartnerss} />
   </div>
   <Frames data={Frame} />
  
   <WebResult data={webResult}/>
   <Services data={webDevService}/>
   <EngagementModel data={webEngagementModel}/>
   <ToosAndTechnology data={webToolsAndTechnology}/>
   <Solution data={webSolution}/>
   <LookingCompany data={lookingWebCom}/>
   <AskQuestion data={askQuestion}/>
   <WhyChooseUs data={whyCooseUS} item={choosePhoto}/>
   <BusinessForm data={bussinessdetail}  item={businessService} award={awards} footer={lastFooter}/>
      <Address data={companyAddress}/>
      <Footer data={footer}/>
      <Footer2 data={lastFooter}/>
    
     
</>
  )
}

export default page
