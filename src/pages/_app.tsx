import "@slp/styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "@slp/styles/lib/animate/animate.min.css";
import "@slp/styles/bootstrap.min.css";
import "@slp/styles/globals.css";
import type { AppProps } from "next/app";
import AuthContextProvider from "@slp/components/AuthContext/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
