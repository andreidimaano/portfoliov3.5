"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./works.module.css";

import ig from "./images/ig.jpg";
import iu from "./images/iu.png";
import md from "./images/md.png";
import { archivo } from "../font";

export default function Works() {
  return (
    <main className={styles.main}>
      <div
        style={{
          width: "100%",
          minHeight: "100%",
          padding: "2rem",
          maxWidth: "750px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <p
            className={archivo.className}
            style={{
              fontSize: "6rem",
              fontWeight: 500,
            }}
          >
            WORKS
          </p>
          <p>(migration in progress)</p>
        </div>
        <div className={styles.grid_wrapper}>
          <div className={styles.grid_container}>
            <div
              className={styles.grid_section}
              style={{
                gridColumn: "span 12",
              }}
            >
              <div
                style={{
                  gridColumn: "span 7",
                }}
              >
                <div className={styles.grid_img}>
                  <Image
                    alt="Another pic of me making a peace sign, this time in front of the IG office"
                    src={iu}
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  gridColumn: "8 / 13",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginLeft: "10px",
                }}
              >
                <p
                  className={archivo.className}
                  style={{
                    fontWeight: 500,
                    fontSize: "2rem",
                  }}
                >
                  Definitely Not Bruno Mars
                </p>
                <p
                  style={{
                    fontSize: "clamp(12px, 2vw, 16px)",
                  }}
                >
                  Implemented CycleGAN - a deep generative network used for
                  voice conversion - using PyTorch to create a deepfake of an
                  english-speaking male singer (Bruno Mars) to a korean-speaking
                  female singer (IU).
                  <br />
                  <br />
                  I researched methods to improve CycleGAN using data
                  augmentations.
                  <br />
                  <br />
                  I created a data pipeline that preprocesses audio waveforms
                  into spectrograms using Librosa, trains and tests the model,
                  and creates data visualizations in React (see left photo).
                  <br />
                  <br />
                  I reduced training time and memory footprint of the model by
                  50% by reducing CPU load during training time.
                  <br />
                  <br />
                  <Link
                    href="https://youtu.be/Qr3h2hnhEmI"
                    style={{
                      color: "#3a86ff",
                      margin: 0,
                      fontSize: "clamp(12px, 2vw, 16px)",
                    }}
                  >
                    See the Presentation here
                  </Link>
                  <br />
                  <Link
                    href="https://youtu.be/Qr3h2hnhEmI"
                    style={{
                      color: "#3a86ff",
                      fontSize: "clamp(12px, 2vw, 16px)",
                    }}
                  >
                    See the Results here
                  </Link>
                </p>
              </div>
            </div>
            <div
              className={styles.grid_section}
              style={{
                gridColumn: "span 12",
              }}
            >
              <div
                style={{
                  gridColumn: "1/4",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginRight: "10px",
                }}
              >
                <p
                  className={archivo.className}
                  style={{
                    fontWeight: 500,
                    fontSize: "2rem",
                    textOverflow: "wrap",
                  }}
                >
                  Meta
                </p>
                <p
                  style={{
                    fontSize: "clamp(12px, 2vw, 16px)",
                  }}
                >
                  I worked at Meta in Summer 2023.
                  <br />
                  <br />
                  I was on the Instagram Reels Recommendation Reliability Team.
                  <br />
                  <br />I made DevX tools for my fellow engineers and worked on
                  making IG Reels ✨reliable, fast, and efficient✨
                </p>
              </div>
              <div
                style={{
                  gridColumn: "4 / 9",
                }}
              >
                <div className={styles.grid_img}>
                  <Image
                    alt="Another pic of me making a peace sign, this time in front of the IG office"
                    src={ig}
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  gridColumn: "9/13",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  gap: "1rem",
                  marginLeft: "10px",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(12px, 2vw, 16px)",
                  }}
                >
                  Can&apos;t reveal too much because I signed an NDA xD
                  <br />
                  <br />
                  In other words, interview me for a role to know more about my
                  experience ;)
                  <br />
                  <br />
                  but... if you can&rsquo;t tell by how happy I am in this
                  photo, I really enjoyed my time at Meta because of my great
                  team. I also worked on really fun projects.
                </p>
              </div>
            </div>

            <div
              className={styles.grid_section}
              style={{
                gridColumn: "span 12",
              }}
            >
              <div
                style={{
                  gridColumn: "1 / 6",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginRight: "24px",
                }}
              >
                <p
                  className={archivo.className}
                  style={{
                    fontWeight: 500,
                    fontSize: "2rem",
                  }}
                >
                  MicDrop
                </p>
                <p
                  style={{
                    fontSize: "clamp(12px, 2vw, 16px)",
                  }}
                >
                  Senior Design project where I led a team of 4 in creating a
                  karaoke video streaming service.
                  <br />
                  <br />
                  I researched many topics in system design for this project.
                  Specifically, I used a CDN for streaming the videos I saved in
                  a database
                  <br />
                  <br />
                  I created the entire software design, database design, and
                  system design.
                  <br />
                  <br />
                  I also created algorithms for displaying text in sync with a
                  video player.
                  <br />
                  <br />
                  *No demo at this time, sorry :(*
                </p>
              </div>
              <div
                style={{
                  gridColumn: "6 / span 7",
                }}
              >
                <div className={styles.grid_img}>
                  <Image
                    alt="Another pic of me making a peace sign, this time in front of the IG office"
                    src={md}
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
