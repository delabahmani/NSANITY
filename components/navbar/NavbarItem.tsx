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
        path == href ? "border-b border-b-orange-400" : ""
      } text-sm h-6 md:hover:text-orange-400 transition`}
    >
      {content}
    </Link>
  );
}
