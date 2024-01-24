import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const AppMainFeature = () => {
  const categories = [
    "Performance",
    "Mental health",
    "Leadership",
    "Communication",
  ];
  return (
    <section className="w-full mt-16 mb-24 md:max-w-screen-2xl">
      <div className=" mx-auto w-full max-w-[calc(100%-284px)]">
        <div className="text-white text-center font-semibold text-xl sm:text-3xl md:text-5xl title">
          Main App Features
        </div>
        <div className="mt-24 flex justify-between">
          <div className="flex flex-col py-[70px] max-w-[400px]">
            <div className="text-white font-bold text-5xl text-left">
              Lorem ipsum dolor sit
            </div>
            <div className="mt-4 font-normal text-[#D7D8D9] text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              est felis, sagittis viverra nulla mattis scelerisque. Eget cras
              integer.
            </div>
            <div className="mt-12 flex items-center justify-between">
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
              <Button variant={"primary"} className="h-16 w-[220px]">
                Lorem Ipsum <ArrowRight className="w-6 h-6 ml-4" />
              </Button>
            </div>
          </div>
          <div className="max-w-[100%] max-h-[100%] h-[620px] w-[566px] relative">
            <Image src={"/images/frame1.png"} alt="frame1" fill />
          </div>
        </div>
        <div className="mt-32 flex justify-between">
          <div className="max-w-[100%] max-h-[100%] h-[620px] w-[566px] relative">
            <Image src={"/images/frame2.png"} alt="frame2" fill />
          </div>
          <div className="flex flex-col py-[70px] max-w-[400px]">
            <div className="text-white font-bold text-5xl text-left">
              Lorem ipsum dolor sit
            </div>
            <div className="mt-4 font-normal text-[#D7D8D9] text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              est felis, sagittis viverra nulla mattis scelerisque. Eget cras
              integer.
            </div>

            <div className="mt-12">
              <Button variant={"primary_outline"} className="h-16 w-[220px]">
                Lorem Ipsum <ArrowRight className="w-6 h-6 ml-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-24 flex justify-between">
          <div className="flex flex-col py-[70px] max-w-[400px]">
            <div className="text-white font-bold text-5xl text-left">
              Lorem ipsum dolor sit
            </div>
            <div className="mt-4 font-normal text-[#D7D8D9] text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              est felis, sagittis viverra nulla mattis scelerisque. Eget cras
              integer.
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
              <Button variant={"primary_outline"} className="h-16 w-[220px]">
                Lorem Ipsum <ArrowRight className="w-6 h-6 ml-4" />
              </Button>
            </div>
          </div>
          <div className="max-w-[100%] max-h-[100%] h-[620px] w-[566px] relative">
            <Image src={"/images/frame3.png"} alt="frame3" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppMainFeature;
