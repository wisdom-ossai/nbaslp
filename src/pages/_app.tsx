import "@slp/styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "@slp/styles/lib/animate/animate.min.css";
import "@slp/styles/bootstrap.min.css";
import "@slp/styles/globals.css";
import type { AppProps } from "next/app";
import TopNav from "@slp/components/TopNav";
import Navbar from "@slp/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopNav />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
