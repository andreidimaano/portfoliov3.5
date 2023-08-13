"use client";

import Link from "next/link";
import { useContext, createContext, useState, useCallback } from "react";
import { inter } from "./font";
import "./globals.css";

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}

export function Header() {
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
        padding: "0.25rem 1rem",
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
        onClick={() => {
          clearMenu();
        }}
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
            setMenuOpen(true);
            setTimeout(() => {
              nav.classList.remove("fade_in_nav");
            }, 300);
          } else {
            nav.classList.add("fade_out_nav");
            setMenuOpen(false);
            setTimeout(() => {
              nav.style.display = "none";
              nav.classList.remove("fade_out_nav");
            }, 750);
          }
        }}
      >
        {menuOpen ? "CLOSE" : "MENU"}
      </div>
    </header>
  );
}
