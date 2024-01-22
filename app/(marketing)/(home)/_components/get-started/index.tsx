import { Button } from "@/components/ui/button";
import Image from "next/image";

const GetStarted = () => {
  return (
    <section className="bg-[#2A2C74] h-[20vh] lg:h-[40vh] xl:h-[70vh] w-full rounded-2xl flex relative">
      <div
        className="w-full  h-full relative  max-w-[60%]"
        style={{
          background: `url(${"/images/frame4.png"})`,
          backgroundSize: "100%",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <Image
      alt="frame4"
      className="h-auto"
      fill
      objectFit="contain"
      objectPosition="bottom"
      src={"/images/frame4.png"}
    /> */}
      </div>
      <div className="max-w-[40%] w-full absolute left-[50%] top-[50%]  translate-y-[-50%]">
        <div className="flex flex-col max-w-[430px]">
          <div className="text-white text-5xl font-bold">
            Get Started Now, For Free!
          </div>
          <div className="text-white mt-6 font-normal text-xl">
            Well, what are you waiting for? Download our app to experience Maxxx
            level.
          </div>
          <div className="mt-12 flex justify-between">
            <Button
              variant={"primary_outline"}
              className="h-[64px] w-[190px] text-white"
            >
              <div className="h-6 w-6 relative mr-4">
                <Image fill alt="ios icon" src={"/images/ios.png"} />
              </div>
              App Store
            </Button>
            <Button
              variant={"primary_outline"}
              className="h-[64px] w-[190px] text-white"
            >
              <div className="h-6 w-6 relative mr-4">
                <Image fill alt="ios icon" src={"/images/android.png"} />
              </div>
              Play Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
