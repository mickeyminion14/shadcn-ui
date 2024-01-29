import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import React from "react";
import styles from "./privacy-policy.module.scss";
import DynamicPage from "@/components/dynamicPage";
const PrivacyPolicy = () => {
  const heroObj: HeroData = {
    image: "/images/privacy-terms.jpg",
    title: "Privacy Policy",
    description: "This page is under development",
  };

  return (
    <div>
      <HeroSection heroData={heroObj} />

      <div className={styles.contactUsWrapper}>
        <DynamicPage />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
