"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export function SignUpButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center border p-4  rounded-full  gap-4 hover:bg-slate-100/25 transition "
    >
      <span>
        <Image
          src={"/images/google-logo.webp"}
          width={30}
          height={30}
          alt="google logo"
          priority
        />
      </span>
      Sign In with Google
    </button>
  );
}
