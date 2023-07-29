import Navbar from "./navbar";
import { ptSans } from "./fonts";
import "./globals.css";

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
      <body
        className={`${ptSans.className} font-normal text-neutral-800`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
