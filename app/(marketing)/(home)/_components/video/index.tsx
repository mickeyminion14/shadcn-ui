import styles from "./herohome.module.scss";
const VideoSection = () => {
  return (
    <section className={styles.homeHeroSection}>
      <video
        className={styles.homeHeroVideo}
        preload="auto"
        autoPlay
        muted
        loop
      >
        <source src="https://media.maxxxperformance.com/isport/MAXXX+APP-VIDEO-2.mp4" />
      </video>
    </section>
  );
};

export default VideoSection;
