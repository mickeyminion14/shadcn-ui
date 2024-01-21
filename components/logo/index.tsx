import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" className="z-20">
      <div className="hover:opacity-75 transition  gap-x-2 w-[180px] h-[40px] relative">
        <Image
          src="/images/logo.png"
          alt="Logo"
          className="w-full h-full"
          fill
        />
      </div>
    </Link>
  );
};
