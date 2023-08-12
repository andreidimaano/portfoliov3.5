import Link from "next/link";
import { archivo } from "./font";
import "./globals.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Link
        style={{
          fontSize: "0.8rem",
          fontWeight: 500,
        }}
        target="_blank"
        className={archivo.className}
        href="https://www.linkedin.com/in/andrei-dimaano/"
      >
        LINKEDIN
      </Link>
      <Link
        style={{
          fontSize: "0.8rem",
          fontWeight: 500,
        }}
        target="_blank"
        className={archivo.className}
        href="https://github.com/andreidimaano"
      >
        GITHUB
      </Link>
    </footer>
  );
}
