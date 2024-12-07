"use client";
import { inter, poppins } from "@/app/fonts";
import React, { useState } from "react";
import CountdownTimer from "./CountDownTimer";
import Card from "./Card";
import Image from "next/image";

function FlashSale() {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 4);
  const targetDate = currentDate.toISOString();

  const totalCards = 6;
  const cardsToShow = 5;

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

  // Cards to display (slice the array based on current index)
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
      key={5}
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
      key={6}
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
      key={7}
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
    <div className="relative top-64 sm:top-80 md:top-[350px] lg:top-[140px] left-4 lg:left-32 flex-col gap-10 overflow-hidden flex justify-center pb-12">
      <div>
        <div className="flex items-center gap-4">
          <div className="bg-secondary2 w-5 h-10 rounded-[4px]"></div>
          <div
            className={`text-secondary2 font-semibold text-base ${poppins.className} leading-5`}
          >
            Todays
          </div>
        </div>
        <div className="mt-4 flex gap-20">
          <div className="flex justify-between">
            <div>
              <div
                className={`text-text2 font-semibold text-4xl ${inter.className} leading-[48px]`}
                style={{ letterSpacing: "4%" }}
              >
                Flash Sales
              </div>
              <div className="flex items-center justify-center">
                <CountdownTimer targetDate={targetDate} />
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

      <div
        className="flex gap-2 lg:gap-12 xl:gap-20 max-w-full"
        style={{
          position: "relative",
          transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          transition: "transform 0.3s ease",
        }}
      >
        {visibleCards}
      </div>
      <div className="relative left-1/2 lg:-translate-x-56 -translate-x-32 rounded">
        <button
          className={`w-56 h-14 ${poppins.className} font-medium text-base bg-button2 text-text rounded`}
        >
          View All Products
        </button>
      </div>
      <div className="relative border-t border-button opacity-30 w-[84%] top-0"></div>
    </div>
  );
}

export default FlashSale;
