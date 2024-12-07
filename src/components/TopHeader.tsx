import React from "react";
import { poppins } from "@/app/fonts";
function TopHeader() {
  return (
    <div className="grid grid-cols-10 h-12 bg-button">
      <div className="col-span-10 col-start-1 sm:col-start-2 lg:col-span-6 lg:col-start-4 flex justify-between items-center lg:gap-32 xl:gap-60 mx-8 lg:mx-12">
        <div className="text-text flex items-center gap-2 md:text-xs xl:text-sm text-[9px] text-nowrap">
          <p className={`font-normal leading-5${poppins.className}`}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <p
            className={`font-semibold underline leading-6${poppins.className}`}
          >
            Shop Now
          </p>
        </div>

        <div className="flex items-center lg:gap-2">
          <p
            className={`text-text font-normal leading-5 md:text-xs xl:text-sm text-[9px] ${poppins.className}`}
          >
            English
          </p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 lg:w-6"
          >
            <path
              d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
