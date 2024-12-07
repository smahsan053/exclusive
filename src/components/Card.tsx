import { poppins } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import StarRating from "./StarRating";
import Link from "next/link";
interface PropType {
  id: number;
  itemImageLink: string;
  itemName: string;
  actualPrice?: string;
  discountedPrice: string;
  rating?: number;
  reviews?: number;
  heart?: boolean;
  eye?: boolean;
  discount?: string;
  trash?: boolean;
  new?: boolean;
}
// className="absolute top-4 right-4 space-y-2"
function Card(props: PropType) {
  return (
    <Link href={`/product/${props.id}`}>
      <div className="cursor-pointer">
        <div className="group relative h-32 p-4 lg:p-0 lg:h-64 lg:w-60 bg-secondary rounded flex justify-center items-center">
          {(props.heart || props.eye) && (
            <div
              className={`absolute flex ${
                props.discount || props.new
                  ? "justify-between left-3 right-3"
                  : "right-3"
              } top-3 font-normal text-xs ${poppins.className}`}
            >
              {props.discount ? (
                <div>
                  <div className="bg-secondary2 px-3 py-1 rounded text-text">
                    {props.discount}%
                  </div>
                </div>
              ) : props.new ? (
                <div>
                  <div className="bg-button1 px-3 py-1 rounded text-text">
                    New
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="space-y-3">
                {props.heart && (
                  <Image
                    src={"/heart.png"}
                    alt="heart"
                    width={34}
                    height={34}
                    className="cursor-pointer"
                  />
                )}
                {props.eye && (
                  <Image
                    src={"/eye.png"}
                    alt="eye"
                    width={34}
                    height={34}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
          )}
          {props.trash && (
            <div
              className={`absolute flex ${
                props.discount || props.new
                  ? "justify-between left-3 right-3"
                  : "right-3"
              } top-3 font-normal text-xs ${poppins.className}`}
            >
              {props.discount ? (
                <div>
                  <div className="bg-secondary2 px-3 py-1 rounded text-text">
                    {props.discount}%
                  </div>
                </div>
              ) : props.new ? (
                <div>
                  <div className="bg-button1 px-3 py-1 rounded text-text">
                    New
                  </div>
                </div>
              ) : (
                ""
              )}
              <div>
                <Image
                  src={"/delete.png"}
                  alt="heart"
                  width={34}
                  height={34}
                  className="cursor-pointer"
                />
              </div>
            </div>
          )}
          <div className="flex justify-center items-center">
            <Image
              src={props.itemImageLink}
              alt={`${props.itemName?.split(" ").join("").toLowerCase()}`}
              width={172}
              height={152}
              className="object-scale-down lg:h-auto h-28"
            />
          </div>
          <div
            className={`absolute bottom-0 rounded-b h-10 bg-black w-full opacity-0 group-hover:opacity-100 text-text flex justify-center items-center font-medium text-base ${poppins.className}`}
          >
            Add To Cart
          </div>
        </div>
        <div
          className={`flex justify-start flex-col gap-2 ${poppins.className}`}
        >
          <p className="font-medium text-base leading-6 text-text2">
            {props.itemName}
          </p>
          <div
            className={`flex ${
              props.actualPrice ? "flex-col gap-2" : "flex-row items-center"
            }`}
          >
            <div className="font-medium text-base leading-6 flex gap-3">
              <span className="text-secondary2">{props.discountedPrice}</span>
              <span className="text-text2 opacity-50 line-through">
                {props.actualPrice ? props.actualPrice : ""}
              </span>
            </div>
            {props.rating && props.reviews && (
              <div className="flex flex-row gap-2">
                <StarRating rating={props.rating} />
                <span className="text-text2 opacity-50 font-semibold text-sm leading-5">
                  ({props.reviews})
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
