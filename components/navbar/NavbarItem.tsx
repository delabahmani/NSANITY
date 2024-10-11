"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItem({
  href,
  content,
}: {
  href: string;
  content: string;
}) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${
        path == href ? "border-b border-b-orange" : ""
      } text-sm h-6 md:hover:text-orange-400 transition hover:scale-105`}
    >
      {content}
    </Link>
  );
}
