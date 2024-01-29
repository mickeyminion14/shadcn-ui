import { Metadata } from "next";
import styles from "./about-us.module.scss";
import { siteConfig } from "@/config/site";
import MeetOurTeam from "./_components/meet-our-team";
import WhoWeAre from "./_components/who-we-are";
import HeroSection from "@/components/hero-section";
import { HeroData } from "@/components/hero-section/hero-section.interface";
import "./_styles/embla.css";
import MaxExperience from "./_components/our-mission";

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
