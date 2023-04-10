import "./globals.css";

import { NavBar } from "../components/nav-bar";

export const metadata = {
  title: "JSO Crescendo",
  description: "TODO make a description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
