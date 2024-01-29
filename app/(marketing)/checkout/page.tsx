import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import CheckoutForm from "./_components/checkout-form";
import DownloadHere from "@/components/download-here";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function generateMetadata(): Metadata {
  return {
    title: siteConfig.checkout.name,
    description: siteConfig.checkout.description,
  };
}

const Checkout = () => {
  const heroObj: HeroData = {
    image: "/images/checkoubanner.jpg",
    title: "Transform Your MIND Elevate Your GAME",
    button: {
      text: "Fill The From Below",
      navigateTo: "#checkoutform",
    },
  };

  return (
    <div className="contactUsWrapper">
      <HeroSection heroData={heroObj} />
      {/* <LocationMap /> */}
      <CheckoutForm />
      <DownloadHere />
    </div>
  );
};

export default Checkout;
