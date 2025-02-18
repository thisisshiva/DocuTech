import React from "react";
import { Card,CardContent } from "@/components/ui/card";

const WhyToChooseDT = () => {
  return (
    <Card className="w-[1190px] mx-auto mt-20 bg-[#f3d3b8] rounded-2xl">
      <CardContent className="p-9 flex justify-between">
        <div>
          <h2 className="text-[64px] leading-[55px] text-[#343434] font-medium [text-shadow:0px_4px_4px_#00000040]">
            Why choose Docutech
          </h2>
        </div>
        <div className="w-[449px] h-[504px] bg-black shadow-[9px_4px_7px_#00000040]" />
      </CardContent>
    </Card>
  );
};

export default WhyToChooseDT;
