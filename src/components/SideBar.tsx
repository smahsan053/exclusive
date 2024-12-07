import { poppins } from "@/app/fonts";
import React from "react";
function SideBar() {
  return (
    <div
      className={`relative top-10 lg:left-10 xl:left-20 2xl:left-36 flex flex-col gap-4 lg:w-44 xl:w-56 ${poppins.className} font-normal text-base leading-6 text-nowrap`}
    >
      <p className="flex gap-9">
        Woman&apos;s Fashion{" "}
        <span>
          {" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 lg:w-6 -rotate-90"
          >
            <path
              d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
              fill="black"
            />
          </svg>
        </span>
      </p>
      <p className="flex gap-16">
        Men&apos;s Fashion
        <span>
          {" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 lg:w-6 -rotate-90"
          >
            <path
              d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
              fill="black"
            />
          </svg>
        </span>
      </p>
      <p>Electronics</p>
      <p>Home & Lifestyle</p>
      <p>Medicine</p>
      <p>Sports & Outdoor</p>
      <p>Baby&apos;s & Toys</p>
      <p>Groceries & Pets</p>
      <p>Health & Beauty</p>
    </div>
  );
}

export default SideBar;
