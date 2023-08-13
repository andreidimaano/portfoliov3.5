import Image from "next/image";
import Link from "next/link";
import styles from "./archive.module.css";

import kobe from "./kobe.gif";

import { archivo, pinyon_script } from "../font";

export default function Works() {
  return (
    <>
      <main className={styles.main}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            gap: "24px",
          }}
        >
          <div
            style={{
              height: "400px",
              position: "relative",
            }}
          >
            <Image
              alt="Me eating great food and throwing out the classic peace sign"
              src={kobe}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <p>I will Implement this one day</p>
            <Link
              target="_blank"
              href="https://github.com/andreidimaano"
              style={{
                color: "#3a86ff",
              }}
            >
              See my Github instead 🤗
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
