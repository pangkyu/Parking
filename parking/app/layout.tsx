import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  fallback: [
    "-apple-system",
    "Malgun Gothic",
    "Apple SD Gothic Neo",
    "Roboto",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "sans-serif",
  ],
});

export const cls = (...className: string[]) => {
  return className.join(" ");
};

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
    <html lang="en" className={cls(notoSansKR.className)}>
      <body>{children}</body>
    </html>
  );
}
