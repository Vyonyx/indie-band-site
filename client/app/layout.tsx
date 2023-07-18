import "./globals.css";
import Container from "../components/container";
import { ptSans } from "./fonts";
import Navbar from "./Navbar";

export const metadata = {
  title: "JamStack",
  description:
    "An all inclusive site for band marketing and and merch sales (proof of concept).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ptSans.className} font-normal text-neutral-800`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
