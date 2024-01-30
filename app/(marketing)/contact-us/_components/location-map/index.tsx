"use client";
import Image from "next/image";
import styles from "./map.module.scss";
import MapIcon from "./_icons/mapicon";
import { MouseEventHandler } from "react";

const LocationMap = () => {
  const showMap = (lat: any, lng: any) => {
    var url = "https://maps.google.com/?q=" + lat + "," + lng;
    window.open(url);
  };

  return (
    <section
      className={styles.mapWrapper}
      onClick={() => showMap(29.743874, -95.426011)}
    >
      <div className={styles.imgBlock}>
        <Image src={"/images/map-bg.png"} alt="map" fill />
      </div>
      <div className={styles.addressBlock}>
        <div className={styles.icon}>
          <MapIcon />
        </div>
        <p className={styles.address}>Headquarters: Houston, TX</p>
      </div>
    </section>
  );
};

export default LocationMap;
