"use client";
import { inter, poppins } from "@/app/fonts";
import React from "react";
import Card from "./Card";

function BestSelling() {
  const cards = [
    <Card
      key={1}
      id={5}
      itemImageLink="/coat.png"
      itemName="The north coat"
      actualPrice="$360"
      discountedPrice="$260"
      rating={5}
      reviews={65}
      heart={true}
      eye={true}
    />,
    <Card
      key={2}
      id={6}
      itemImageLink="/bag.png"
      itemName="Gucci duffle bag"
      actualPrice="$1160"
      discountedPrice="$960"
      rating={4}
      reviews={65}
      heart={true}
      eye={true}
    />,
    <Card
      key={3}
      id={7}
      itemImageLink="/gpu.png"
      itemName="RGB liquid CPU Cooler"
      actualPrice="$1970"
      discountedPrice="$1960"
      rating={5}
      reviews={65}
      heart={true}
      eye={true}
    />,
    <Card
      key={4}
      id={8}
      itemImageLink="/bookself.png"
      itemName="Small BookSelf"
      actualPrice=""
      discountedPrice="$360"
      rating={4.5}
      reviews={65}
      heart={true}
      eye={true}
    />,
  ];

  return (
    <div className="relative top-64 sm:top-80 md:top-[350px] lg:top-[140px] left-4 lg:left-32  flex-col gap-10 overflow-hidden flex justify-center pb-12">
      <div>
        <div className="flex items-center gap-4">
          <div className="bg-secondary2 w-5 h-10 rounded-[4px]"></div>
          <div
            className={`text-secondary2 font-semibold text-base ${poppins.className} leading-5`}
          >
            This Month
          </div>
        </div>
        <div className="mt-4 flex gap-20">
          <div className="flex justify-between">
            <div>
              <div
                className={`text-text2 font-semibold text-3xl lg:text-4xl ${inter.className} leading-[48px]`}
                style={{ letterSpacing: "4%" }}
              >
                Best Selling Products
              </div>
            </div>
            <div>
              <div className="absolute flex w-28 gap-2 lg:right-80 right-8">
                <button
                  className={`w-40 lg:h-14 h-8 lg:px-12 ${poppins.className} font-medium text-base bg-button2 text-text rounded text-nowrap`}
                >
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center md:mr-10 lg:mr-48 xl:mr-64 lg:gap-16 ">
        {cards}
      </div>
    </div>
  );
}

export default BestSelling;
