import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsDiscord } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import React from "react";
import { Separator } from "../components/ui/separator";

export const FooterSection = () => {
  const navLinks = [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Enterprise", href: "#" },
  ];

  const socialIcons = [
    { icon: <FaWhatsapp className="w-5 h-5"/>, href: "#" },
    { icon: <FaFacebook className="w-5 h-5"/>, href: "#" },
    { icon: <IoLogoLinkedin className="w-5 h-5" />, href: "#" },
    { icon: <BsDiscord className="w-5 h-5" />, href: "#" },
    { icon: <MdOutlineMail className="w-5 h-5" />, href: "#" },
    { icon: <FaRegMessage className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer className="w-full pt-16">
      <div className="mx-auto bg-[#ead0b9] rounded-t-[30px] shadow-[0px_4px_4px_#00000040] p-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-0">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img
                className="w-[34px] h-[30px]"
                alt="DocuTech Logo"
                src="https://c.animaapp.com/2tYYD5rC/img/component-1-5.svg"
              />
              <span className="font-bold text-2xl text-gray-800">DocuTech</span>
            </div>
            <p className="font-normal text-[15px]">
              <span className="text-neutral-800">Powered by </span>
              <span className="text-[#b06000]">Classy Endeavors</span>
            </p>
          </div>

          {/* Social Icons and Navigation Links */}
          <div className="flex flex-col items-start sm:items-end">
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-neutral-800 hover:text-[#b06000] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Separator - No gap between icons and separator */}
            <Separator className="w-full sm:w-[233px] bg-neutral-800 mt-2" />

            {/* Navigation Links */}
            <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neutral-800 text-base font-normal hover:text-[#b06000] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};