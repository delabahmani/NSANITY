import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <header className="h-16 p-6 mb-4 items-center  border-b w-[70%] mx-auto">
      <nav className="">
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
      </nav>
    </header>
  );
};

export default Navbar;
