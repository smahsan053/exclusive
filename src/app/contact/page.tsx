import { BreadCrumb } from "@/components/BreadCrumb";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb location={["Home", "Contact"]} />
      <div className="flex flex-col sm:flex-row justify-center items-center mr-4 sm:mr-auto mt-12 mb-20">
        <Image src={"/contact1.png"} alt="contact1" width={340} height={457} />
        <Image src={"/contact2.png"} alt="contact2" width={800} height={457} />
      </div>
    </>
  );
}

export default page;
