"use client";
import styles from "../../about-us.module.scss";
import { Button } from "@/components/ui/button";

import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, PrevButton, NextButton } from "./sliderIcons";
import imageByIndex from "./sliderImages";
import Image from "next/image";
import SettingIcon from "../icons/setting";

const slidesData = [
  {
    title: "Lorem ipsum dolor",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer sagittis viverra nulla mattis scelerisque.",
    img: "/images/about/wwr1.png",
  },
  {
    title: "Lorem ipsum dolor",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer sagittis viverra nulla mattis scelerisque.",
    img: "/images/about/wwr2.png",
  },
  {
    title: "Lorem ipsum dolor",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer sagittis viverra nulla mattis scelerisque.",
    img: "/images/about/wwr3.png",
  },
];

type PropType = {
  slideCount?: number[];
  options?: EmblaOptionsType;
};

const WhoWeAre: React.FC<PropType> = ({ slideCount = 5, options = {} }) => {
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
          <h2 className={styles.whoWeAreTitle}> Who We Are </h2>
          <div className={styles.whoWeAreSliderWrapper}>
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {slidesData.map((item, index) => (
                    <div className="embla__slide" key={index}>
                      {/* <div className="embla__slide__number">
                      <span>{index + 1}</span>
                    </div> */}
                      <div className={styles.sliderWrapper}>
                        <div className={styles.infoBlk}>
                          <Button
                            variant={"primary_outline"}
                            className={styles.button}
                          >
                            <SettingIcon />
                          </Button>
                          <h3 className={styles.title}>{item?.title}</h3>
                          <p className={styles.description}>{item?.des}</p>
                        </div>
                        <div className={styles.infoImage}>
                          <Image fill alt="who we are image" src={item?.img} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="embla__buttons">
                <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
                <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
              </div>
              <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                  <DotButton
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={"embla__dot".concat(
                      index === selectedIndex ? " embla__dot--selected" : ""
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
