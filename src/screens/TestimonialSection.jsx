import React from "react";
import { Card, CardContent } from "../components/ui/card";

export const TestimonialsSection = () => {
  const trustFeatures = [
    {
      title: "Trusted\nby thousands",
      color: "#d37f36",
    },
    {
      title: "SOC-2\nCertified",
      color: "#d37f36",
    },
    {
      title: "GDPR & HIPAA\nCompliant",
      color: "#d37f36",
    },
    {
      title: "End-to-end\nencryption",
      color: "#f4a701",
    },
    {
      title: "End-to-end\nencryption",
      color: "#f4a701",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full max-w-3xl mx-auto py-7">
      <h2 className="text-3xl font-bold text-neutral-800 text-center mb-16">
        Trust & Compliance
      </h2>

      {/* Flex container for the cards */}
      <div className="flex flex-wrap justify-center  sm:gap-x-14">
        {trustFeatures.map((feature, index) => (
          <Card
            key={index}
            className={`w-[200px] h-[200px] rounded-full flex items-center justify-center`}
            style={{ backgroundColor: feature.color }}
          >
            <CardContent className="p-0 flex items-center justify-center h-full">
              
              <p className="font-bold text-xl text-white text-center whitespace-pre-line leading-snug">
                {feature.title}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};