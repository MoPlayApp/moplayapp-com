import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoPlay | More play. More fun.",
  description: "Meet MoPlay, where your everyday playtime gets a little more rewarding.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
