// components/LineWithDot.js
import React from "react";
import styles from "../../styles/heroSection.module.css";

export default function DotLine({ axis = "y", reverse = false, containerStyle={minWidth: "210px"} }) {
  return (
    <div
      className={`
        ${styles.wrapper}
        ${axis === "x" ? styles.row : styles.column}
        ${reverse ? styles.reverse : ""}
      `}
      style={containerStyle}
    >
      <div className={styles.dot}></div>
      <div
        className={`
          ${styles.line}
          ${axis === "x" ? styles.horizontal : styles.vertical}
        `}
      ></div>
    </div>
  );
}
