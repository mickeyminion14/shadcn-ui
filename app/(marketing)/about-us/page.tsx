import { Metadata } from "next";
import styles from "./about-us.module.scss";
import { siteConfig } from "@/config/site";
import MeetOurTeam from "./_components/meet-our-team";
import WhoWeAre from "./_components/who-we-are";
import OurMission from "./_components/our-mission";
import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import "./_styles/embla.css";

export function generateMetadata(): Metadata {
  return {
    title: siteConfig.aboutUs.name,
    description: siteConfig.aboutUs.description,
  };
}

const heroObj: HeroData = {
  image: "/images/about/1-about_banner.jpg",
  title: "Transform Your Mind Elevate Your Game",
  button: {
    text: "Fill The From Below",
    navigateTo: "#meet-our-team",
  },
};

const AboutUs = () => {
  return (
    <>
      <div className={styles.aboutWrapper}>
        {/* <HeroSection /> */}
        <HeroSection heroData={heroObj} />

        <WhoWeAre />
        <OurMission />
        <MeetOurTeam />
      </div>
    </>
  );
};

export default AboutUs;
