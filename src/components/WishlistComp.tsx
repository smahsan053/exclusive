import { poppins } from "@/app/fonts";
import React from "react";
import Card from "./Card";

function WishlistComp() {
  const cards = [
    <Card
      key={1}
      id={6}
      itemImageLink="/bag.png"
      itemName="Gucci duffle bag"
      actualPrice="$1160"
      discountedPrice="$960"
      trash={true}
      discount="-35"
    />,
    <Card
      key={2}
      id={7}
      itemImageLink="/gpu.png"
      itemName="RGB liquid CPU Cooler"
      discountedPrice="$1960"
      trash={true}
    />,
    <Card
      key={3}
      id={15}
      itemImageLink="/usbgamepad.png"
      itemName="GP11 Shooter USB Gamepad "
      discountedPrice="$550"
      trash={true}
    />,
    <Card
      key={4}
      id={16}
      itemImageLink="/jacket.png"
      itemName="Quilted Satin Jacket "
      discountedPrice="$750"
      trash={true}
    />,
  ];

  return (
    <div className="flex flex-col gap-14 lg:mx-40 sm:mx-20 mx-10">
      <div className="flex justify-between items-center mt-16">
        <div
          className={`text-text2 font-normal text-xl ${poppins.className} leading-6`}
        >
          Wishlist (4){" "}
        </div>

        <div className="">
          <button
            className={`px-12 py-4 lg:px-12 ${poppins.className} font-medium text-base bg-none border border-black border-opacity-50 text-text2 rounded text-nowrap`}
          >
            Move All To Bag{" "}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-20">
        {cards}
      </div>
    </div>
  );
}

export default WishlistComp;
