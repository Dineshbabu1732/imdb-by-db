import Header from "./Components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imdb clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* header */}
        <Header />
        {/* navbar */}

        {/* searchbox */}

        {children}
      </body>
    </html>
  );
}
