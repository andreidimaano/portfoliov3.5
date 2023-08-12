"use client";

import Image from "next/image";
import styles from "./biography.module.css";

import peace from "./peace.JPG";
import { archivo, pinyon_script } from "../font";
import ProfileSvg from "./profile_svg";
import { useEffect } from "react";
import { useMenu } from "../header";

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
        <div>
          <div className={styles.profile}>
            <ProfileSvg />
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <div class={styles.bar_img_intro}>
              <div
                style={{
                  flex: 1,
                }}
              >
                <p className={`${styles.bar_img_text} ${styles.bar_img_top}`}>
                  COMP SCI @
                </p>
                <p className={`${styles.bar_img_text}`}>UC RIVERSIDE</p>
              </div>
              <p
                style={{
                  flex: 2,
                  textAlign: "center",
                }}
                className={`${styles.bar_img_text}`}
              >
                (software engineer)
              </p>
              <div
                style={{
                  textAlign: "end",
                  flex: 1,
                }}
              >
                <p className={`${styles.bar_img_text} ${styles.bar_img_top}`}>
                  BASED IN
                </p>
                <p className={`${styles.bar_img_text}`}>LOS ANGELES</p>
              </div>
            </div>
            <Image
              alt="Me eating great food and throwing out the classic peace sign"
              src={peace}
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
