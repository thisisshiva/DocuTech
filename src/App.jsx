import React from "react";

import Navbar from "./screens/Navbar";
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

import {CarouselSize} from "./screens/Carousel";




const App = () => {
  return (
    <div className="bg-[#f6eee3] flex flex-col items-center w-full">
        <Navbar/>
      <div className="w-full max-w-[1432px] relative">

        <BannerSection/>

        <UploadGenerateAiSection/>

        <TotalSignedinInfo/>

        <CompanyLogos/>

        <HowToUseSection/>

        <CarouselSize/>

        <WhyToChooseDT/>

        <DocumentCreatingSection/>

        <TestimonialsSection/>

        <AccordianFAQ/>

      </div>
        <FooterSection/>
    </div>
  );
};

export default App