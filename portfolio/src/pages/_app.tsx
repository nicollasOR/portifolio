
import '../pages/styles/globals.css'
import type { AppProps } from "next/app";

import Head from "next/head";
import Image from "next/image";
import { M_PLUS_Rounded_1c, Lobster, Gajraj_One } from "next/font/google";
import styles from "@/styles/Home.module.css";

const gajraJ = Gajraj_One({
  variable: "--font-header",
  subsets: ["latin"],
  weight: ["400"],
});

const RoundedM = M_PLUS_Rounded_1c({
  variable: "--font-texto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

const lobster = Lobster({
  variable: "--font-titulo",
  subsets: ["latin"],
  weight: ["400"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={`${gajraJ.variable} ${lobster.variable} ${RoundedM.variable}`}>
  
  
  <Component {...pageProps} />
  </main>
  )

}


