"use client";
import { inter, poppins } from "@/app/fonts";
import Image from "next/image";
import React, { useState } from "react";
import CategoryCard from "./CategoryCard";

function Category() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 7;
  const cardsToShow = 6;
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
    <CategoryCard
      key={1}
      category="Phones"
      categoryImageLink="/CellPhone.png"
    />,
    <CategoryCard
      key={2}
      category="Computers"
      categoryImageLink="/Computer.png"
    />,
    <CategoryCard
      key={3}
      category="SmartWatch"
      categoryImageLink="/SmartWatch.png"
    />,
    <CategoryCard key={4} category="Camera" categoryImageLink="/camera.png" />,
    <CategoryCard
      key={5}
      category="HeadPhones"
      categoryImageLink="/Headphone.png"
    />,
    <CategoryCard
      key={6}
      category="Gaming"
      categoryImageLink="/CategoryGamepad.png"
    />,
    <CategoryCard
      key={7}
      category="Phones"
      categoryImageLink="/CellPhone.png"
    />,
    <CategoryCard
      key={8}
      category="Computers"
      categoryImageLink="/Computer.png"
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
            Categories
          </div>
        </div>
        <div className="mt-4 flex gap-20">
          <div className="flex justify-between">
            <div
              className={`text-text2 font-semibold text-3xl lg:text-4xl ${inter.className} leading-[48px]`}
              style={{ letterSpacing: "4%" }}
            >
              Browse By category
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
        className="flex lg:gap-8 gap-2 max-w-full"
        style={{
          position: "relative",
          transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          transition: "transform 0.3s ease",
        }}
      >
        {visibleCards}
      </div>
      <div className="relative border-t border-button opacity-30 w-[84%] top-0"></div>
    </div>
  );
}

export default Category;
