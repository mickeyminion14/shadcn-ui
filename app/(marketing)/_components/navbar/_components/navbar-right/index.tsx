"use client";
import React, { useState } from "react";
import styles from "../../navbar.module.scss";
import Links from "../links";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CloseIcon from "../../_icons/close";
import ToggleIcon from "../../_icons/toggle-icon";

const NavbarRight = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <div
        className={`${styles.togglableWrapper} ${
          isToggled ? styles.toggledShow : ""
        }`}
      >
        <div className="z-20">
          <Links />
        </div>
        <Link href={"/contact-us"}>
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
        </Link>
      </div>
      <button
        type="button"
        onClick={() => setIsToggled(!isToggled)}
        className={styles.toggleIcon}
      >
        {isToggled ? <CloseIcon /> : <ToggleIcon />}
      </button>
    </>
  );
};

export default NavbarRight;
