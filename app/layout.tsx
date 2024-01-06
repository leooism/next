import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <section className="my-10">{children}</section>
        <footer className="h-[20vh]  rounded-t-lg bg-gray-100 flex items-center justify-center text-black text-3xl">
          This is footer
        </footer>
      </body>
    </html>
  );
}