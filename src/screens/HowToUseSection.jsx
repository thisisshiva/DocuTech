import { FaPlay } from "react-icons/fa";
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const HowToUseSection = () => {
  return (
    <section className="w-full flex justify-center my-12 px-4">
      <Card className="relative w-full max-w-[988px] bg-[#d37f36] rounded-2xl p-6 sm:p-12 flex justify-center">
        <CardContent className="relative flex flex-col items-center w-full p-8">
          {/* Main White Box with Shadow */}
          <div className="relative w-full max-w-[447px] bg-[#f0f0f0] p-9 shadow-[9px_4px_7px_#00000040]">

            <h2 className="text-6xl leading-[55px] text-[#010101]  ">
              How to use
              <br />
              Docutech
            </h2>
            <p className="mt-8 text-lg font-light text-black font-['Darker_Grotesque']">
              Step-by-Step Tutorial Demo
            </p>
          </div>

          {/* Play Button with Shadow - FIXED POSITIONING */}
          <div className=" bottom-6 right-6 flex items-center gap-2">
            <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full  shadow-lg">
            <FaPlay />
            </div>
            <Button
              variant="ghost"
              className="text-white font-bold text-sm sm:text-base bg-[#d37f36] hover:bg-[#b06000]"
            >
              WATCH A DEMO
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};