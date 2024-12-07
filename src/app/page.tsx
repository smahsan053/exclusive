import BestSelling from "@/components/BestSelling";
import Category from "@/components/Category";
import Featured from "@/components/Featured";
import FlashSale from "@/components/FlashSale";
import Hero from "@/components/Hero";
import OccasionalBanner from "@/components/OccasionalBanner";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <FlashSale />
      <Category />
      <BestSelling />
      <OccasionalBanner />
      <Products />
      <Featured />
    </>
  );
}
