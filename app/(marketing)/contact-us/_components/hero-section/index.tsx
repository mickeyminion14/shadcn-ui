import React from "react";
import styles from "./hero-section.module.scss";
import { Button } from "@/components/ui/button";
import ArrowDownIcon from "../../_icons/arrow-down";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSectionWrapper}>
        <div className={styles.heroContentWrap}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est
            felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
          </p>
          <Button variant={"primary_outline"} className={styles.button}>
            Fill The From Below
            <ArrowDownIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
