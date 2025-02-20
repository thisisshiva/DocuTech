import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Import icons for hamburger menu

const Navbar = () => {
  const navItems = [
    { id: 0, label: "Features", href: "#" },
    { id: 1, label: "Pricing", href: "#" },
    { id: 2, label: "Solutions", href: "#" },
    { id: 3, label: "Enterprise", href: "#" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-[90%] md:w-[80%] mx-auto mt-4 mb-7 md:mt-[2.1rem] px-4 md:px-0 flex flex-col md:flex-row items-center justify-between">
      {/* Logo and Brand */}
      <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
        <div className="flex items-center gap-2">
          <img
            className="w-[34px] h-10"
            alt="Logo"
            src="https://c.animaapp.com/2tYYD5rC/img/component-1-6.svg"
          />
          <span className="font-bold text-2xl text-gray-800">DocuTech</span>
        </div>
        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-800" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:block w-full md:w-auto mt-4 md:mt-0">
        <NavigationMenuList className="flex flex-row items-center gap-8">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.id} className="w-auto text-left">
              <NavigationMenuLink className="text-neutral-800 text-base font-normal hover:text-[#b06000] transition-colors">
                <a href={item.href}>
                  {item.label}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden w-full ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-white shadow-md rounded-lg p-4 mt-4`}
      >
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id} className="w-full text-center">
                <NavigationMenuLink className="text-neutral-800 text-base font-normal hover:text-[#b06000] transition-colors py-2">
                  <a href={item.href}>
                    {item.label}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Get Started Button */}
      <Button className="bg-[#d37f36] text-white mt-4 md:mt-0 w-full md:w-auto">
        Get Started
      </Button>
    </nav>
  );
};

export default Navbar;