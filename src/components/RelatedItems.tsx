import { poppins } from "@/app/fonts";
import React from "react";
import Card from "./Card";

function RelatedItems() {
  const cards = [
    <Card
      key={1}
      id={1}
      itemImageLink="/gamepad.png"
      itemName="HAVIT HV-G92 Gamepad"
      actualPrice="$160"
      discountedPrice="$120"
      rating={5}
      reviews={88}
      heart={true}
      eye={true}
      discount={"-40"}
    />,
    <Card
      key={2}
      id={2}
      itemImageLink="/Keyboard.png"
      itemName="AK-900 Wired Keyboard"
      actualPrice="$1100"
      discountedPrice="$960"
      rating={4}
      reviews={75}
      heart={true}
      eye={true}
      discount={"-35"}
    />,
    <Card
      key={3}
      id={3}
      itemImageLink="/Monitor.png"
      itemName="IPS LCD Gaming Monitor"
      actualPrice="$400"
      discountedPrice="$370"
      rating={5}
      reviews={99}
      heart={true}
      eye={true}
      discount={"-30"}
    />,
    <Card
      key={4}
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
  ];

  return (
    <div className="flex flex-col gap-14 lg:mx-40 sm:mx-20 mx-10 mb-16">
      <div className="flex justify-between items-center mt-16">
        <div
          className={`text-secondary2 font-semibold text-base ${poppins.className} leading-6 flex flex-row items-center justify-center gap-2`}
        >
          <div className="bg-secondary2 w-5 h-10 rounded-[4px]"></div>
          Related Item{" "}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-20">
        {cards}
      </div>
    </div>
  );
}

export default RelatedItems;
