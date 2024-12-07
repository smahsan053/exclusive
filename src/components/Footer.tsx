import { inter, poppins } from "@/app/fonts";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-button text-text py-10">
      <div
        className={`container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 ${poppins.className} font-normal text-base leading-6 lg:mx-32`}
      >
        {/* Column 1 */}
        <div>
          <h1 className={`text-2xl font-bold mb-4 ${inter.className}`}>
            Exclusive
          </h1>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 pl-3 rounded-md text-primary placeholder:opacity-50 bg-transparent border border-text"
            />
            <span className="absolute top-2.5 left-44 text-gray-800 cursor-pointer">
              <Image src="/send.png" alt="send" width={24} height={24} className="min-w-6" />
            </span>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h2
            className={`text-xl font-medium mb-4 leading-7 ${poppins.className}`}
          >
            Support
          </h2>
          <p className="mb-2">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="mb-2">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Column 3 */}
        <div>
          <h2
            className={`text-xl font-medium mb-4 leading-7 ${poppins.className}`}
          >
            Account
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Login/Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2
            className={`text-xl font-medium mb-4 leading-7 ${poppins.className}`}
          >
            Quick Link
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h2
            className={`text-xl font-medium mb-4 leading-7 ${poppins.className}`}
          >
            Download App
          </h2>
          <p className="text-xs font-medium text-text opacity-70">
            Save $3 with App New User Only{" "}
          </p>
          <div className="mb-4">
            <Image
              src="/download.png"
              alt="Download on App Store"
              width={128}
              height={40}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/download2.png"
              alt="Get it on Google Play"
              width={128}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 text-center pt-6">
        <p className="text-sm text-primary opacity-25">
          <span className="mr-2">&copy;</span>
          Copyright Rimel 2022. All rights reserved.
        </p>
      </div>
    </div>
  );
}
