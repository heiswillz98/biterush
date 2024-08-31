import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Hanken_Grotesk } from "next/font/google";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={hanken.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
