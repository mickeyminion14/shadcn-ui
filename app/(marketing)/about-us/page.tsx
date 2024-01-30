import { Metadata } from "next";
import styles from "./about-us.module.scss";
import { siteConfig } from "@/config/site";
import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import "./_styles/embla.css";
import WhoWeAre from "@/components/who-we-are";
import MaxExperience from "@/components/max-experience";

export function generateMetadata(): Metadata {
  return {
    title: siteConfig.aboutUs.name,
    description: siteConfig.aboutUs.description,
  };
}

const heroObj: HeroData = {
  image: "/images/about/1-about_banner.jpg",
  title: "Transform Your Mind Elevate Your Game",
  // button: {
  //   text: "Meet Our Team",
  //   navigateTo: "#meetourteam",
  // },
};

const AboutUs = () => {
  return (
    <>
      <div className={styles.aboutWrapper}>
        {/* <HeroSection /> */}
        <HeroSection heroData={heroObj} />

        <WhoWeAre />
        <MaxExperience />
        {/* <MeetOurTeam /> */}
      </div>
    </>
  );
};

export default AboutUs;
