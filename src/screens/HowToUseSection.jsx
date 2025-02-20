import { FaPlay } from "react-icons/fa";
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const HowToUseSection = () => {
  return (
    <section className="w-full flex justify-center py-8 sm:py-9 px-4 bg-[#f6ede1]">
      {/* Orange Background Card */}
      <Card className="relative w-full max-w-[988px] bg-[#d37f36] rounded-2xl p-4 sm:p-10 flex justify-center">
        <CardContent className="relative flex flex-col items-center w-full p-9 sm:p-8">
          {/* White Content Box */}
          <div className="relative w-full max-w-[447px] bg-white p-6 sm:p-9 shadow-[8px_8px_15px_#00000030]">
            <h2 className="text-2xl sm:text-[38px] md:text-[42px] leading-[1.2] font-medium text-[#010101]">
              How to use <br /> Docutech
            </h2>
            <p className="mt-6 sm:mt-10 text-base sm:text-lg text-neutral-700">
              Step-by-Step Tutorial Demo
            </p>
          </div>

          {/* Play Button + Watch Demo */}
          <div className="absolute mb-2 bottom-[-20px] sm:bottom-[-30px] right-[-15px] sm:right-[-30px] flex items-center gap-1">
            {/* Play Button Overlapping White Box */}
            <Button
              variant="ghost"
              className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md border-[3px] sm:border-[4px] border-transparent hover:border-[#DFAC80] transition-all duration-300"
            >
              <FaPlay className="text-black text-xs sm:text-sm" />
            </Button>

            {/* Watch Demo Text */}
            <Button
              variant="ghost"
              className="text-white font-semibold text-xs sm:text-sm md:text-base"
            >
              WATCH A DEMO
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};