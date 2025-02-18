import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../components/ui/card";

export const BannerSection = () => {
  const certifications = [
    { text: "ESIGN Compliant" },
    { text: "UETA Approved" },
    { text: "eIDAS Certified" },
  ];

  return (
    <section className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col items-center gap-8">
        <img
          className="w-full max-w-4xl"
          alt="Ai powered unified platform create, sign and convert effortlessly"
          src="https://c.animaapp.com/7qd4Tr3I/img/ai-powered-unified-platform-create--sign---convert-effortlessly@2x.png"
        />

        <p className="text-center text-lg text-neutral-800 font-normal font-['Poppins']">
          Fast, Smart &amp; Secure –Works with Google Drive, Dropbox, Salesforce
          &amp; Your Favorite Business Tools
        </p>

        <Card className="w-full border border-black shadow-md">
          <CardContent className="flex flex-wrap justify-center items-center gap-4 py-2">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                <span className="font-['Poppins'] text-base text-neutral-800">
                  {cert.text}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

