"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NavbarItem from "./NavbarItem";
import Button from "../universal/Button";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { status, data: session } = useSession();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsPopupVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    if (!isPopupVisible) {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPopupVisible]);

  return (
    <header className="h-16 p-6 mb-4 items-center border-b w-[70%] mx-auto relative">
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
          <div ref={popupRef}>
            <div
              className={`absolute z-30 right-0 top-20 bg-white p-6 shaodw-lg rounded-md  flex-col gap-2 text-right min-w-[160px] ${
                isPopupVisible ? "flex" : "hidden"
              }`}
            >
              <div className="font-bold">{session?.user?.name}</div>
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

            <Image
              src={session?.user?.image || ""}
              width={36}
              height={36}
              alt="profile image"
              className="rounded-full cursor-pointer"
              onClick={() => setIsPopupVisible((prev) => !prev)}
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
