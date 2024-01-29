"use client";
import React from "react";
import styles from "./hero-section.module.scss";
import { Button } from "@/components/ui/button";
import { HeroProps } from "./hero-section.interface";
import Image from "next/image";
import ArrowDownIcon from "../icons/arrow-down";

const HeroSection = (props: HeroProps) => {
  function scrollToTop(target: any) {
    const section = document.querySelector(target);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const { heroData } = props;
  const { image, title, description, button } = heroData;
  return (
    <section className={styles.heroSection}>
      <Image src={image} alt="hero background image" fill />
      <div className={styles.heroSectionWrapper}>
        <div className={styles.heroContentWrap}>
          {title && <h1 className={styles.title}> {heroData?.title}</h1>}
          {description && (
            <p className={styles.description}>{heroData?.description}</p>
          )}
          {button && (
            <Button
              variant={"primary_outline"}
              className={styles.button}
              onClick={scrollToTop.bind(null, button?.navigateTo)}
            >
              {button?.text}
              <ArrowDownIcon />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;