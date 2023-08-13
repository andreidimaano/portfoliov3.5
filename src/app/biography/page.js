"use client";

import styles from "./biography.module.css";
import WorkBlurb from "./workblurb";

import Magazine from "./magazine";
import SchoolBlurb from "./schoolblurb";

export default function Works() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles.biography}>
        <Magazine />
        <WorkBlurb />
        <SchoolBlurb />
      </div>
    </div>
  );
}
