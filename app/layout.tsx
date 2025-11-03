import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgrMarket AI",
  description: "Connecting Farmers and Buyers Through Smart Digital Agriculture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className="bg-[#F4FDF3] text-gray-800">
        {children}
      </body>
    </html>
  );
}
