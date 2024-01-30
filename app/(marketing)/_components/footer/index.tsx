import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import styles from "./footer.module.scss";
import FacebookIcon from "./icons/facebook";
import InstagramIcon from "./icons/instagram";
import YoutubeIcon from "./icons/youtube";
import FooterLinks from "./links";
import Link from "next/link";
import AppStoreIcon from "@/components/icons/app-store";
import PlayStoreIcon from "@/components/icons/play-store";

export const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.mainFooterContainer}>
        <div className={styles.logoAndTextWrapper}>
          <Logo />
          <div className={styles.heroText}>
            TRANSFORM YOUR MIND AND ELEVATE YOUR GAME
          </div>
        </div>
        <div className="mt-24 flex justify-between">
          <div className="text-white">
            <div className={styles.playButton}>
              <Link href={"#"} target="_blank">
                <Button variant={"primary_outline"} className={styles.button}>
                  <AppStoreIcon />
                  App Store
                </Button>
              </Link>

              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.isports.maxxx"
                }
                target="_blank"
              >
                <Button variant={"primary_outline"} className={styles.button}>
                  <PlayStoreIcon />
                  Play Store
                </Button>
              </Link>
            </div>
            {/* <div
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
            </div> */}
            {/* <div className="mt-16">
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
            </div> */}
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
              <Link href={"/player-motivations"} className={styles.footerLinks}>
                Player Motivations
              </Link>
              <Link href={"/parent-assist"} className={styles.footerLinks}>
                Parent Assist
              </Link>
              <Link href={"/recruiter-mode"} className={styles.footerLinks}>
                Recruiter Mode
              </Link>
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
