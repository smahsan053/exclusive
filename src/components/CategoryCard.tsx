import { poppins } from "@/app/fonts";
import Image from "next/image";
import React from "react";
interface PropType {
  category: string;
  categoryImageLink: string;
}
function CategoryCard(props: PropType) {
  return (
    <div
      className={`group min-w-24 lg:w-44 h-36 border border-black border-opacity-30 flex justify-center items-center flex-col hover:bg-secondary2 hover:text-text cursor-pointer`}
    >
      <Image
        src={props.categoryImageLink}
        alt="cellphone"
        width={56}
        height={56}
        className="group-hover:invert"
      />
      <p className={`${poppins.className} font-normal text-base leading-6`}>
        {props.category}
      </p>
    </div>
  );
}

export default CategoryCard;
