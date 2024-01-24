import styles from "./loader.module.scss";
const MainLoader = () => {
  return (
    <div className={styles.mainLoader}>
      <div className={styles.linearProgress}>
        <span className={styles.bar}>
          <span className={styles.progress}></span>
        </span>
      </div>
    </div>
  );
};

export default MainLoader;
