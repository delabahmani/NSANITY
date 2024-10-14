"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarItem from "./NavbarItem";
import Button from "../universal/Button";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { status } = useSession();

  return (
    <header className="h-16 p-6 mb-4 items-center border-b w-[70%] mx-auto">
      <nav className="flex justify-between items-center">
        <div className="items-center flex">
          <Link href={"/"} className="">
            <Image
              src={"/images/logo.webp"}
              priority
              width={150}
              height={10}
              alt="nsanity logo"
              className="justify-start flex"
            />
          </Link>
          <div className="flex justify-between items-center gap-6  px-20">
            <NavbarItem content="Home" href="/" />
            <NavbarItem content="Products" href="" />
            <NavbarItem content="Contact" href="" />
          </div>
        </div>

        {/* login/sign up avatar */}

        {status === "authenticated" ? (
          <div>
            <Button
              text="sign out"
              bgColor="bg-orange"
              textColor="text-offwhite"
              textSize="text-sm"
              textWeight="font-semibold"
              width="w-[90px]"
              onClick={() => signOut()}
            />
          </div>
        ) : (
          <div className="flex items-center">
            <Link href={"/sign-up"}>
              <Button
                text="sign up"
                bgColor="bg-orange"
                textColor="text-offwhite"
                textSize="text-sm"
                textWeight="font-semibold"
                width="w-[85px]"
              />
            </Link>
          </div>
        )}

        {/* shopping cart */}
      </nav>
    </header>
  );
}
