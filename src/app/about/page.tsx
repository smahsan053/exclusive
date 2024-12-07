import { BreadCrumb } from "@/components/BreadCrumb";
import Image from "next/image";
import React from "react";
import { inter, poppins } from "../fonts";

function page() {
  return (
    <>
      <BreadCrumb location={["Home", "About"]} />
      <div className="mb-20 mt-12 flex flex-col justify-center items-center gap-44 mx-4">
        <div className="sm:ml-36 flex flex-col sm:flex-row sm:justify-between items-center gap-36">
          <div className="sm:w-[525px]">
            <h1
              className={`${inter.className} font-semibold text-6xl leading-[64px]`}
              style={{ letterSpacing: "6%" }}
            >
              Our Story
            </h1>
            <div
              className={`${poppins.className} font-normal text-base leading-7 text-text2`}
            >
              <p className="mb-8">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={"/SideImage.png"}
              alt="sideimage"
              width={705}
              height={609}
            />
          </div>
        </div>
        <div>
          <Image src={"/about1.png"} alt="about1" width={1170} height={230} />
        </div>
        <div>
          <Image src={"/about2.png"} alt="about2" width={1170} height={564} />
        </div>
        <div>
          <Image
            src={"/services.png"}
            alt="services"
            width={943}
            height={161}
          />
        </div>
      </div>
    </>
  );
}

export default page;
