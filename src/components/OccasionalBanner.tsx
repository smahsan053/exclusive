import { poppins } from "@/app/fonts";
import Image from "next/image";
import React from "react";

function OccasionalBanner() {
  return (
    <div className="relative flex justify-center items-center mt-64 sm:mt-80 lg:mt-44 mx-4 lg:mx-[10%] xl:mx-auto">
      <Image src={"/banner2.png"} alt="banner" width={1200} height={500} />
      <button
        className={`absolute lg:bottom-16 bottom-4 left-5 lg:left-52 lg:w-40 lg:h-14 h-8 lg:px-12 px-6 ${poppins.className} font-medium text-base bg-button1 text-text rounded text-nowrap`}
      >
        View All
      </button>
    </div>
  );
}

export default OccasionalBanner;
