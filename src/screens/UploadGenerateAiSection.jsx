import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const UploadGenerateAiSection = () => {
  const cards = [
    {
      icon: "https://c.animaapp.com/7qd4Tr3I/img/component-1-3.svg",
      iconSize: "w-[45px] h-9",
      title: "Upload Document",
      description: "Drag & drop or browse your files",
      buttonText: "Select File",
    },
    {
      icon: "https://c.animaapp.com/7qd4Tr3I/img/component-1-4.svg",
      iconSize: "w-[40.5px] h-9",
      title: "Generate with AI",
      description: "Create documents automatically",
      buttonText: "Use AI",
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-[768px] items-start p-8 bg-[#d37f36] rounded-xl shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]">
      <div className="flex items-start justify-center gap-8 w-full">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="flex-1 bg-[#f6eee3] border-2 border-dashed border-[#0c3767]"
          >
            <CardContent className="flex flex-col items-center gap-3.5 p-[26px]">
              <img className={`${card.iconSize}`} alt="Icon" src={card.icon} />

              <div className="w-full text-center">
                <h3 className="font-bold text-neutral-800 text-xl leading-7 font-poppins">
                  {card.title}
                </h3>
              </div>

              <div className="w-full text-center py-[8.5px]">
                <p className="text-gray-600 text-[15px] leading-6 font-poppins">
                  {card.description}
                </p>
              </div>

              <Button className="bg-[#d37f36] hover:bg-[#c27331] text-white text-[15px] px-6 py-2 font-poppins">
                {card.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
