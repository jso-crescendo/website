import './globals.css';

import {Lora, Montserrat} from 'next/font/google';

import {NavBar} from '@/components/nav-bar';

export const metadata = {
  title: 'JSO Crescendo',
  description: 'TODO make a description',
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="w-screen container mx-auto min-h-screen bg-background text-on-background overflow-x-hidden">
        <header>
          <NavBar />
        </header>
        <main className="p-4">{children}</main>
        <footer>Yep definitely something should go here</footer>
      </body>
    </html>
  );
}
