"use client";

import "./globals.css";
import Link from "next/link";
import { RotatingText } from "rotating-text";
import "rotating-text/dist/index.css";
import { archivo } from "./font";
import { useMenu } from "./header";
import { useCallback } from "react";

export default function Navigation() {
  const { menuOpen, setMenuOpen } = useMenu();

  let clearMenu = useCallback(() => {
    let nav = document.getElementById("nav");
    if (nav.style.display == "flex") {
      nav.classList.add("fade_out_nav");
      setTimeout(() => {
        nav.style.display = "none";
        nav.classList.remove("fade_out_nav");
      }, 750);
      setMenuOpen(false);
    }
  }, [setMenuOpen]);
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
          onClick={() => {
            clearMenu();
          }}
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
          onClick={() => {
            clearMenu();
          }}
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
          display: "flex",
          flexDirection: "column",
          flex: 1,
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
            onClick={() => {
              clearMenu();
            }}
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
            paddingTop: "1rem",
          }}
        >
          <Link
            style={{
              display: "flex",
              width: "100%",
              paddingBottom: "10px",
            }}
            target="_blank"
            href="https://drive.google.com/file/d/1zWv-SvIjuuBI5WuH1pOVTdAM_cOdjqo2/view?usp=sharing"
          >
            <RotatingText
              text="RESUME"
              stagger={0.1}
              timing={0.5}
              className="rotating-text"
              style={{
                fontSize: "2rem",
              }}
            />
          </Link>
          <div className="vr" />
          <div
            style={{
              display: "flex",
              width: "100%",
              paddingBottom: "0rem",
              justifyContent: "flex-end",
            }}
          >
            <Link
              target="_blank"
              href="https://www.instagram.com/andrei.dimaano/"
            >
              <RotatingText
                text="ANDREI&nbsp;🤩"
                stagger={0.1}
                timing={0.5}
                className="rotating-text"
                style={{
                  fontSize: "1rem",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
