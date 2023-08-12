"use client";

import Image from "next/image";
import styles from "./page.module.css";

import { archivo, pinyon_script } from "./font";

import japan from "../images/japan.jpg";
import versaille from "../images/versaille.jpg";

import { RotatingText } from "rotating-text";
import "rotating-text/dist/index.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.menu_card}>
        <div className={styles.menu_card_item}>
          <Link href="/works">
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
              fontSize: "clamp(2.5rem, 4.75vw, 4.75vw)",
              lineHeight: 1,
            }}
            className={pinyon_script.className}
          >
            andrei
          </span>
          <Link href="/biography">
            <RotatingText
              text="BIOGRAPHY"
              stagger={0.1}
              timing={0.5}
              className="rotating-text"
              style={{
                fontSize: "clamp(1rem, 5vw, 5vw)",
                fontWeight: 500,
              }}
            />
          </Link>
        </div>
        <div className={styles.menu_card_item}>
          <Link href="/archive">
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
            target="_blank"
            href="https://drive.google.com/file/d/1zWv-SvIjuuBI5WuH1pOVTdAM_cOdjqo2/view?usp=sharing"
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
