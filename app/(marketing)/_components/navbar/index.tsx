import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Links from "./_components/links";

export const Navbar = () => {
  return (
    <div className="w-full h-[80px] p-6 bg-transparent flex items-center fixed top-0 left-0 z-10">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div className="space-x-4 flex items-center justify-between w-full">
          <Logo />
          <div className="z-20">
            <Links />
          </div>
          <Button className="bg-[#2D3035] rounded-2xl text-white h-[60px] w-[160px] z-20 text-md">
            <Image
              className="mr-2"
              width={20}
              height={20}
              alt="email"
              src={"/images/email.png"}
            />
            Contact US
          </Button>
        </div>
      </div>
      <div
        className="absolute inset-0 "
        style={{
          background:
            "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, #000 49.77%, rgba(0, 0, 0, 0.00) 100%)",
        }}
      />
    </div>
  );
};
