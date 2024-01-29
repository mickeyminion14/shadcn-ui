import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import React from "react";

export function generateMetadata(): Metadata {
  return {
    title: siteConfig.playerMotivations.name,
    description: siteConfig.playerMotivations.description,
  };
}
const PlayerMotivations = () => {
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

export default PlayerMotivations;
