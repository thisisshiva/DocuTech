import React, { useRef } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const UploadGenerateAiSection = () => {
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
    }
  };

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
    <div className="flex flex-col items-center w-full px-4 py-3">
      <div className="w-full max-w-[768px] bg-[#d37f36] rounded-xl shadow-md sm:shadow-lg md:shadow-xl p-6">
        <div className="flex flex-wrap justify-center items-center gap-6 w-full">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="flex-1 min-w-[250px] max-w-[320px] bg-[#f6eee3] border-2 border-dashed border-[#0c3767] rounded-lg"
            >
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <img className={`${card.iconSize}`} alt="Icon" src={card.icon} />

                <div className="w-full text-center">
                  <h3 className="font-bold text-neutral-800 text-xl leading-7 font-poppins">
                    {card.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-[15px] leading-6 text-center font-poppins">
                  {card.description}
                </p>

                {card.title === "Upload Document" ? (
                  <>
                    <Button
                      onClick={handleFileSelect}
                      className="bg-[#d37f36] hover:bg-[#c27331] text-white text-[15px] px-6 py-2 font-poppins"
                    >
                      {card.buttonText}
                    </Button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                  </>
                ) : (
                  <Button className="bg-[#d37f36] hover:bg-[#c27331] text-white text-[15px] px-6 py-2 font-poppins">
                    {card.buttonText}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
