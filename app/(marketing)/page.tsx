import Link from "next/link";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { textFont } from "@/lib/fonts";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HomeCarousel from "./_components/home-carousel";
const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          textFont.className
        )}
      >
        <div className=" mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-4 rounded-md  w-fit">
          Work forward.
        </div>
      </div>
      <div
        className={cn(
          "text-small md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate, manage projects and reach new productivity peaks. From high
        rises to the new home office, the way your team works is unique -
        accomplish it all with Taskify.
      </div>
      <Button className="mt-6" size={"lg"} asChild>
        <Link href="/login">Get Taskify for free</Link>
      </Button>
      <div className="mt-10">
        <HomeCarousel />
      </div>
    </div>
  );
};

export default MarketingPage;
