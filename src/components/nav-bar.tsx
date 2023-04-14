'use client';

import {Burger} from '@/icons/burger';
import Link from 'next/link';
import {Logo} from '@/icons/logo';
import React from 'react';
import classNames from 'classnames';
import {useToggle} from '@/hooks/useToggle';

const NavLink: React.FC<{href: string; text: string}> = ({href, text}) => (
  <Link href={href} className="block py-2 hover:text-primary-main md:p-4">
    {text}
  </Link>
);
export const NavBar: React.FC = () => {
  const [responsiveMenuOpen, toggleMenu] = useToggle(false);
  return (
    <nav className="flex w-full flex-wrap items-center justify-between py-2 px-4 text-lg md:py-0">
      <Link href="/" className="block w-40 py-2">
        <Logo role="link" className="hover:stroke-primary-main" />
      </Link>

      <Burger
        className="block h-6 w-6 cursor-pointer md:hidden"
        onClick={toggleMenu}
        role="button"
      />

      <div
        className={classNames('w-full md:flex md:w-auto md:items-center', {
          hidden: !responsiveMenuOpen,
        })}
      >
        <ul className="pt-4 text-base md:flex md:justify-between md:pt-0">
          {[
            ['Orchester', '/orchester'],
            ['Konzerte', '/konzerte'],
            ['Galerie', '/galerie'],
            ['Kontakt', '/kontakt'],
          ].map(([name, href]) => (
            <li key={name} onClick={toggleMenu}>
              <NavLink href={href} text={name} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
