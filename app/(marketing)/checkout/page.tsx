import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import WhoWeAre from "@/components/who-we-are";
import MaxExperience from "@/components/max-experience";

export function generateMetadata(): Metadata {
  return {
    title: siteConfig.checkout.name,
    description: siteConfig.checkout.description,
  };
}

const Checkout = () => {
  const heroObj: HeroData = {
    image: "/images/about/1-about_banner.jpg",
    title: "Transform Your Mind Elevate Your Game",
    // button: {
    //   text: "Meet Our Team",
    //   navigateTo: "#meetourteam",
    // },
  };

  return (
    <div className="contactUsWrapper">
      <HeroSection heroData={heroObj} />
      <WhoWeAre />
      <MaxExperience />
      {/* <LocationMap /> */}
      {/* <CheckoutForm />
      <DownloadHere /> */}
    </div>
  );
};

export default Checkout;
