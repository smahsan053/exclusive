// src/app/product/[id]/page.tsx

import { BreadCrumb } from "@/components/BreadCrumb";
import Product from "@/components/Product";
import RelatedItems from "@/components/RelatedItems";

// This component will automatically receive the dynamic `id` parameter
export default function ProductPage({ params }: { params: { id: string } }) {
  // You can directly access the `id` from the `params` object
  const { id } = params;
  interface Item {
    id: string;
    itemName: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    discountedPrice: string;
    rating: number;
    reviews: number;
    availability: string;
  }
  const items: Item[] = [
    {
      id: "1",
      itemName: "Havic HV G-92 Gamepad",
      image1: "/product/gamepad1.png",
      image2: "/product/gamepad2.png",
      image3: "/product/gamepad3.png",
      image4: "/product/gamepad4.png",
      image5: "/product/gamepad5.png",
      discountedPrice: "$192.00",
      rating: 4,
      reviews: 150,
      availability: "In Stock",
    },
    {
      id: "2",
      itemName: "AK-900 Wired Keyboard",
      image1: "/Keyboard.png",
      image2: "/Keyboard.png",
      image3: "/Keyboard.png",
      image4: "/Keyboard.png",
      image5: "/Keyboard.png",
      discountedPrice: "$960.00",
      rating: 4,
      reviews: 75,
      availability: "In Stock",
    },
    {
      id: "3",
      itemName: "IPS LCD Gaming Monitor",
      image1: "/Monitor.png",
      image2: "/Monitor.png",
      image3: "/Monitor.png",
      image4: "/Monitor.png",
      image5: "/Monitor.png",
      discountedPrice: "$370.00",
      rating: 5,
      reviews: 99,
      availability: "In Stock",
    },
    {
      id: "4",
      itemName: "S-Series Comfort Chair",
      image1: "/chair.png",
      image2: "/chair.png",
      image3: "/chair.png",
      image4: "/chair.png",
      image5: "/chair.png",
      discountedPrice: "$375.00",
      rating: 4.5,
      reviews: 99,
      availability: "In Stock",
    },
    {
      id: "5",
      itemName: "The north coat",
      image1: "/coat.png",
      image2: "/coat.png",
      image3: "/coat.png",
      image4: "/coat.png",
      image5: "/coat.png",
      discountedPrice: "$260.00",
      rating: 5,
      reviews: 65,
      availability: "In Stock",
    },
    {
      id: "6",
      itemName: "Gucci duffle bag",
      image1: "/bag.png",
      image2: "/bag.png",
      image3: "/bag.png",
      image4: "/bag.png",
      image5: "/bag.png",
      discountedPrice: "$960.00",
      rating: 4,
      reviews: 65,
      availability: "In Stock",
    },
    {
      id: "7",
      itemName: "RGB liquid CPU Cooler",
      image1: "/gpu.png",
      image2: "/gpu.png",
      image3: "/gpu.png",
      image4: "/gpu.png",
      image5: "/gpu.png",
      discountedPrice: "$1960.00",
      rating: 5,
      reviews: 65,
      availability: "In Stock",
    },
    {
      id: "8",
      itemName: "Small BookSelf",
      image1: "/bookself.png",
      image2: "/bookself.png",
      image3: "/bookself.png",
      image4: "/bookself.png",
      image5: "/bookself.png",
      discountedPrice: "$360.00",
      rating: 4.5,
      reviews: 65,
      availability: "In Stock",
    },
    {
      id: "9",
      itemName: "Breed Dry Dog Food",
      image1: "/dogfood.png",
      image2: "/dogfood.png",
      image3: "/dogfood.png",
      image4: "/dogfood.png",
      image5: "/dogfood.png",
      discountedPrice: "$120.00",
      rating: 3,
      reviews: 35,
      availability: "In Stock",
    },
    {
      id: "10",
      itemName: "CANON EOS DSLR Camera",
      image1: "/canon.png",
      image2: "/canon.png",
      image3: "/canon.png",
      image4: "/canon.png",
      image5: "/canon.png",
      discountedPrice: "$360.00",
      rating: 4,
      reviews: 95,
      availability: "In Stock",
    },
    {
      id: "11",
      itemName: "ASUS FHD Gaming Laptop",
      image1: "/laptop.png",
      image2: "/laptop.png",
      image3: "/laptop.png",
      image4: "/laptop.png",
      image5: "/laptop.png",
      discountedPrice: "$700.00",
      rating: 5,
      reviews: 325,
      availability: "In Stock",
    },
    {
      id: "12",
      itemName: "Curology Product Set",
      image1: "/curology.png",
      image2: "/curology.png",
      image3: "/curology.png",
      image4: "/curology.png",
      image5: "/curology.png",
      discountedPrice: "$500.00",
      rating: 4,
      reviews: 145,
      availability: "In Stock",
    },
    {
      id: "13",
      itemName: "Kids Electric Car",
      image1: "/toycar.png",
      image2: "/toycar.png",
      image3: "/toycar.png",
      image4: "/toycar.png",
      image5: "/toycar.png",
      discountedPrice: "$960.00",
      rating: 5,
      reviews: 65,
      availability: "In Stock",
    },
    {
      id: "14",
      itemName: "Jr. Zoom Soccer Cleats",
      image1: "/soccer.png",
      image2: "/soccer.png",
      image3: "/soccer.png",
      image4: "/soccer.png",
      image5: "/soccer.png",
      discountedPrice: "$1160.00",
      rating: 5,
      reviews: 35,
      availability: "In Stock",
    },
    {
      id: "15",
      itemName: "GP11 Shooter USB Gamepad",
      image1: "/usbgamepad.png",
      image2: "/usbgamepad.png",
      image3: "/usbgamepad.png",
      image4: "/usbgamepad.png",
      image5: "/usbgamepad.png",
      discountedPrice: "$660.00",
      rating: 4,
      reviews: 55,
      availability: "In Stock",
    },
    {
      id: "16",
      itemName: "Quilted Satin Jacket",
      image1: "/jacket.png",
      image2: "/jacket.png",
      image3: "/jacket.png",
      image4: "/jacket.png",
      image5: "/jacket.png",
      discountedPrice: "$660.00",
      rating: 4,
      reviews: 65,
      availability: "In Stock",
    },
  ];
  return (
    <div>
      {items.map((item) =>
        item.id === id ? (
          <div key={item.id} className="flex flex-col gap-14">
            <BreadCrumb location={["Account", "Gaming", item.itemName]} />
            <Product
              image1={item.image1}
              image2={item.image2}
              image3={item.image3}
              image4={item.image4}
              image5={item.image5}
              itemName={item.itemName}
              rating={item.rating}
              reviews={item.reviews}
              availability={item.availability}
              discountedPrice={item.discountedPrice}
            />
          </div>
        ) : (
          ""
        )
      )}
      <RelatedItems />
    </div>
  );
}
