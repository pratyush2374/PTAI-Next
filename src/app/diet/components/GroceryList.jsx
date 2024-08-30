import React from "react";
import styles from "./GroceryList.module.css";

const GroceryList = ({ items }) => {
  return (
    <div className={styles.groceryList}>
      <h3>Grocery List:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
