import Image from "next/image";
import React from "react";
import SideBar from "./SideBar";

function Hero() {
  return (
    <div className="relative flex">
      <div className="hidden lg:block">
        <SideBar />
        <div className="absolute border-l border-button opacity-30 h-96 lg:left-64 xl:left-72 2xl:left-[368px] top-0"></div>
      </div>
      <div className="absolute lg:left-[26%] 2xl:left-[413px] top-4 md:top-6 lg:top-10 lg:w-[750px] xl:w-[892px] 2xl:w-[960px] mx-4 md:mx-10 lg:mx-auto">
        <Image
          src={"/Banner.png"}
          alt="banner"
          width={960}
          height={344}
          className="lg:h-auto max-h-[300px] lg:max-h-[400px] min-h-[200px]"
        />
        <svg
          width="110"
          height="14"
          viewBox="0 0 110 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative bottom-8 left-1/2 -translate-x-14"
        >
          <circle opacity="0.5" cx="6" cy="7" r="6" fill="white" />
          <circle opacity="0.5" cx="30" cy="7" r="6" fill="white" />
          <circle cx="55" cy="7" r="5" fill="#DB4444" />
          <circle cx="55" cy="7" r="6" stroke="white" strokeWidth="2" />
          <circle opacity="0.5" cx="80" cy="7" r="6" fill="white" />
          <circle opacity="0.5" cx="104" cy="7" r="6" fill="white" />
        </svg>
      </div>
    </div>
  );
}

export default Hero;
