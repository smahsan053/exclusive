"use client";
import { inter, poppins } from "@/app/fonts";
import React, { useState } from "react";
import Card from "./Card";
import Image from "next/image";

function Products() {
  const totalCards = 12;
  const cardsToShow = 8;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalCards - cardsToShow
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalCards - cardsToShow ? prevIndex + 1 : 0
    );
  };
  const cards = [
    <Card
      key={1}
      id={9}
      itemImageLink="/dogfood.png"
      itemName="Breed Dry Dog Food"
      discountedPrice="$120"
      rating={3}
      reviews={35}
      heart={true}
      eye={true}
    />,
    <Card
      key={2}
      id={10}
      itemImageLink="/canon.png"
      itemName="CANON EOS DSLR Camera"
      discountedPrice="$360"
      rating={4}
      reviews={95}
      heart={true}
      eye={true}
    />,
    <Card
      key={3}
      id={11}
      itemImageLink="/laptop.png"
      itemName="ASUS FHD Gaming Laptop"
      discountedPrice="$700"
      rating={5}
      reviews={325}
      heart={true}
      eye={true}
    />,
    <Card
      key={4}
      id={12}
      itemImageLink="/curology.png"
      itemName="Curology Product Set "
      discountedPrice="$500"
      rating={4}
      reviews={145}
      heart={true}
      eye={true}
    />,
    <Card
      key={5}
      id={13}
      itemImageLink="/toycar.png"
      itemName="Kids Electric Car "
      discountedPrice="$960"
      rating={5}
      reviews={65}
      heart={true}
      eye={true}
      new={true}
    />,
    <Card
      key={6}
      id={14}
      itemImageLink="/soccer.png"
      itemName="Jr. Zoom Soccer Cleats "
      discountedPrice="$1160"
      rating={5}
      reviews={35}
      heart={true}
      eye={true}
    />,
    <Card
      key={7}
      id={15}
      itemImageLink="/usbgamepad.png"
      itemName="GP11 Shooter USB Gamepad "
      discountedPrice="$660"
      rating={4}
      reviews={55}
      heart={true}
      eye={true}
      new={true}
    />,
    <Card
      key={8}
      id={16}
      itemImageLink="/jacket.png"
      itemName="Quilted Satin Jacket "
      discountedPrice="$660"
      rating={4}
      reviews={65}
      heart={true}
      eye={true}
    />,
    <Card
      key={9}
      id={4}
      itemImageLink="/chair.png"
      itemName="S-Series Comfort Chair"
      actualPrice="$400"
      discountedPrice="$375"
      rating={4.5}
      reviews={99}
      heart={true}
      eye={true}
      discount={"-25"}
    />,
    <Card
      key={10}
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
      key={11}
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
      key={12}
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
  ];

  const visibleCards = cards.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className="relative top-14 left-4 lg:left-32 flex-col gap-10 overflow-hidden flex justify-center pb-12">
      <div>
        <div className="flex items-center gap-4">
          <div className="bg-secondary2 w-5 h-10 rounded-[4px]"></div>
          <div
            className={`text-secondary2 font-semibold text-base ${poppins.className} leading-5`}
          >
            Our Products
          </div>
        </div>
        <div className="mt-4 flex gap-20">
          <div className="flex justify-between">
            <div>
              <div
                className={`text-text2 font-semibold text-3xl lg:text-4xl ${inter.className} leading-[48px]`}
                style={{ letterSpacing: "4%" }}
              >
                Explore Our Products
              </div>
            </div>
            <div>
              <div className="absolute flex w-28 gap-2 lg:right-72 right-8">
                <Image
                  src="/Arrow.png"
                  alt="leftarrow"
                  width={46}
                  height={46}
                  onClick={handleLeftClick}
                  className="cursor-pointer"
                />
                <Image
                  src="/Arrow.png"
                  alt="rightarrow"
                  width={46}
                  height={46}
                  className="rotate-180 cursor-pointer"
                  onClick={handleRightClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center md:mr-10 lg:mr-48 xl:mr-64">
        {visibleCards}
      </div>

      <div className="relative left-1/2 lg:-translate-x-56 -translate-x-32 rounded">
        <button
          className={`w-56 h-14 ${poppins.className} font-medium text-base bg-button2 text-text rounded`}
        >
          View All Products
        </button>
      </div>
    </div>
  );
}

export default Products;
