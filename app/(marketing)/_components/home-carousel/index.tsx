"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function HomeCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleSlideChange = (index: number) => {
    setCurrent(index + 1);
    api.scrollTo(index);
  };

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        className="w-full max-w-xs"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        <div className="flex justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              className={cn(
                "h-10 w-10 bg-slate-400",
                current - 1 === index && "bg-red-800"
              )}
              onClick={() => handleSlideChange(index)}
              key={index}
            >
              {/* {index + 1} */}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
