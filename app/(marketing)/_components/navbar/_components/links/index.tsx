"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
  const pathname = usePathname();

  const links: { title: string; url: string }[] = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about-us" },
    { title: "Checkout", url: "/checkout" },
  ];
  return (
    <ul className=" hidden sm:flex sm:justify-between md:w-[400px] sm:w-[300px] select-none">
      {links.map((link, idx) => (
        <Link className="h-full" key={idx} href={link.url}>
          <li
            className={cn(
              "text-white text-xl font-[400]",
              pathname == link.url && "active"
            )}
          >
            {link.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Links;
