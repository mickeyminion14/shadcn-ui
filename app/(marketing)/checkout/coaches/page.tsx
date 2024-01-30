import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import CheckoutForm from "@/components/checkout-form";

export function generateMetadata(): Metadata {
  return {
    title: siteConfig.coaches.name,
    description: siteConfig.coaches.description,
  };
}

const Coaches = () => {
  const heroObj: HeroData = {
    image: "/images/coaches-banner.jpg",
    title: "Coaches",
    description: "Help us customize your experience",
    button: {
      text: "Back To Checkout Options",
      navigateTo: "/checkout",
      link: true,
    },
  };

  return (
    <div className="contactUsWrapper">
      <HeroSection heroData={heroObj} />
      <CheckoutForm />
    </div>
  );
};

export default Coaches;
