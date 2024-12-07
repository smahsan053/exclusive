import { inter, poppins } from "@/app/fonts";
import Image from "next/image";
import React from "react";

function Featured() {
  return (
    <div className="relative top-14 left-4 lg:left-32 flex-col gap-10 overflow-hidden flex justify-center pb-12 mb-20">
      <div>
        <div className="flex items-center gap-4">
          <div className="bg-secondary2 w-5 h-10 rounded-[4px]"></div>
          <div
            className={`text-secondary2 font-semibold text-base ${poppins.className} leading-5`}
          >
            Featured
          </div>
        </div>
        <div className="mt-4 flex gap-20">
          <div className="flex justify-between">
            <div>
              <div
                className={`text-text2 font-semibold text-3xl lg:text-4xl ${inter.className} leading-[48px]`}
                style={{ letterSpacing: "4%" }}
              >
                New Arrival
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-36 justify-center items-center lg:-translate-x-32 mr-8 xl:mr-0">
        <div className="flex lg:flex-row flex-col gap-8 lg:w-[700px] xl:w-[1000px]">
          <Image
            src={"/arrival1.png"}
            alt="arrival1"
            width={600}
            height={500}
            className="object-contain"
          />
          <Image
            src={"/arrival2.png"}
            alt="arrival2"
            width={600}
            height={500}
            className="object-contain"
          />
        </div>
        <Image
          src={"/services.png"}
          alt="services"
          width={800}
          height={300}
          className="object-scale-down"
        />
      </div>
    </div>
  );
}

export default Featured;
