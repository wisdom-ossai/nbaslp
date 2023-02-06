import "@slp/styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "@slp/styles/lib/animate/animate.min.css";
import "@slp/styles/bootstrap.min.css";
import "@slp/styles/globals.css";
import type { AppProps } from "next/app";
import TopNav from "@slp/components/TopNav";
import Navbar from "@slp/components/Navbar";
import Footer from "@slp/components/Footer";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        crossOrigin="anonymous"
      />
      <Script src="/assets/scripts/wow/wow.min.js" />
      <Script src="/assets/scripts/easing/easing.min.js" />
      <Script src="/assets/scripts/waypoints/waypoints.min.js" />
      <Script src="/assets/scripts/counterup/counterup.min.js" />
      <Script src="/assets/scripts/owlcarousel/owl.carousel.min.js" />

      <Script src="/assets/scripts/main.js" />
    </>
  );
}
