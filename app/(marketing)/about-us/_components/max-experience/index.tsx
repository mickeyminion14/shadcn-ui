"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SettingIcon from "../icons/setting";
import styles from "./our-mission.module.scss";
import Link from "next/link";
import ArrowRight from "../icons/arrow-right";

const slidesData = [
  {
    title: "Experience MAXXX",
    des: "Register your school or program to set an appointment with one of our sales representatives.",
  },
  {
    title: "Our Vision",
    des: "Our Vision is to be a pioneering force, driving positive change and innovation in industry. ",
  },
];

type PropType = {
  slideCount?: number[];
  options?: EmblaOptionsType;
};

const MaxExperience = () => {
  const options: EmblaOptionsType = { axis: "x", loop: true, duration: 60 };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <section className={styles.maxExperience}>
        {/* <Image
          className={styles.maxExperienceBannerImage}
          src={"/images/about/2-about_banner.jpg"}
          alt="hero background image"
          fill
        /> */}
        <video
          className={styles.maxExperienceVideoBanner}
          preload="auto"
          autoPlay
          muted
          loop
        >
          <source src="/videos/max-experience.mp4" />
        </video>
        <div className={styles.maxExperienceWrapper}>
          <div className={styles.maxExperienceSlider}>
            <div className={styles.embla}>
              <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                  {slidesData.map((item, index) => (
                    <div className={styles.embla__slide} key={index}>
                      <div className={styles.sliderWrapper}>
                        <div className={styles.infoBlk}>
                          <Button
                            variant={"primary_outline"}
                            className={styles.buttonIcon}
                          >
                            <SettingIcon />
                          </Button>
                          <h3 className={styles.title}>{item?.title}</h3>
                          <p className={styles.description}>{item?.des}</p>
                          <Link href={"/contact-us"}>
                            <Button
                              variant={"primary_outline"}
                              className={styles.buttonAction}
                            >
                              Connect with us
                              <ArrowRight />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.wwrDosWrapper}>
                <div className={styles.wwrDots}>
                  {scrollSnaps.map((_, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => scrollTo(index)}
                      className={`${styles.wwrDot}  ${
                        index === selectedIndex && styles.wwrDotActive
                      }`}
                    />
                  ))}
                </div>
                <div className={styles.counters}>
                  {("0" + (selectedIndex + 1)).slice(-2)}/
                  {("0" + slidesData?.length).slice(-2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MaxExperience;
