import { Metadata } from "next";
import styles from "./about-us.module.scss";
import { siteConfig } from "@/config/site";
import HeroSection from "./_components/hero-section";
import MeetOurTeam from "./_components/meet-our-team";
import WhoWeAre from "./_components/who-we-are";
import OurMission from "./_components/our-mission";
import "./_styles/embla.css";

export function generateMetadata(): Metadata {
  return {
    title: siteConfig.aboutUs.name,
    description: siteConfig.aboutUs.description,
  };
}
const AboutUs = () => {
  return (
    <>
      <div className={styles.aboutWrapper}>
        <HeroSection />
        <WhoWeAre />
        <OurMission />
        <MeetOurTeam />
      </div>
    </>
  );
};

export default AboutUs;
