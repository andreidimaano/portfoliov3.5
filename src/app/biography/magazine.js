import Image from "next/image";
import styles from "./biography.module.css";

import { playfair } from "../font";
import peace from "./images/peace.jpg";
export default function Magazine() {
  return (
    <div>
      <div className={`${styles.profile} ${playfair.className}`}>
        <p
          style={{
            fontSize: "clamp(115px, 22vw ,188.625px)",
          }}
          className={styles.profile_svg}
        >
          PROFILE
        </p>
      </div>
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
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <Image
          alt="Me eating great food and throwing out the classic peace sign"
          src={peace}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <span
        style={{
          fontSize: "0.8rem",
          verticalAlign: "top",
          width: "60px",
        }}
      >
        (introduction)
      </span>
      <p>
        Welcome to my profile. I&apos;m Andrei Dimaano, nice to meet you. My
        name is pronounced AWN-dray dih-mah-no or aan-dih-ray-ee di-mah-no. The
        name&apos;s russian, but I am 100% filipino. You can thank my dad&apos;s
        love for tennis player Andrei Medvedev for the name. Feel free to get to
        know me a bit more or admire the great photos my friends took of me. If
        you want to know more about my personal life, check my instagram or meet
        me in person 😉
      </p>
    </div>
  );
}
