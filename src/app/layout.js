import "./globals.css";
import { Inter } from "next/font/google";
import ToasterContext from "./context/ToasterContext";
import Provider from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gradify",
  description: "Created and designed by Okoji Kelechi ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white ">
        <Provider>
          <ToasterContext />
          {children}
        </Provider>
      </body>
    </html>
  );
}
