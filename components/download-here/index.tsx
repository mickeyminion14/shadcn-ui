import { Button } from "@/components/ui/button";
import Image from "next/image";
import styles from "./download-here.module.scss";
import PlayStoreIcon from "../icons/play-store";
import AppStoreIcon from "../icons/app-store";
const DownloadHere = () => {
  return (
    <section className={styles.getStatedWrapper}>
      <div
        className={styles.getStatedBannerImage}
        style={{
          backgroundImage: `url(${"/images/checkout-app.jpg"})`,
        }}
      ></div>

      <div className={styles.getStatedContainer}>
        <div className={styles.getStatedContentWrapper}>
          <div className={styles.getStatedInfoBlock}>
            <h3 className={styles.title}>Download Today! </h3>
            <p className={styles.description}>
              Well, what are you waiting for? Download the app to experience
              Maxxx level.
            </p>
            <div className={styles.countInfoBlock}>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Image
                    className="mr-2"
                    src={"/images/coach-icon.png"}
                    width={24}
                    height={24}
                    alt="coach icon"
                  />
                  <div className={styles.count}>100+</div>
                </div>
                <div className={styles.name}>Coaches</div>
              </div>
              <div className={styles.borderBetween}></div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Image
                    className="mr-2"
                    src={"/images/player-icon.png"}
                    width={24}
                    height={24}
                    alt="player icon"
                  />
                  <div className={styles.count}>300+</div>
                </div>
                <div className={styles.name}>Players</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadHere;
