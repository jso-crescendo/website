import './globals.css';

import classNames from 'classnames';
import {Lora, Montserrat} from 'next/font/google';

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
      <body className="min-h-screen w-screen overflow-x-hidden bg-background text-on-background flex flex-col">
        <header className="container mx-auto ">
          <NavBar />
        </header>
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
