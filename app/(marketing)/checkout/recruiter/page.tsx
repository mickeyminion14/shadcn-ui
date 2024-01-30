import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import CheckoutForm from "@/components/checkout-form";

export function generateMetadata(): Metadata {
  return {
    title: siteConfig.recruiter.name,
    description: siteConfig.recruiter.description,
  };
}

const Recruiter = () => {
  const heroObj: HeroData = {
    image: "/images/recruiters-banner.jpg",
    title: "Recruiters",
    description: "Help us customize your experience",
    button: {
      text: "Back To Checkout Options",
      navigateTo: "/checkout",
      link: true,
    },
  };

  const defaultFormValue = {
    role: "RECRUITER",
  };

  return (
    <div className="contactUsWrapper">
      <HeroSection heroData={heroObj} />
      <CheckoutForm defaultValue={defaultFormValue} />
    </div>
  );
};

export default Recruiter;
