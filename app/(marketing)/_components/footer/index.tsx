import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import styles from "./footer.module.scss";
import FacebookIcon from "./icons/facebook";
import InstagramIcon from "./icons/instagram";
import YoutubeIcon from "./icons/youtube";
import ArrowRight from "./icons/arrow-right";
import FooterLinks from "./links";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.mainFooterContainer}>
        <div className="flex justify-between">
          <Logo />
          <div className="w-full max-w-[860px] text-white text-xl font-light">
            <div className={styles.heroText}>
              TRANSFORM YOUR MIND AND ELEVATE YOUR GAME
            </div>
            {/* <div className="pt-24">links</div> */}
          </div>
        </div>
        <div className="mt-24 flex justify-between">
          <div className="text-white">
            <div
              className={`${styles.socialmedia} flex justify-between  max-w-[200px]`}
            >
              <Button className="h-16 w-16" variant={"primary_outline"}>
                <div className=" w-6 h-6 relative">
                  <FacebookIcon />
                </div>
              </Button>
              <Button className="h-16 w-16" variant={"primary_outline"}>
                <div className="w-6 h-6 relative">
                  <InstagramIcon />
                </div>
              </Button>
              <Button className="h-16 w-16" variant={"primary_outline"}>
                <div className="w-6 h-6 relative">
                  <YoutubeIcon />
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
                  <button type="button" className={styles.subscribeBtn}>
                    <ArrowRight />
                  </button>
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
            <div className="mt-8">
              Copyright ©{new Date().getFullYear()}, All Rights Reserved
            </div>
          </div>
          <div className={styles.footerLinkWrap}>
            <div className={styles.footerLinkWrapInr}>
              <div className={styles.footerLinkHeading}>Main SiteMap</div>
              <FooterLinks />
            </div>
            <div className={styles.footerLinkWrapInr}>
              <div className={styles.footerLinkHeading}>App Features</div>
              <div className={styles.footerLinks}>Player Motivations</div>
              <div className={styles.footerLinks}>Parent Assist</div>
              <div className={styles.footerLinks}>Recruiter Mode</div>
            </div>
            <div className={styles.footerLinkWrapInr}>
              <Link href={"/legal"} className={styles.footerLinkHeading}>
                Legal
              </Link>
              <Link href={"/privacy-policy"} className={styles.footerLinks}>
                Privacy Policy
              </Link>
              <Link
                href={"/terms-and-conditions"}
                className={styles.footerLinks}
              >
                Terms & Conditions
              </Link>
              {/* <Link href={"/cookie-policy"} className={styles.footerLinks}>
                Cookie Policy
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
