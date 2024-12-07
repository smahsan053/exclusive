"use client";
import React, { useState, useEffect } from "react";
import { inter, poppins } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [pathname, setPathname] = useState<string>("");

  useEffect(() => {
    // This ensures the code runs only on the client
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  return (
    <div className="grid grid-cols-12 mt-4 md:mt-10">
      <div className="col-start-2 col-span-10 gap-3 lg:gap-24 xl:gap-[148px] 2xl:gap-48 flex flex-col md:flex-row items-center justify-center">
        {/* Left Section */}
        <div className="flex flex-row gap-4 lg:gap-28 xl:gap-[190px] items-center lg:items-start">
          <h1
            className={`text-text2 text-xl sm:text-2xl font-bold leading-6 ${inter.className}`}
            style={{ letterSpacing: "3%" }}
          >
            Exclusive
          </h1>
          <ul
            className={`text-text2 text-sm sm:text-base font-normal leading-6 ${poppins.className} flex gap-4 lg:gap-8 xl:gap-12 text-nowrap`}
          >
            <li className="hover:underline">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:underline">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="hover:underline">
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="hover:underline">
              <Link href={"/signup"}>Sign Up</Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-row gap-2 lg:gap-6 items-center lg:items-center">
          {/* Search Bar */}
          <div className="relative flex items-center gap-2">
            <input
              type="search"
              placeholder="What are you looking for?"
              className={`placeholder:text-xs placeholder:text-text2 placeholder:opacity-50 placeholder:font-normal leading-[18px] ${poppins.className} pl-5 pr-3 pt-[7px] pb-[12px] rounded bg-secondary md:w-56 w-[243px] h-[38px] focus:shadow-2xl`}
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute md:left-[187px] left-[210px]"
            >
              <path
                d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Icons */}
          <div className="flex gap-2 items-center">
            {pathname === "/wishlist" || pathname === "/cart" ? (
              <Link href={"/wishlist"}>
                <Image
                  src={"/wishlist.png"}
                  alt="wishlist"
                  height={32}
                  width={32}
                />
              </Link>
            ) : (
              <Link href={"/wishlist"}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            )}
            {pathname === "/cart" ? (
              <Link href={"/cart"}>
                <Image
                  src={"/Cart1withbuy.png"}
                  alt="cartwithbuy"
                  width={32}
                  height={32}
                />
              </Link>
            ) : (
              <Link href={"/cart"}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 5H7L10 22H26"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
