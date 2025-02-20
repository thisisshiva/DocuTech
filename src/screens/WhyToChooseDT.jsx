import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const WhyToChooseDT = () => {
  return (
    <section className="px-4">
    <Card className="w-full max-w-[1234px] mx-auto mt-20 bg-[#f3d3b8] rounded-2xl shadow-lg">
      <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {/* Left Section - Text */}
        <div className="flex-1">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[45px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px] text-[#343434] font-medium [text-shadow:0px_4px_4px_#00000040]">
            Why choose <br /> Docutech
          </h2>
        </div>

        {/* Right Section - Image Placeholder */}
        <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[449px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[504px] bg-black rounded-lg shadow-[9px_4px_7px_#00000040]" />
      </CardContent>
    </Card>
    </section>
  );
};

export default WhyToChooseDT;