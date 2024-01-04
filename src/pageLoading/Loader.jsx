import React from "react";
import styles from "./loader.module.scss";
const Loader = () => {
  return (
    <div className={styles["loader_container"]}>
      <div className={styles["avatar"]}>
        <img src="./MedicalLogo.svg" alt="Global Medical Translation logo" />
      </div>
      <div className={styles["shadow"]}></div>
    </div>
  );
};

export default Loader;
