import Link from "next/link";
import React from "react";
import Menu from "./menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="">
      <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        {/* Mobile */}
        <div className="h-full flex items-center justify-between md:hidden">
          <Link href="/">Top Closet</Link>
          <Menu />
        </div>

        {/* BIGGER SCREEN */}
        <div className="hidden md:flex items-center h-full justify-between gap-8">
          {/* LEFT */}
          <div className="w-1/3 xl:w-1/2">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logotop.png" alt="logo" width="30" height="30" />
              <div className="text-xl tracking-wide font-bold">TOP CLOSET</div>
            </Link>
          </div>
          {/* RIGHT */}
          <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
            <SearchBar />
            <NavIcons />
          </div>
        </div>
      </div>
      <div className="hidden md:flex gap-4 w-full items-center text-lg font-bold justify-center h-16  text-black bg-gray-300">
        <Link href="/" className="underline-animation tracking-wide">
          Homepage
        </Link>
        <Link href="/" className="underline-animation tracking-wide">
          Shop
        </Link>
        <Link href="/" className="underline-animation tracking-wide">
          Deals
        </Link>
        <Link href="/" className="underline-animation tracking-wide">
          About
        </Link>
        <Link href="/" className="underline-animation">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
