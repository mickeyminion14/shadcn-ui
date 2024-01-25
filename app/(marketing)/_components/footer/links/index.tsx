"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "../footer.module.scss";

const FooterLinks = () => {
  const pathname = usePathname();

  const links: { title: string; url: string }[] = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about-us" },
    { title: "Checkout", url: "/checkout" },
  ];
  return (
    <>
      {" "}
      {links.map((link, idx) => (
        <Link key={idx} href={link.url}>
          <div
            className={
              pathname == link.url
                ? `${styles.footerLinks} ${styles.footerLinkActive} `
                : styles.footerLinks
            }
          >
            {link.title}
          </div>
        </Link>
      ))}
    </>
  );
};

export default FooterLinks;
