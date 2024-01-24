"use client";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Links from "./_components/links";
import { useRouter } from "next/navigation";
import styles from "./navbar.module.scss";
import ToggleIcon from "./_icons/toggle-icon";
import { useState } from "react";
import CloseIcon from "./_icons/close";
export const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarInrWrapper}>
        <div className="space-x-4 flex items-center justify-between w-full">
          <Logo />

          <div
            className={`${styles.togglableWrapper} ${
              isToggled ? styles.toggledShow : ""
            }`}
          >
            <div className="z-20">
              <Links />
            </div>
            <Button
              onClick={() => router.push("/contact-us")}
              className="bg-[#2D3035] rounded-2xl text-white h-[60px] w-[160px] z-20 text-md"
            >
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
          <button
            type="button"
            onClick={() => setIsToggled(!isToggled)}
            className={styles.toggleIcon}
          >
            {isToggled ? <CloseIcon /> : <ToggleIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};
