import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import WhoWeAre from "@/components/who-we-are";
import MaxExperience from "@/components/max-experience";
import CheckoutForm from "@/components/checkout-form";

export function generateMetadata(): Metadata {
  return {
    title: siteConfig.athletes.name,
    description: siteConfig.athletes.description,
  };
}

const Athletes = () => {
  const heroObj: HeroData = {
    image: "/images/athlete-banner.jpg",
    title: "Athletes",
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

export default Athletes;
