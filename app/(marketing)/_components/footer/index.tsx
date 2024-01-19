import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, MailIcon } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full p-4  bg-transparent h-[500px]">
      <div className="md:max-w-screen-2xl mx-auto  w-full">
        <div className="flex justify-between">
          <Logo />
          <div className="w-full max-w-[564px] text-white text-xl font-light">
            <div>
              Sandow provides personalized fitness & diet solutions through the
              power of AI.
            </div>
            {/* <div className="pt-24">links</div> */}
          </div>
        </div>
        <div className="mt-24 flex justify-between">
          <div className=" text-white">
            <div className="flex justify-between gap-x-2 max-w-[200px]">
              <Button className="h-16 w-16" variant={"primary_outline"}>
                <div className="w-6 h-6 relative">
                  <Image alt="fb" src="/images/fb.png" fill />
                </div>
              </Button>
              <Button className="h-16 w-16" variant={"primary_outline"}>
                <div className="w-6 h-6 relative">
                  <Image alt="fb" src="/images/yt.png" fill />
                </div>
              </Button>
              <Button className="h-16 w-16" variant={"primary_outline"}>
                <div className="w-6 h-6 relative">
                  <Image alt="fb" src="/images/instagram.png" fill />
                </div>
              </Button>
            </div>
            <div className="mt-16">
              <div className="text-white text-sm font-bold">
                Subscribe to newsletter
              </div>
              <div className="w-[300px] mt-2">
                <label className="relative text-white block">
                  <Mail className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3" />
                  <ArrowRight className="w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer" />

                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email here..."
                    className="form-input border bg-[#2D3035] border-none py-3 px-4  placeholder-gray-400 text-white appearance-none w-full block pl-10 focus:outline-none h-14 rounded-2xl"
                  />
                </label>
              </div>
            </div>
            <div className="mt-8">Copyright ©2025, All Rights Reserved</div>
          </div>
          <div className="w-full max-w-[564px] flex justify-between">
            <div className="flex flex-col gap-y-8">
              <div className="text-white text-base uppercase font-bold">
                Main Site Map
              </div>
              <div className="text-white text-sm uppercase font-normal opacity-60 cursor-pointer">
                Home
              </div>
              <div className="text-white text-sm uppercase font-normal opacity-60 cursor-pointer">
                About
              </div>
              <div className="text-white text-sm uppercase font-normal opacity-60 cursor-pointer">
                Checkout
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              <div className="text-white text-base uppercase font-bold">
                App Features
              </div>
              <div className="text-white text-sm uppercase font-normal opacity-60 cursor-pointer">
                Lorem Ipsum
              </div>
              <div className="text-white text-sm uppercase font-normal opacity-60 cursor-pointer">
                Lorem Ipsum
              </div>
              <div className="text-white text-sm uppercase font-normal opacity-60 cursor-pointer">
                Lorem Ipsum
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              <div className="text-white text-base uppercase font-bold">
                Legal
              </div>
              <div className="text-white text-sm uppercase font-normal opacity-60 cursor-pointer">
                Privacy Policy
              </div>
              <div className="text-white text-sm uppercase font-normal opacity-60 cursor-pointer">
                Terms & Conditions
              </div>
              <div className="text-white text-sm uppercase font-normal opacity-60 cursor-pointer">
                Cookie Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
