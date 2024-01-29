import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import ScrollAnimation from "../_components/scroll-animation";
import VideoSection from "./_components/video";
import AppMainFeature from "./_components/app-feature";
import GetStarted from "../../../components/get-started";
// import LocomotiveScroll from "locomotive-scroll";
export function generateMetadata(): Metadata {
  return {
    title: siteConfig.home.name,
    description: siteConfig.home.description,
  };
}
const MarketingPage = () => {
  // const scroll = new LocomotiveScroll();
  return (
    <div className="flex items-center justify-center flex-col">
      <VideoSection />

      {/* <ScrollAnimation /> */}

      <AppMainFeature />

      <GetStarted />
    </div>
  );
};

export default MarketingPage;
