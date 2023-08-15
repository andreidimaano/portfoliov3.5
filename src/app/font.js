import {
  Archivo,
  Inter,
  Pinyon_Script,
  Playfair_Display,
} from "next/font/google";

export const archivo = Archivo({ subsets: ["latin"] });
export const pinyon_script = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export const inter = Inter({ subsets: ["latin"] });
export const playfair = Playfair_Display({
  subsets: ["latin"],
});
