import { Button } from "@/components/ui/button";
import Image from "next/image";
import styles from "./download-here.module.scss";
import PlayStoreIcon from "../icons/play-store";
import AppStoreIcon from "../icons/app-store";
const DownloadHere = () => {
  return (
    <section className={styles.getStatedWrapper}>
      <div className={styles.getStatedContainer}>
        <div
          className={styles.getStatedBannerImage}
          style={{
            background: `url(${"/images/checkout-app.jpg"})`,
            backgroundSize: "100%",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className={styles.getStatedContentWrapper}>
          <div className={styles.getStatedInfoBlock}>
            <h3 className={styles.title}>Download Today! </h3>
            <p className={styles.description}>
              Well, what are you waiting for? Download the app to experience
              Maxxx level.
            </p>
            <div className={styles.playButton}>
              <Button variant={"primary_outline"} className={styles.button}>
                <AppStoreIcon />
                App Store
              </Button>
              <Button variant={"primary_outline"} className={styles.button}>
                <PlayStoreIcon />
                Play Store
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadHere;
