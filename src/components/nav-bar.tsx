"use client";

import classNames from "classnames";
import Link from "next/link";
import React from "react";

import { useToggle } from "../hooks/useToggle";
import { BurgerIcon } from "./icons/burger";

const NavLink: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <Link href={href} className="md:p-4 py-2 block hover:text-purple-400">
    {text}
  </Link>
);
export const NavBar: React.FC = () => {
  const [responsiveMenuOpen, toggleMenu] = useToggle(false);
  return (
    <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
      <div>
        <Link href="/">
          <img src="/logo.svg" alt="JSO Crescendo Logo" width="200" />
        </Link>
      </div>

      <BurgerIcon
        id="menu-button"
        className="h-6 w-6 cursor-pointer md:hidden block"
        onClick={toggleMenu}
      />

      <div
        id="menu"
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
