import { inter } from "./font";
import Footer from "./footer";
import "./globals.css";
import { Header, MenuProvider } from "./header";
import Navigation from "./navigation";

export const metadata = {
  title: "Andrei Dimaano",
  description: "Andrei's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.ico" />
      <body className={inter.className}>
        <MenuProvider>
          <Header />
          {children}
          <Footer />
          <Navigation />
        </MenuProvider>
      </body>
    </html>
  );
}
