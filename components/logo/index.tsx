import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import localFont from "next/font/local";

export const Logo = () => {
  return (
    <Link href="/" className="z-20">
      <div className="hover:opacity-75 transition items-center gap-x-2">
        <Image src="/images/logo.png" alt="Logo" height={40} width={180} />
      </div>
    </Link>
  );
};
