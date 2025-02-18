import { PlayCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const HowToUseSection = () => {
  return (
    <section className="w-full max-w-[988px] mx-auto my-8">
      <Card className="relative w-full bg-[#d37f36] rounded-2xl p-6">
        <CardContent className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[447px] bg-[#f0f0f0] p-8 shadow-[9px_4px_7px_#00000040]">
            <h2 className="text-[64px] leading-[55px] font-medium text-[#010101] [text-shadow:0px_4px_4px_#00000040] font-['Darker_Grotesque']">
              How to use
              <br />
              Docutech
            </h2>
            <p className="mt-8 text-xl font-medium text-black font-['Darker_Grotesque']">
              Step-by-Step Tutorial Demo
            </p>
          </div>

          <div className="relative mt-8">
            <div className="absolute -left-4 -top-1">
              <div className="w-[45px] h-[43px] bg-[#efefef] rounded-full shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] opacity-40" />
              <img
                className="absolute -top-1 -left-1 w-[79px] h-[77px]"
                alt="Background shadow"
                src="https://c.animaapp.com/7qd4Tr3I/img/background-shadow.svg"
              />
            </div>

            <Button
              variant="ghost"
              className="flex items-center gap-2 text-white font-bold"
            >
              <PlayCircleIcon className="w-5 h-5" />
              WATCH A DEMO
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
