"use client";

import Image from "next/image";
import styles from "./page.module.css";

import { archivo, pinyon_script } from "./font";

import japan from "../images/japan.jpg";
import versaille from "../images/versaille.jpg";

import { RotatingText } from "rotating-text";
import "rotating-text/dist/index.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const handleMouseEnter = (id) => {
    let menu_items = document.getElementsByClassName("menu-link");
    for (let menu_item of menu_items) {
      menu_item.classList.remove(styles.link);
    }
    document.getElementById(id).classList.add(styles.link);
  };

  const handleFocusChange = (e) => {
    if (Array.from(e.target.classList).includes("menu-link")) {
      let menu_items = document.getElementsByClassName("menu-link");
      for (let menu_item of menu_items) {
        menu_item.classList.remove(styles.link);
      }
      e.target.classList.add(styles.link);
    }
  };

  useEffect(() => {
    document.addEventListener("focus", handleFocusChange, true);

    return () => {
      document.removeEventListener("focus", handleFocusChange, true);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.menu_card}>
        <div className={styles.menu_card_item}>
          <Link
            className={`${styles.link} menu-link`}
            href="/works"
            id="works_home"
            onMouseEnter={() => {
              handleMouseEnter("works_home");
            }}
          >
            <RotatingText
              text="WORKS"
              stagger={0.1}
              timing={0.5}
              className={`${archivo.className} rotating-text`}
              style={{
                fontSize: "clamp(3rem, 6vw, 6vw)",
                fontWeight: 500,
              }}
            />
          </Link>
          <Image
            src={versaille}
            height={60}
            width={200}
            alt="picture of me at chateau de versaille"
          />
        </div>
        <div className={styles.menu_card_item}>
          <span
            style={{
              fontSize: "clamp(2.5rem, 5vw, 5vw)",
              lineHeight: 1,
            }}
            className={pinyon_script.className}
          >
            andrei
          </span>
          <Link
            id="bio_home"
            className="menu-link"
            href="/biography"
            onMouseEnter={() => {
              handleMouseEnter("bio_home");
            }}
          >
            <RotatingText
              text="BIOGRAPHY"
              stagger={0.1}
              timing={0.5}
              className="rotating-text"
              style={{
                fontSize: "clamp(1rem, 4vw, 4vw)",
                fontWeight: 500,
              }}
            />
          </Link>
        </div>
        <div className={styles.menu_card_item}>
          <Link
            id="archive_home"
            className="menu-link"
            href="/archive"
            onMouseEnter={() => {
              handleMouseEnter("archive_home");
            }}
          >
            <RotatingText
              text="ARCHIVE"
              stagger={0.1}
              timing={0.5}
              className={`${archivo.className} rotating-text`}
              style={{
                fontSize: "clamp(1rem, 3vw, 3vw)",
                fontWeight: 500,
              }}
            />
          </Link>
          <span
            style={{
              fontSize: "clamp(2.5rem, 4.75vw, 4.75vw)",
              lineHeight: 1,
            }}
            className={pinyon_script.className}
          >
            dimaano
          </span>
        </div>
        <div className={styles.menu_card_item}>
          <Image
            src={japan}
            height={60}
            width={200}
            alt="picture of me at the fushimi inari taisha shrines"
          />
          <Link
            id="resume_home"
            className="menu-link"
            target="_blank"
            href="https://drive.google.com/file/d/1zWv-SvIjuuBI5WuH1pOVTdAM_cOdjqo2/view?usp=sharing"
            onMouseEnter={() => {
              handleMouseEnter("resume_home");
            }}
          >
            <RotatingText
              text="RESUME"
              stagger={0.1}
              timing={0.5}
              className={`${archivo.className} rotating-text`}
              style={{
                fontSize: "clamp(1rem, 4.5vw, 4.5vw)",
                fontWeight: 500,
              }}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
