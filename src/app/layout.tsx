import './globals.css';

import {Lora, Montserrat} from 'next/font/google';

import {NavBar} from '../components/nav-bar';

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
      lang="en"
      className={`${loraFont.variable} ${montserratFont.variable}`}
    >
      <body className="container mx-auto">
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer>Yep definitely something should go here</footer>
      </body>
    </html>
  );
}
