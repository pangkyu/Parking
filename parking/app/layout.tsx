import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKr = Noto_Sans_KR({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parking",
  description: "주차 공간을 찾을 수 있게 도와줍니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="notoSansKr.className">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
