import { Metadata } from "next";
import styles from "./about-us.module.scss";
import { siteConfig } from "@/config/site";

export function generateMetadata(): Metadata {
  return {
    title: siteConfig.aboutUs.name,
    description: siteConfig.aboutUs.description,
  };
}
const AboutUs = () => {
  return <div className={styles.title}>About us</div>;
};

export default AboutUs;
