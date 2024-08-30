import React from "react";
import styles from "./TipsAndTricks.module.css";

const TipsAndTricks = ({ tips }) => {
  return (
    <div className={styles.tips}>
      <h3>Tips & Tricks:</h3>
      <p>{tips}</p>
    </div>
  );
};

export default TipsAndTricks;
