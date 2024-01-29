import { Button } from "@/components/ui/button";
import Image from "next/image";
import styles from "./get-started.module.scss";
import AppStoreIcon from "./_icons/app-store";
import PlayStoreIcon from "./_icons/play-store";
const GetStarted = () => {
  return (
    <section className={styles.getStatedWrapper}>
      <div className={styles.getStatedContainer}>
        <div
          className={styles.getStatedBannerImage}
          style={{
            background: `url(${"/images/frame4.png"})`,
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

export default GetStarted;
