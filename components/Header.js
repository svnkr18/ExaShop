import Image from "next/image";
import React from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  BoltIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <div>
      {/* top navbar */}
      <div className="flex items-center p-1 flex-grow py-2 bg-exa_blue ">
        <div className=" items-center flex-grow sm:flex-grow-0">
          <Image
            src="/ExaShop.png"
            width={250}
            height={40}
            object-fit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* search bar */}

        <div className="hidden sm:flex h-10 bg-yellow-500 hover:bg-yellow-600  items-center rounded-2xl flex-grow cursor-pointer  ">
          <input
            className=" h-full p-2 w-6 flex-grow flex-shrink rounded-l-2xl focus:outline-none px-4"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4 " />
        </div>

        {/* right section of navbar */}

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
          <div className="link">
            <p>Hello Shubhankar!</p>
            <p className="font-extrabold">Account & List</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& orders</p>
          </div>

          <div className="link relative flex items-center">
            <span className="absolute top-0 left-6 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingBagIcon className="h-9" />
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="flex space-x-6 p-2 px-6 items-center bg-exa_blue-light text-white text-small">
        <p className="flex link items-center pr-3">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Electronics</p>
        <p className="link">Grocery</p>
        <p className="link">Pharmacy</p>
        <p className="link">Fashion</p>
        <p className="link hidden md:inline-flex">Deals</p>
        <p className="link hidden md:inline-flex">Home</p>
        <p className="link hidden md:inline-flex">Beauty</p>
        <p className="link hidden lg:inline-flex">Appliances</p>
        <p className="link hidden lg:inline-flex">Furniture</p>
        <p className="link hidden lg:inline-flex">Travel</p>
        <p className="link hidden lg:inline-flex">Movies</p>
      </div>
    </div>
  );
}

export default Header;
