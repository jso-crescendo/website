import './globals.css';

import {Lora, Montserrat} from 'next/font/google';

import {Footer} from '../components/footer';
import {NavBar} from '@/components/nav-bar';
import classNames from 'classnames';
import {Viewport} from 'next';

export const metadata = {
  title: {template: '%s | JSO Crescendo', default: 'JSO Crescendo'},
  metadataBase: new URL('https://jso-crescendo.ch'),
  applicationName: 'JSO Crescendo',
  keywords: [
    'orchester',
    'crescendo',
    'Jugendsinfonieorchester',
    'zürich',
    'orchester mitspielen',
  ],
  openGraph: {
    locale: 'de-CH',
    type: 'website',
    siteName: "JSO Crescendo",
    url: 'https://jso-crescendo.ch',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
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
      {process.env.NODE_ENV == 'production' && (
        <script
          async
          defer
          data-website-id="07350fa3-6016-4694-a802-410a5a7aab98"
          src="https://analytics.jso-crescendo.ch/script.js"
        />
      )}
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
