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
        <source src="/videos/draft.mp4" />
      </video>
    </section>
  );
};

export default VideoSection;
