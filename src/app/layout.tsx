import './globals.css';

import {Lora, Montserrat} from 'next/font/google';

import {NavBar} from '@/components/nav-bar';

export const metadata = {
  title: 'JSO Crescendo',
  description: 'TODO make a description',
  viewport: 'width=device-width, initial-scale=1.0',
};

const loraFont = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  display: 'swap',
});
const montserratFont = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="de-CH"
      className={`${loraFont.variable} ${montserratFont.variable}`}
    >
      <body className="container mx-auto min-h-screen w-screen overflow-x-hidden bg-background text-on-background">
        <header>
          <NavBar />
        </header>
        <main className="p-4">{children}</main>
        <footer>Wow such a nice footer ❤️</footer>
      </body>
    </html>
  );
}
