import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 max-width border-b border-peach">
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
      <nav className="flex items-center gap-12 max-tablet:hidden">
        <ul className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.url} label={link.label} />
            </li>
          ))}
        </ul>
            </nav>
            <MobileMenu />
    </header>
  );
};

export default Header;
