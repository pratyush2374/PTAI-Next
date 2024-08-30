// TomorrowGroceryList.js

import React from "react";
import styles from "./TomorrowGroceryList.module.css";

const TomorrowGroceryList = ({ items }) => {
  return (
    <div className={styles.tomorrowGroceryList}>
      <h3>Tomorrow's Grocery List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TomorrowGroceryList;
