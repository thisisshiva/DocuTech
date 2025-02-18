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
    <nav className="w-[76rem] h-[46px] mx-auto mt-[2.3rem] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          className="w-[34px] h-10"
          alt="Logo"
          src="https://c.animaapp.com/2tYYD5rC/img/component-1-6.svg"
        />
        <span className="font-bold text-2xl text-gray-800">DocuTech</span>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="flex gap-8">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink className="text-neutral-800 text-base font-normal hover:text-[#b06000] transition-colors">
                <a href={item.href}>
                {item.label}

                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button className="bg-[#d37f36] text-white">Get Started</Button>
    </nav>
  );
};

export default Navbar;
