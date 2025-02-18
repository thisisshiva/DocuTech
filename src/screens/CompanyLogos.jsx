const CompanyLogos = () => {
  const companyLogos = [
    {
      src: "https://c.animaapp.com/2tYYD5rC/img/us-san-diego-logo-b7adee9dc25258a9550e-png@2x.png",
      className: "w-32 h-[26px]",
    },
    {
      src: "https://c.animaapp.com/2tYYD5rC/img/container.svg",
      className: "w-[162px] h-[52px]",
    },
    {
      src: "https://c.animaapp.com/2tYYD5rC/img/container-1.svg",
      className: "w-[162px] h-[60px]",
    },
    {
      src: "https://c.animaapp.com/2tYYD5rC/img/container-2.svg",
      className: "w-[162px] h-4",
    },
    {
      src: "https://c.animaapp.com/2tYYD5rC/img/container-3.svg",
      className: "w-[162px] h-[62px]",
    },
    {
      src: "https://c.animaapp.com/2tYYD5rC/img/b2brocket-logo-3eb8c339ad09d3ddc4a0-png@2x.png",
      className: "w-32 h-[30px]",
    },
  ];

  return (
    <>
      <div className="w-[1122px] mx-auto mt-20">
        <div className="grid grid-cols-6 gap-4 items-center">
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
    </>
  );
};

export default CompanyLogos;
