import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import React from "react";

const TermAndConditions = () => {
  const heroObj: HeroData = {
    image: "/images/privacy-terms.jpg",
    title: "Terms & Conditions",
    description: "This page is under development",
  };

  return (
    <div>
      <HeroSection heroData={heroObj} />
    </div>
  );
};

export default TermAndConditions;
