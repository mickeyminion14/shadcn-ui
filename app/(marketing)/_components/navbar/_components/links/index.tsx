"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../navbar.module.scss";
const Links = () => {
  const pathname = usePathname();

  const links: { title: string; url: string }[] = [
    { title: "Home", url: "/" },
    { title: "Checkout", url: "/checkout" },
    { title: "Connect", url: "/contact-us" },
  ];
  return (
    <ul className=" hidden sm:flex sm:justify-between md:w-[400px] sm:w-[300px] select-none">
      {links.map((link, idx) => (
        <Link className="h-full" key={idx} href={link.url}>
          <li
            className={
              pathname == link.url
                ? `${styles.navLink} ${styles.navLinkActive} `
                : styles.navLink
            }
          >
            {link.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Links;
