import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import React from "react";

const Legal = () => {
  const heroObj: HeroData = {
    image: "/images/about/1-about_banner.jpg",
    title: "Legal",
    description: "This page in under development",
  };

  return (
    <div>
      <HeroSection heroData={heroObj} />
    </div>
  );
};

export default Legal;
