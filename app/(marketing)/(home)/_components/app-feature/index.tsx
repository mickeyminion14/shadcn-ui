import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import styles from "./app-feature.module.scss";
import ArrowRight from "./_icons/arrow-right";
const AppMainFeature = () => {
  const categories = [
    "Performance",
    "Mental health",
    "Leadership",
    "Communication",
  ];
  return (
    <section className={styles.featureWrapper}>
      <div className={styles.featureWrapperContainer}>
        <div className={styles.featureTitle}>WELCOME TO MAXXX</div>
        <div className={styles.featureBlock}>
          <div className="featureTextBlock flex flex-col max-w-[400px]">
            <div className="featureBlockTitle text-white font-bold text-3xl text-left">
              The new competitive advantage in sports
            </div>
            <div className="featureBlockDescription mt-4 font-normal text-[#D7D8D9] text-xl">
              Mental fitness for athletes, unlock your full potential because
              every athlete is unique.
            </div>
            <div className="countInfoBlk mt-12 flex items-center justify-between">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Image
                    className="mr-2"
                    src={"/images/coach-icon.png"}
                    width={24}
                    height={24}
                    alt="coach icon"
                  />
                  <div className="text-white font-bold text-4xl">100+</div>
                </div>
                <div className="text-white font-semibold text-xl uppercase">
                  Coaches
                </div>
              </div>
              <div className={styles.borderBetween}></div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Image
                    className="mr-2"
                    src={"/images/player-icon.png"}
                    width={24}
                    height={24}
                    alt="player icon"
                  />
                  <div className="text-white font-bold text-4xl">300+</div>
                </div>
                <div className="text-white font-semibold text-xl uppercase">
                  Players
                </div>
              </div>
            </div>
            <div className="mt-12">
              <Button
                variant={"primary_outline"}
                className={styles.buttonAction}
              >
                Know More
                <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="featureImageBlock max-w-[100%] max-h-[100%] h-[620px] w-[566px] relative">
            <Image src={"/images/frame1.png"} alt="frame1" fill />
          </div>
        </div>

        <div className={styles.featureBlock}>
          <div className="featureImageBlock max-w-[100%] max-h-[100%] h-[620px] w-[566px] relative">
            <Image src={"/images/frame3.png"} alt="frame3" fill />
          </div>

          <div className="featureTextBlock flex flex-col  max-w-[400px]">
            <div className="featureBlockTitle text-white font-bold text-3xl text-left">
              A mental trainer & performance coach in your hand
            </div>
            <div className="featureBlockDescription mt-4 font-normal text-[#D7D8D9] text-xl">
              Tips and workouts in key mental fitness areas. Maxxx meter gauges
              player progress. Maxxx helps you reach peak performance!
            </div>
            <div className="mt-12 flex flex-col  justify-between">
              {categories.map((category, idx) => (
                <div
                  className="bg-[#2D3035] mt-2 h-[48px] max-w-[325px] w-full flex items-center justify-between px-4 rounded-2xl"
                  key={idx}
                >
                  <div className="text-white">{category}</div>
                  <div>
                    <Image
                      alt="check"
                      src={"/images/check.png"}
                      height={24}
                      width={24}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Button
                variant={"primary_outline"}
                className={styles.buttonAction}
              >
                Try Out
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.featureBlock}>
          <div className="featureTextBlock flex flex-col max-w-[400px]">
            <div className="featureBlockTitle text-white font-bold text-3xl text-left">
              A proactive tool to enhance coaching capabilities
            </div>
            <div className="featureBlockDescription mt-4 font-normal text-[#D7D8D9] text-xl">
              Assist coaches in addressing mental health challenges. Streamlines
              monitoring and prioritizes player safety and well being.
            </div>

            <div className="mt-12">
              <Button
                variant={"primary_outline"}
                className={styles.buttonAction}
              >
                Try Out
                <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="featureImageBlock max-w-[100%] max-h-[100%] h-[620px] w-[566px] relative">
            <Image src={"/images/frame2.png"} alt="frame2" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppMainFeature;
