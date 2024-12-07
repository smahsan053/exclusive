import { BreadCrumb } from "@/components/BreadCrumb";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb location={["Home", "Sign up"]} />

      <div className="mr-4 sm:mr-auto mt-12 mb-20">
        <Image src={"/signup.png"} alt="signup" width={1305} height={781} />
      </div>
    </>
  );
}

export default page;
