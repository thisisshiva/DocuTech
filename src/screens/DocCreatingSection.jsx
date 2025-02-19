import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const DocumentCreatingSection = () => {
  return (
    <section className="px-4 py-8">
    <Card className="max-w-[1235px] mx-auto bg-gradient-to-b from-[#fcad00] via-[#c58600] to-[#b06000] p-12 rounded-2xl">
      <CardContent className="flex flex-col items-center gap-4">
        <div className="text-center">
          <h2 className="font-bold text-3xl text-white font-poppins leading-9">
            Start Creating Documents Now
          </h2>
        </div>

        <div className="text-center">
          <p className="text-white text-[19px] font-poppins leading-7">
            No Credit Card Required • Free Trial Available
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button
            variant="secondary"
            className="h-[60px] px-8 bg-[#f6eee3] text-[#b26300] text-[15px] font-poppins shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]"
          >
            Try for Free
          </Button>

          <Button
            variant="outline"
            className="h-[60px] px-[34px] bg-transparent border-2 border-[#f6eee3] text-[#f6eee3] text-[15px] font-poppins"
          >
            Watch Demo
          </Button>
        </div>
      </CardContent>
    </Card>
    </section>
  );
};
