import {
    FacebookIcon,
    LinkedinIcon,
    MailIcon,
    MessageCircleIcon,
    StarIcon,
  } from "lucide-react";
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
      { icon: <StarIcon className="w-5 h-5" />, href: "#" },
      { icon: <FacebookIcon className="w-5 h-5" />, href: "#" },
      { icon: <LinkedinIcon className="w-5 h-5" />, href: "#" },
      { icon: <StarIcon className="w-5 h-5" />, href: "#" },
      { icon: <MailIcon className="w-5 h-5" />, href: "#" },
      { icon: <MessageCircleIcon className="w-5 h-5" />, href: "#" },
    ];
  
    return (
      <footer className="w-full py-16">
        <div className="max-w-[1432px] mx-auto bg-[#ead0b9] rounded-[30px] shadow-[0px_4px_4px_#00000040] p-8">
          <div className="flex justify-between items-start">
            {/* Logo and Tagline */}
            <div className="space-y-4">
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
  
            {/* Navigation Links */}
            <nav className="flex gap-8">
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
  
            {/* Social Icons */}
            <div className="flex flex-col items-end gap-4">
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
              <Separator className="w-[233px] bg-neutral-800" />
            </div>
          </div>
        </div>
      </footer>
    );
  };
  