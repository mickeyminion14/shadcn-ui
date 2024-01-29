"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "./meet-our-team.module.scss";
import ArrowLeft from "@/components/icons/arrow-left";
import ArrowRight from "@/components/icons/arrow-right";

const slidesData = [
  {
    title: "Jane Cooper",
    des: "CEO, Co-Founder",
    img: "/images/about/team1.png",
  },
  {
    title: "Wade Warren",
    des: "CEO, Co-Founder",
    img: "/images/about/team2.png",
  },
  {
    title: "Theresa Web",
    des: "CEO, Co-Founder",
    img: "/images/about/team3.png",
  },
  {
    title: "Jane Cooper",
    des: "CEO, Co-Founder",
    img: "/images/about/team1.png",
  },
  {
    title: "Wade Warren",
    des: "CEO, Co-Founder",
    img: "/images/about/team2.png",
  },
  {
    title: "Theresa Web",
    des: "CEO, Co-Founder",
    img: "/images/about/team3.png",
  },
];

const MeetOurTeam = () => {
  const options: EmblaOptionsType = {
    dragFree: true,
    containScroll: "trimSnaps",
  };
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
      <section id="meetourteam" className={styles.meetOurTeam}>
        <div className={styles.meetOurTeamWrapper}>
          <h2 className={styles.meetOurTeamTitle}>
            Meet Our Team
            <div className={styles.embla__buttons}>
              <button
                type="button"
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
                className={styles.embla__button}
              >
                <ArrowLeft />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className={styles.embla__button}
                disabled={nextBtnDisabled}
              >
                <ArrowRight />
              </button>
            </div>
          </h2>

          <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
              <div className={styles.embla__container}>
                {slidesData.map((item, index) => (
                  <div className={styles.embla__slide} key={index}>
                    <div className={styles.sliderWrapper}>
                      <div className={styles.infoImage}>
                        <Image fill alt="who we are image" src={item?.img} />
                        <div className={styles.infoBlk}>
                          <h3 className={styles.title}>{item?.title}</h3>
                          <p className={styles.description}>{item?.des}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className={styles.wwrDots}>
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetOurTeam;
