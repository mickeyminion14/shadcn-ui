import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import React from "react";

const RecruitorMode = () => {
  const heroObj: HeroData = {
    image: "/images/coming-soon.jpg",
    title: "Coming Soon..",
  };
  return (
    <div>
      <HeroSection heroData={heroObj} />
    </div>
  );
};

export default RecruitorMode;
