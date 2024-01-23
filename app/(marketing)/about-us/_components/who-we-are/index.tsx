"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SettingIcon from "../icons/setting";
import styles from "./who-we-are.module.scss";

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

const WhoWeAre: React.FC<PropType> = ({
  slideCount = 5,
  options = { axis: "y" },
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
          <h2 className={styles.whoWeAreTitle}> Who We Are </h2>
          <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
              <div className={styles.embla__container}>
                {slidesData.map((item, index) => (
                  <div className={styles.embla__slide} key={index}>
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
                        <div className={styles.counters}>
                          {index + 1}/{slidesData?.length}
                        </div>
                      </div>
                      <div className={styles.infoImage}>
                        <Image fill alt="who we are image" src={item?.img} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
