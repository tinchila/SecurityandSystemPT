"use client";
import { navLinks, socialLinks } from "@/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="tablet:hidden">
      {/* Toggle button */}
      <button
        className="text-grey-700 hover:text-purple transition-colors"
        onClick={toggleMenu}
      >
        <Menu />
      </button>
      {/* Side bar */}
      <div
        className={`w-full h-full flex flex-col bg-peach-600 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform 
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex w-full items-center justify-between h-20 max-width border-b border-peach">
          <Link href={"/"} className="flex flex-row justify-center items-center gap-3">
            <Image
              src={"/images/user.png"}
              alt="user-img"
              width={35}
              height={35}
              className="object-cover"
            />
            <h5 className="text-purple text-xl font-semibold">
              UserName
            </h5>
          </Link>
          <button
            className="text-grey-700 hover:text-purple transition-colors"
            onClick={toggleMenu}
          >
            <X />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-1 gap-10">
          <ul className="flex items-center flex-col gap-5">
            {navLinks.map((link, index) => (
              <li key={link.url}>
                <NavLink
                  href={link.url}
                  label={link.label}
                  className="text-3x1"
                  onClick={closeMenu} // Close menu on click
                />
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-full h-20 flex items-center justify-between max-width border-t border-peach">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="text-grey-700 hover:text-purple transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
