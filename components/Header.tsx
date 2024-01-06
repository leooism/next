"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const path = usePathname();
  return (
    <nav className="flex h-[10vh] gap-2 items-center font-semibold justify-center bg-slte-30 shadow-2xl text-xs rounded-lg p-2">
      <Link
        href="/"
        className={`${path === "/" ? "underline -translate-y-1" : ""}`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${path === "/about" ? "underline -translate-y-1" : ""}`}
      >
        About
      </Link>
      <Link
        href="/blog"
        className={`${path === "/blog" ? "underline -translate-y-1" : ""}`}
      >
        Blog
      </Link>
      <Link
        href="/login"
        className={`${path === "/login" ? "underline -translate-y-1" : ""}`}
      >
        Log in
      </Link>
    </nav>
  );
}
