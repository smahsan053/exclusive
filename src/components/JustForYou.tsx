import { poppins } from "@/app/fonts";
import React from "react";
import Card from "./Card";

function JustForYou() {
  const cards = [
    <Card
      key={1}
      id={11}
      itemImageLink="/laptop.png"
      itemName="ASUS FHD Gaming Laptop"
      actualPrice="$1160"
      discountedPrice="$960"
      discount="-35"
      rating={5}
      reviews={65}
      eye={true}
    />,
    <Card
      key={2}
      id={3}
      itemImageLink="/Monitor.png"
      itemName="IPS LCD Gaming Monitor"
      actualPrice=" "
      discountedPrice="$1160"
      rating={5}
      reviews={99}
      eye={true}
    />,
    <Card
      key={3}
      id={1}
      itemImageLink="/gamepad.png"
      itemName="HAVIT HV-G92 Gamepad"
      actualPrice=" "
      discountedPrice="$560"
      rating={5}
      reviews={65}
      eye={true}
      new={true}
    />,
    <Card
      key={4}
      id={2}
      itemImageLink="/Keyboard.png"
      itemName="AK-900 Wired Keyboard"
      actualPrice=" "
      discountedPrice="$200"
      rating={5}
      reviews={65}
      eye={true}
    />,
  ];

  return (
    <div className="flex flex-col gap-14 lg:mx-40 sm:mx-20 mx-10">
      <div className="flex justify-between items-center mt-16">
        <div
          className={`text-text2 font-normal text-xl ${poppins.className} leading-6 flex flex-row items-center justify-center gap-2`}
        >
          <div className="bg-secondary2 w-5 h-10 rounded-[4px]"></div>
          Just For You{" "}
        </div>

        <div className="">
          <button
            className={`px-12 py-4 lg:px-12 ${poppins.className} font-medium text-base bg-none border border-black border-opacity-50 text-text2 rounded text-nowrap`}
          >
            See All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-20">
        {cards}
      </div>
    </div>
  );
}

export default JustForYou;