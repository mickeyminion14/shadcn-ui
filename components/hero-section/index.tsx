"use client";
import React from "react";
import styles from "./hero-section.module.scss";
import { Button } from "@/components/ui/button";
import ArrowDownIcon from "./_icons/arrow-down";
import { HeroProps } from "./hero-section.interface";

const HeroSection = (props: HeroProps) => {
  const { heroData, handleButton } = props;
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSectionWrapper}>
        <div className={styles.heroContentWrap}>
          <h1 className={styles.title}> {heroData?.title}</h1>
          <p className={styles.description}>{heroData?.description}</p>
          <Button
            variant={"primary_outline"}
            className={styles.button}
            onClick={() => handleButton}
          >
            {heroData?.button?.text}
            <ArrowDownIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
