import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import React from "react";

const CookiePolicy = () => {
  const heroObj: HeroData = {
    image: "/images/about/1-about_banner.jpg",
    title: "Cookie Policy",
    description: "This page in under development",
  };

  return (
    <div>
      <HeroSection heroData={heroObj} />
    </div>
  );
};

export default CookiePolicy;
