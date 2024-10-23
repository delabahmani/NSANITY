import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";
import { SignUpButton } from "@/components/SignUp/SignUpButton";

export default async function SignUp() {
  return (
    <>
      <h1 className="text-center mt-8 text-4xl font-semibold">sign in</h1>
      <div className="mt-4 p-4 flex flex-col items-center justify-center gap-4 ">
        <SignUpButton />
      </div>
    </>
  );
}
