import { PlayCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const HowToUseSection = () => {
  return (
    <section className="w-full flex justify-center my-12 px-4">
      <Card className="relative w-full max-w-[988px] bg-[#d37f36] rounded-2xl p-6 sm:p-12 flex justify-center">
        <CardContent className="relative flex flex-col items-center w-full">
          {/* Main White Box */}
          <div className="relative bg-[#f0f0f0] w-full max-w-[447px] text-center p-8 shadow-lg rounded-md">
            <h2 className="text-[36px] sm:text-[48px] md:text-[54px] leading-[1.2] font-bold text-[#010101] font-['Darker Grotesque']">
              How to use <br /> Docutech
            </h2>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-medium text-black font-['Darker Grotesque']">
              Step-by-Step Tutorial Demo
            </p>
          </div>

          {/* Play Button with Shadow - FIXED POSITIONING */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2">
            <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#efefef] rounded-full shadow-lg">
              <PlayCircleIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0c3767]" />
            </div>
            <Button
              variant="ghost"
              className="text-white font-bold text-sm sm:text-base"
            >
              WATCH A DEMO
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
