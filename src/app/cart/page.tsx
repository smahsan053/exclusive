import { BreadCrumb } from "@/components/BreadCrumb";
import { CartTable } from "@/components/CartTable";
import React from "react";

function Cart() {
  return (
    <div>
      <div>
        <BreadCrumb location={["Home", "Cart"]} />
        <CartTable />
      </div>
    </div>
  );
}

export default Cart;
