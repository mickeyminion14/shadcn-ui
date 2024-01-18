import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const MarketingPage = () => {
  const categories = [
    "Performance",
    "Mental health",
    "Leadership",
    "Communication",
  ];
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="min-w-full h-[calc(100vh-150px)] relative">
        <video
          className="w-full h-[100%] object-cover absolute"
          preload="auto"
          autoPlay
          muted
          loop
        >
          <source src="/videos/draft.mp4" />
        </video>
        <div className="absolute max-h-[calc(100vh-150px)] bottom-[20%] left-[50%] translate-y-[50%] translate-x-[-50%]">
          <div className="text-white font-bold text-xl sm:text-4xl md:text-6xl text-center">
            Lorem ipsum dolor sit
          </div>
          <div className="text-[#D7D8D9] mt-6 text-sm sm:text-lg md:text-xl font-normal text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est
            felis, sagittis viverra
          </div>
        </div>
      </div>

      <div className="w-full mt-32 md:max-w-screen-2xl">
        <div className=" mx-auto w-full max-w-[calc(100%-284px)]">
          <div className="text-black text-center font-semibold text-xl sm:text-3xl md:text-5xl ">
            Main App Features
          </div>
          <div className="mt-24 flex justify-between">
            <div className="flex flex-col py-[70px] max-w-[400px]">
              <div className="text-black font-bold text-5xl text-left">
                Lorem ipsum dolor sit
              </div>
              <div className="mt-4 font-normal text-black text-xl">
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
                    <div className="text-black font-bold text-4xl">100+</div>
                  </div>
                  <div className="text-black font-semibold text-xl uppercase">
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
                    <div className="text-black font-bold text-4xl">300+</div>
                  </div>
                  <div className="text-black font-semibold text-xl uppercase">
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
              <div className="text-black font-bold text-5xl text-left">
                Lorem ipsum dolor sit
              </div>
              <div className="mt-4 font-normal text-black text-xl">
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
              <div className="text-black font-bold text-5xl text-left">
                Lorem ipsum dolor sit
              </div>
              <div className="mt-4 font-normal text-black text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                est felis, sagittis viverra nulla mattis scelerisque. Eget cras
                integer.
              </div>
              <div className="mt-12 flex flex-col  justify-between">
                {categories.map((category, idx) => (
                  <div
                    className="bg-white mt-2 h-[48px] max-w-[325px] w-full flex items-center justify-between px-4 rounded-2xl"
                    key={idx}
                  >
                    <div>{category}</div>
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
      </div>
    </div>
  );
};

export default MarketingPage;
