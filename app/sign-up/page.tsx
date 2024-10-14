"use client"
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

export default async function SignUp() {
  return (
    <>
      <h1 className="text-center mt-8 text-4xl font-semibold">sign in</h1>
      <div className="mt-4 p-4 flex flex-col items-center justify-center gap-4 ">
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
      </div>
    </>
  );
}
