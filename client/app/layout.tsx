import "./globals.css";
import { Inter } from "next/font/google";
import Container from "../components/container";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="">
          <Container>{children}</Container>
        </div>
      </body>
    </html>
  );
}
