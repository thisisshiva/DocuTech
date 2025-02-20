import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navItems = [
    { id: 0, label: "Features", href: "#" },
    { id: 1, label: "Pricing", href: "#" },
    { id: 2, label: "Solutions", href: "#" },
    { id: 3, label: "Enterprise", href: "#" },
  ];
  return (
    <nav className="w-[80%]  mx-auto mt-4 sm:mt-[2.1rem] px-4 sm:px-0 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center justify-center sm:justify-between w-full sm:w-auto mb-4 sm:mb-0">
        <div className="flex items-center gap-2">
          <img
            className="w-[34px] h-10  "
            alt="Logo"
            src="https://c.animaapp.com/2tYYD5rC/img/component-1-6.svg"
          />
          <span className="font-bold text-2xl text-gray-800">DocuTech</span>
        </div>
        <div className="sm:hidden">
          {/* Here you could add a mobile menu toggle if needed */}
        </div>
      </div>

      <NavigationMenu className="w-full sm:w-auto mt-4 sm:mt-0">
        <NavigationMenuList className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-4 sm:gap-8">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.id} className="w-full sm:w-auto text-center sm:text-left">
              <NavigationMenuLink className="text-neutral-800 text-base font-normal hover:text-[#b06000] transition-colors py-2 sm:py-0">
                <a href={item.href}>
                  {item.label}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button className="bg-[#d37f36] text-white mt-4 sm:mt-0 w-full sm:w-auto">Get Started</Button>
    </nav>
  );
};

export default Navbar;