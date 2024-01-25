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
            <div className="featureBlockTitle text-white font-bold text-5xl text-left">
              A powerful coach & athlete interface
            </div>
            <div className="featureBlockDescription mt-4 font-normal text-[#D7D8D9] text-xl">
              MAXXX enables coaches to track player progress and patterns to
              identify potential problems before they happen.
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
              <div
                style={{ borderLeft: "2px solid #676C75", height: "80%" }}
              ></div>
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
                Lorem Ipsum
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
            <Image src={"/images/frame2.png"} alt="frame2" fill />
          </div>
          <div className="featureTextBlock flex flex-col max-w-[400px]">
            <div className="featureBlockTitle text-white font-bold text-5xl text-left">
              Geared toward mental fitness to reach max potential
            </div>
            <div className="featureBlockDescription mt-4 font-normal text-[#D7D8D9] text-xl">
              Imagine a world where an athlete's mind is their most powerful
              asset. Welcome to that world, welcome to MAXXX Performance.
            </div>

            <div className="mt-12">
              <Button
                variant={"primary_outline"}
                className={styles.buttonAction}
              >
                Lorem Ipsum
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.featureBlock}>
          <div className="featureTextBlock flex flex-col  max-w-[400px]">
            <div className="featureBlockTitle text-white font-bold text-5xl text-left">
              Combines mental and physical training
            </div>
            <div className="featureBlockDescription mt-4 font-normal text-[#D7D8D9] text-xl">
              With MAXXX, athletes will have a mental performance coach and
              trainer in the palm of their hand.
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
                Lorem Ipsum
                <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="featureImageBlock max-w-[100%] max-h-[100%] h-[620px] w-[566px] relative">
            <Image src={"/images/frame3.png"} alt="frame3" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppMainFeature;
