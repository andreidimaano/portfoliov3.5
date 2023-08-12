"use client";

import Link from "next/link";
import { useState } from "react";
import { inter } from "./font";
import "./globals.css";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "0.25rem 1.5rem",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          gap: "5rem",
          alignItems: "center",
          fontSize: "0.8rem",
          lineHeight: "1.2rem",
          fontWeight: 500,
        }}
        className={inter.className}
      >
        ANDREI DIMAANO
      </Link>
      <div
        style={{
          fontSize: "0.8rem",
          fontWeight: 500,
          cursor: "pointer",
        }}
        onClick={() => {
          let nav = document.getElementById("nav");
          if (nav.style.display == "none") {
            nav.classList.add("fade_in_nav");
            nav.style.display = "flex";
            setTimeout(() => {
              nav.classList.remove("fade_in_nav");
            }, 300);
            setNavOpen(true);
          } else {
            nav.classList.add("fade_out_nav");
            setTimeout(() => {
              nav.style.display = "none";
              nav.classList.remove("fade_out_nav");
            }, 300);
            setNavOpen(false);
          }
        }}
      >
        {navOpen ? "CLOSE" : "MENU"}
      </div>
    </header>
  );
}
