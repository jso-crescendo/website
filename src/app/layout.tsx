import './globals.css';

import classNames from 'classnames';
import {Lora, Montserrat} from 'next/font/google';
import Script from 'next/script';

import {NavBar} from '@/components/nav-bar';

import {Footer} from '../components/footer';

export const metadata = {
  title: 'JSO Crescendo',
  description: 'TODO make a description',
  viewport: 'width=device-width, initial-scale=1.0',
};

const loraFont = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});
const montserratFont = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="de-CH"
      className={classNames(loraFont.variable, montserratFont.variable)}
    >
      <Script
        strategy="afterInteractive"
        data-website-id="a8b60da8-33ab-4d43-b88b-e6923f956f7b"
        src="https://analytics.jso-crescendo.ch/umami.js"
      />
      <body className="flex min-h-screen w-screen flex-col overflow-x-hidden bg-background text-on-background">
        <header className="container mx-auto ">
          <NavBar />
        </header>
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
