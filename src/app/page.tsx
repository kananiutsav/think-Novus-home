
// "use client"
import CompanyPartner from "@/components/CompanyPartner";
import Navbar from "@/components/Navbar";
import { CompanyPartnerss, Frame, TechnologyExpertise, FilterData, Serve, ProcessUse, recentData, clientSay, experience, feature, methodology, awards, blogs, companyAddress, footer, lastFooter, businessWork, partnershipModel, developer, bussinessdetail, businessService } from "@/utils/Constant";
import Frames from "@/components/Frames"
import Technology from "@/components/Technology";
import Filter from "@/components/Filter";
import ServeTechnology from "@/components/ServeTechnology";
import Process from "@/components/Process";
import RecentData from "@/components/RecentData";
import ClientReview from "@/components/ClientReview";
import Experience from "@/components/Experience";
import Features from "@/components/Features";
import Methodology from "@/components/Methodology";
import Award from "@/components/Award";
import Blogs from "@/components/Blogs";
import Address from "@/components/Address";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";
import BusinessWorkWith from "@/components/BusinessWorkWith";
import PartnershipModel from "@/components/PartnershipModel";
import DedicatedDeveloper from "@/components/DedicatedDeveloper";
import BusinessForm from "@/components/BusinessForm";
// import Cards from "@/components/Cards";

export default function Home() {


  return (

    <div className=" mx-auto">
 <div className="h-[100vh]">
 <Navbar />
      <CompanyPartner data={CompanyPartnerss} />
 </div>
      <Frames data={Frame} />
      <Technology data={TechnologyExpertise} />
       <Filter data={FilterData} /> 
      {/* <Cards data={cardsData}/>  */}
      <DedicatedDeveloper data={developer}/>
      <ServeTechnology data={Serve} />
      <Process data={ProcessUse} />
      <RecentData data={recentData} />
      <ClientReview data={clientSay} />
      <Experience data={experience} />
      <Features data={feature} />
      <PartnershipModel data={partnershipModel}/>
      <BusinessWorkWith data={businessWork}/>
      <Methodology data={methodology}/>
      <Award data={awards}/>
      <Blogs data={blogs}/>
      <BusinessForm data={bussinessdetail}  item={businessService} award={awards} footer={lastFooter}/>
      <Address data={companyAddress}/>
      <Footer data={footer}/>
      <Footer2 data={lastFooter}/>
    </div>

  )
}
