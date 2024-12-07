"use client";
import { inter, poppins } from "@/app/fonts";
import Image from "next/image";
import React, { useState } from "react";
import StarRating from "./StarRating";
interface PropType {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  itemName: string;
  rating: number;
  reviews: number;
  availability: string;
  discountedPrice: string;
}
function Product(props: PropType) {
  const [value, setValue] = useState(0);
  return (
    <div className="relative w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-around xl:justify-between gap-4 lg:gap-8 xl:gap-64 mb-12 ">
      <div className="relative flex flex-col lg:flex-row gap-2 xl:gap-8 xl:left-20 2xl:left-40">
        <div className="flex flex-row lg:flex-col gap-1 lg:gap-4 order-2 lg:order-1 ">
          <div className="bg-secondary rounded lg:w-40 lg:h-32 flex justify-center items-center">
            <Image src={props.image1} alt="image1" width={121} height={114} />
          </div>
          <div className="bg-secondary rounded lg:w-40 lg:h-32 flex justify-center items-center">
            <Image src={props.image2} alt="image2" width={121} height={114} />
          </div>
          <div className="bg-secondary rounded lg:w-40 lg:h-32 flex justify-center items-center">
            <Image src={props.image3} alt="image3" width={121} height={114} />
          </div>
          <div className="bg-secondary rounded lg:w-40 lg:h-32 flex justify-center items-center">
            <Image src={props.image4} alt="image4" width={121} height={114} />
          </div>
        </div>
        <div className="bg-secondary rounded xl:w-[500px] xl:h-[560px] flex justify-center items-center order-1 lg:order-2">
          <Image src={props.image5} alt="image5" width={446} height={315} />
        </div>
      </div>
      <div className="relative xl:right-20 2xl:right-40 flex lg:w-[44%] xl:w-[26%] flex-col items-center lg:items-start justify-center gap-2">
        <h1 className={`text-text2 text-2xl font-semibold ${inter.className}`}>
          {props.itemName}
        </h1>
        <div className="flex gap-2 items-center justify-start mb-2 mt-1">
          <StarRating rating={props.rating} />
          <p
            className={`${poppins.className} font-normal text-sm leading-5 text-text2 opacity-50`}
          >
            ({props.reviews} Reviews) |
          </p>{" "}
          <p
            className={`${poppins.className} font-normal text-sm leading-5 text-button1 opacity-60`}
          >
            {props.availability}
          </p>
        </div>
        <h3
          className={`${inter.className} font-normal text-2xl leading-6`}
          style={{ letterSpacing: "3%" }}
        >
          {props.discountedPrice}
        </h3>
        <p
          className={`${poppins.className} font-normal text-sm leading-5 text-text2 mt-3 mb-3 text-center lg:text-start`}
        >
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>
        <div className="border-t border-black border-opacity-50 w-[90%] pb-4"></div>
        <div className="flex flex-row items-center gap-2 mb-3">
          <h3
            className={`${poppins.className} font-normal text-xl text-text2 mr-3`}
            style={{ letterSpacing: "3%" }}
          >
            Colours:{" "}
          </h3>
          <div className="rounded-full w-5 h-5 bg-hoverButton1 border border-black"></div>
          <div className="rounded-full w-5 h-5 bg-hoverButton border border-black"></div>
        </div>
        <div className="flex gap-6 mb-3">
          <h3
            className={`${poppins.className} font-normal text-xl text-text2 mr-3`}
            style={{ letterSpacing: "3%" }}
          >
            Size:{" "}
          </h3>
          <div className="flex gap-4">
            <div
              className={`border border-black border-opacity-50 h-8 w-8 rounded text-text2 text-sm font-medium ${poppins.className} flex justify-center items-center hover:bg-secondary2 cursor-pointer`}
            >
              XS
            </div>
            <div
              className={`border border-black border-opacity-50 h-8 w-8 rounded text-text2 text-sm font-medium ${poppins.className} flex justify-center items-center hover:bg-secondary2 cursor-pointer`}
            >
              S
            </div>
            <div
              className={`border border-black border-opacity-50 h-8 w-8 rounded text-text2 text-sm font-medium ${poppins.className} flex justify-center items-center hover:bg-secondary2 cursor-pointer`}
            >
              M
            </div>
            <div
              className={`border border-black border-opacity-50 h-8 w-8 rounded text-text2 text-sm font-medium ${poppins.className} flex justify-center items-center hover:bg-secondary2 cursor-pointer`}
            >
              L
            </div>
            <div
              className={`border border-black border-opacity-50 h-8 w-8 rounded text-text2 font-medium text-sm ${poppins.className} flex justify-center items-center hover:bg-secondary2 cursor-pointer`}
            >
              XL
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div
            className={`border border-black border-opacity-50 w-40 h-11 rounded text-text2 font-medium text-sm ${poppins.className} flex justify-center items-center cursor-pointer`}
          >
            <button
              className="w-10 border-r h-11 border-black border-opacity-50 hover:bg-secondary2 cursor-pointer"
              onClick={() => {
                setValue(value - 1);
              }}
            >
              -
            </button>
            <input
              type="text"
              className="w-20 bg-transparent border-none focus:outline-none text-center"
              value={value}
              onChange={(e) => {
                setValue(parseInt(e.target.value));
              }}
            />
            <button
              className="w-10 border-l h-11 border-black border-opacity-50 hover:bg-secondary2 cursor-pointer"
              onClick={() => {
                setValue(value + 1);
              }}
            >
              +
            </button>
          </div>
          <div>
            <button
              className={`w-40 h-11 lg:px-12 ${poppins.className} font-medium text-base bg-button2 text-text rounded text-nowrap`}
            >
              Buy Now
            </button>
          </div>
          <div
            className={`border border-black border-opacity-50 h-11 w-11 rounded text-text2 font-medium text-sm ${poppins.className} flex justify-center items-center hover:bg-secondary2 cursor-pointer`}
          >
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
          </div>
        </div>
        <div
          className={`border border-black border-opacity-50 h-44 xl:w-full rounded text-text2 font-medium text-sm ${poppins.className} flex flex-col justify-center lg:items-start gap-6 mt-1`}
        >
          <div className="flex px-4 gap-4">
            <div>
              <Image
                src={"/delivery.png"}
                alt="delivery"
                width={40}
                height={40}
              />
            </div>
            <div className={`${poppins.className}`}>
              <p className="font-medium text-base leading-6">Free Delivery</p>
              <p className="underline font-medium text-xs leading-4">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="border-t w-full border-black border-opacity-50"></div>
          <div className="flex px-4 gap-4">
            <div>
              <Image src={"/return.png"} alt="return" width={40} height={40} />
            </div>
            <div className={`${poppins.className}`}>
              <p className="font-medium text-base leading-6">Return Delivery</p>
              <p className="underline font-medium text-xs leading-4">
                Free 30 Days Delivery Returns. Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
