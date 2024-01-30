"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SettingIcon from "../icons/setting";
import styles from "./who-we-are.module.scss";
import ArrowRight from "../icons/arrow-right";
import Link from "next/link";

const slidesData = [
  {
    title: "Select Athletes",
    des: "Select your specific usage to receive all of the customized tools that will unlock your MAXXX Experience.  See your specialized features.",
    img: "/images/about/wwr1.png",
    button: {
      text: "Select Athlete",
      link: "/checkout/athletes",
    },
  },
  {
    title: "Select Coaches",
    des: "Select your specific usage to receive all of the customized tools that will unlock your MAXXX Experience. See your specialized features.",
    img: "/images/about/wwr2.png",
    button: {
      text: "Select Coaches",
      link: "/checkout/coaches",
    },
  },
  {
    title: "Select Recruiter",
    des: "Select your specific usage to receive all of the customized tools that will unlock your MAXXX Experience. See your specialized features. ",
    img: "/images/about/wwr3.png",
    button: {
      text: "Select Recruiter",
      link: "/checkout/recruiter",
    },
  },
];

type PropType = {
  slideCount?: number[];
  options?: EmblaOptionsType;
};

const WhoWeAre: React.FC<PropType> = ({
  slideCount = 5,
  options = {
    axis: "y",
    loop: true,
    duration: 25,
  },
}) => {
  const slides = Array.from(Array(slideCount).keys());
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
      <section className={styles.whoWeAre}>
        <div className={styles.whoWeAreWrapper}>
          <h2 className={styles.whoWeAreTitle}> Download Here </h2>
          {/* <div className={styles.embla}> */}
          {/* <div className={styles.embla__viewport} ref={emblaRef}> */}
          <div className={styles.embla__container}>
            {slidesData.map((item, index) => (
              // <div className={styles.embla__slide} >
              <div className={styles.sliderWrapper} key={index}>
                <div className={styles.infoImage}>
                  <Image fill alt="who we are image" src={item?.img} />
                </div>

                <div className={styles.infoBlk}>
                  <Button
                    variant={"primary_outline"}
                    className={styles.buttonIcon}
                  >
                    <SettingIcon />
                  </Button>
                  <h3 className={styles.title}>{item?.title}</h3>
                  <p className={styles.description}>{item?.des}</p>
                  {/* <div className={styles.counters}>
                    {("0" + (selectedIndex + 1)).slice(-2)}/
                    {("0" + slidesData?.length).slice(-2)}
                  </div> */}
                  <Link href={item?.button?.link || "/"}>
                    <Button
                      variant={"primary_outline"}
                      className={styles.buttonAction}
                    >
                      {item?.button?.text} <ArrowRight />
                    </Button>
                  </Link>
                </div>
              </div>
              // </div>
            ))}
          </div>
          {/* </div> */}

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
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default WhoWeAre;
