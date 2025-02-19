import React from "react";

const CompanyLogos = () => {
  const companyLogos = [
    {
      src: "https://c.animaapp.com/2tYYD5rC/img/us-san-diego-logo-b7adee9dc25258a9550e-png@2x.png",
      className: "w-20 sm:w-24 md:w-28 lg:w-32 h-auto",
    },
    {
      src: "https://c.animaapp.com/2tYYD5rC/img/container.svg",
      className: "w-24 sm:w-32 md:w-40 lg:w-[162px] h-auto",
    },
    {
      src: "https://c.animaapp.com/2tYYD5rC/img/container-1.svg",
      className: "w-24 sm:w-32 md:w-40 lg:w-[162px] h-auto",
    },
    {
      src: "https://c.animaapp.com/2tYYD5rC/img/container-2.svg",
      className: "w-24 sm:w-32 md:w-40 lg:w-[162px] h-auto",
    },
    {
      src: "https://c.animaapp.com/2tYYD5rC/img/container-3.svg",
      className: "w-24 sm:w-32 md:w-40 lg:w-[162px] h-auto",
    },
    {
      src: "https://c.animaapp.com/2tYYD5rC/img/b2brocket-logo-3eb8c339ad09d3ddc4a0-png@2x.png",
      className: "w-20 sm:w-24 md:w-28 lg:w-32 h-auto",
    },
  ];

  return (
    <div className="w-full max-w-[1122px] mx-auto mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center">
        {companyLogos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              className={logo.className}
              alt={`Company logo ${index + 1}`}
              src={logo.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;