import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import React from "react";

const CookiePolicy = () => {
  const heroObj: HeroData = {
    image: "/images/contact-us_banner.jpg",
    title: "Cookie Policy",
    description: "This page is under development",
  };

  return (
    <div>
      <HeroSection heroData={heroObj} />
    </div>
  );
};

export default CookiePolicy;
