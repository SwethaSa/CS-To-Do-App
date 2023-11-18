import React from "react";
import styles from "./items.module.css";

export default function Items({ items }) {
  return (
    <>
      {items.map((val, index) => (
        <div className={styles.textbg}>
          <h3 className={styles.text} key={index}>
            {val}
          </h3>
          <button className={styles.btn}>Delete</button>
        </div>
      ))}
    </>
  );
}
