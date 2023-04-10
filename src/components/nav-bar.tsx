"use client";

import classNames from "classnames";
import Link from "next/link";
import React from "react";

import { useToggle } from "../hooks/useToggle";
import { BurgerIcon } from "./icons/burger";
import { Logo } from "./icons/logo";

const NavLink: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <Link href={href} className="md:p-4 py-2 block hover:text-purple-400">
    {text}
  </Link>
);
export const NavBar: React.FC = () => {
  const [responsiveMenuOpen, toggleMenu] = useToggle(false);
  return (
    <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
      <Link href="/" className="block py-2 w-40">
        <Logo role="link" />
      </Link>

      <BurgerIcon
        className="h-6 w-6 cursor-pointer md:hidden block"
        onClick={toggleMenu}
        role="button"
      />

      <div
        className={classNames("w-full md:flex md:items-center md:w-auto", {
          hidden: !responsiveMenuOpen,
        })}
      >
        <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
          {[
            ["Orchester", "/orchester"],
            ["Konzerte", "/konzerte"],
            ["Galerie", "/galerie"],
            ["Kontakt", "/kontakt"],
          ].map(([name, href]) => (
            <li key={name}>
              <NavLink href={href} text={name} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
