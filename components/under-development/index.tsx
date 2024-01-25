import React from "react";
import styles from "./under-development.module.scss";
import Image from "next/image";

const UnderDevelopment = () => {
  return (
    <section className={styles.underDevelopment}>
      <div className={styles.underDevelopmentContainer}>
        <img
          src={
            "https://h2o-digital.com/wp-content/uploads/2015/09/websites-why-you-should-never-use-under-construction-pages.jpg"
          }
          alt="asdfasfd"
        />
      </div>
    </section>
  );
};

export default UnderDevelopment;
