import React from "react";

import Navbar from "./screens/navbar";
import CompanyLogos from "./screens/CompanyLogos";
import { BannerSection } from "./screens/BannerSection";
import { UploadGenerateAiSection } from "./screens/UploadGenerateAiSection";
import TotalSignedinInfo from "./screens/TotalSignedinInfo";
import { HowToUseSection } from "./screens/HowToUseSection";
import WhyToChooseDT from "./screens/WhyToChooseDT";
import { DocumentCreatingSection } from "./screens/DocCreatingSection";
import { TestimonialsSection } from "./screens/TestimonialSection";
import { FooterSection } from "./screens/FooterSection";
import { AccordianFAQ } from "./screens/AccordianFAQ";
import { TestimonialsCarousel } from "./screens/CarouselUserExp";




const App = () => {
  return (
    <div className="bg-[#f6eee3] flex flex-col items-center w-full">
      <div className="w-full max-w-[1432px] relative">
        <Navbar/>

        <BannerSection/>

        <UploadGenerateAiSection/>

        <TotalSignedinInfo/>

        <CompanyLogos/>

        <HowToUseSection/>

        <TestimonialsCarousel/>

        <WhyToChooseDT/>

        <DocumentCreatingSection/>

        <TestimonialsSection/>

        <AccordianFAQ/>

        <FooterSection/>
      </div>
    </div>
  );
};

export default App