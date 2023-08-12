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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: "1",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <Link href="/works">
            <RotatingText
              text="WORKS"
              stagger={0.1}
              timing={0.5}
              className={`${archivo.className} rotating-text`}
              style={{
                fontSize: "2rem",
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
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span
            style={{
              fontSize: "3rem",
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
                fontSize: "2rem",
                fontWeight: 500,
              }}
            />
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link href="/archive">
            <RotatingText
              text="ARCHIVE"
              stagger={0.1}
              timing={0.5}
              className={`${archivo.className} rotating-text`}
              style={{
                fontSize: "1.25rem",
                fontWeight: 500,
              }}
            />
          </Link>
          <span
            style={{
              fontSize: "3rem",
              lineHeight: 1,
            }}
            className={pinyon_script.className}
          >
            dimaano
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {" "}
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
                fontSize: "1rem",
                fontWeight: 500,
              }}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
