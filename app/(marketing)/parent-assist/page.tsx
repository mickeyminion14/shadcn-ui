import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import React from "react";

const ParentAssist = () => {
  const heroObj: HeroData = {
    image: "/images/comning-soon.jpg",
    title: "Coming Soon..",
    description: "We are launching new building construction website.",
    // button: {
    //   text: "Meet Our Team",
    //   navigateTo: "#meetourteam",
    // },
  };
  return (
    <div>
      <HeroSection heroData={heroObj} />
    </div>
  );
};

export default ParentAssist;
