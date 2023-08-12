"use client";

import "./globals.css";
import Link from "next/link";
import { RotatingText } from "rotating-text";
import "rotating-text/dist/index.css";
import { archivo } from "./font";

export default function Navigation() {
  return (
    <div
      id="nav"
      style={{
        display: "none",
      }}
      className={`navigation ${archivo.className}`}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Link
          className="navigation_upper_card"
          style={{
            alignItems: "flex-start",
          }}
          href="/works"
        >
          <RotatingText
            text="WORKS"
            stagger={0.1}
            timing={0.5}
            className="rotating-text"
          />
        </Link>
        <div className="hr" />{" "}
        <Link
          className="navigation_upper_card"
          style={{
            alignItems: "flex-end",
          }}
          href="/biography"
        >
          <RotatingText
            text="BIOGRAPHY"
            stagger={0.1}
            timing={0.5}
            className="rotating-text"
          />
        </Link>
      </div>
      <div className="hr" />
      <div
        style={{
          flex: 1,
          gap: "2rem",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Link
            style={{
              padding: "1rem 0",
            }}
            href="/archive"
          >
            <RotatingText
              text="ARCHIVE"
              stagger={0.1}
              timing={0.5}
              className="rotating-text"
            />
          </Link>
        </div>
        <div className="hr" />
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            gap: "2rem",
            alignItems: "flex-end",
          }}
        >
          <Link
            style={{
              display: "flex",
              width: "100%",
              paddingBottom: "5rem",
            }}
            target="_blank"
            href="https://drive.google.com/file/d/1zWv-SvIjuuBI5WuH1pOVTdAM_cOdjqo2/view?usp=sharing"
          >
            <RotatingText
              text="RESUME"
              stagger={0.1}
              timing={0.5}
              className="rotating-text"
            />
          </Link>
          <div className="vr" />
          <div
            style={{
              display: "flex",
              width: "100%",
              paddingBottom: "4.75rem",
              justifyContent: "flex-end",
            }}
          >
            <p>ANDREI 🤩</p>
          </div>
        </div>
      </div>
    </div>
  );
}
